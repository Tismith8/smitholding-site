import { NextResponse } from "next/server"

const EMAIL_TO = "Tim@smitholding.com"

type ContactPayload = {
  name: string
  email: string
  phone: string
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim()
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>

    const payload: ContactPayload = {
      name: sanitize(body.name || ""),
      email: sanitize(body.email || ""),
      phone: sanitize(body.phone || ""),
      message: sanitize(body.message || ""),
    }

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
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
      process.env.CONTACT_FROM_EMAIL ||
      "Smitholding Website <info@smitholding>"

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Server email integration is not configured." },
        { status: 500 }
      )
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New Smitholding Website Inquiry</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; border: 1px solid #ddd; padding: 12px; border-radius: 8px;">${payload.message}</div>
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
        subject: `New website inquiry from ${payload.name}`,
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
    console.error("Contact form submission failed:", error)
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    )
  }
}
