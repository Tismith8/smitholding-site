import { NextResponse } from "next/server"

const EMAIL_TO = "Tim@smitholding.com"

type SellerLeadPayload = {
  propertyAddress: string
  cityState: string
  propertyCondition: string
  occupancyStatus: string
  timelineToSell: string
  name: string
  phone: string
  email: string
  details: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim()
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<SellerLeadPayload>

    const payload: SellerLeadPayload = {
      propertyAddress: sanitize(body.propertyAddress || ""),
      cityState: sanitize(body.cityState || ""),
      propertyCondition: sanitize(body.propertyCondition || ""),
      occupancyStatus: sanitize(body.occupancyStatus || ""),
      timelineToSell: sanitize(body.timelineToSell || ""),
      name: sanitize(body.name || ""),
      phone: sanitize(body.phone || ""),
      email: sanitize(body.email || ""),
      details: sanitize(body.details || ""),
    }

    if (
      !payload.propertyAddress ||
      !payload.cityState ||
      !payload.propertyCondition ||
      !payload.occupancyStatus ||
      !payload.timelineToSell ||
      !payload.name ||
      !payload.email
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      )
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Smitholding LLC <info@smitholding.com>"

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Server email integration is not configured." },
        { status: 500 }
      )
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New Seller Lead from Smitholding.com</h2>
        <p><strong>Property Address:</strong> ${payload.propertyAddress}</p>
        <p><strong>City, State:</strong> ${payload.cityState}</p>
        <p><strong>Property Condition:</strong> ${payload.propertyCondition}</p>
        <p><strong>Occupancy Status:</strong> ${payload.occupancyStatus}</p>
        <p><strong>Timeline to Sell:</strong> ${payload.timelineToSell}</p>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Phone:</strong> ${payload.phone || "Not provided"}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Additional Details:</strong></p>
        <div style="white-space: pre-wrap; border: 1px solid #ddd; padding: 12px; border-radius: 8px;">
          ${payload.details || "None provided"}
        </div>
      </div>
    `

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [EMAIL_TO],
        reply_to: payload.email,
        subject: `New seller lead from ${payload.name}`,
        html: emailHtml,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      return NextResponse.json(
        { error: `Email provider error: ${errorText}` },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Seller lead submission failed:", error)
    return NextResponse.json(
      { error: "Something went wrong while sending your property details." },
      { status: 500 }
    )
  }
}