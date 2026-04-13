"use client"

import { useState } from "react"

type SellerFormState = {
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

export function SellerIntakeForm() {
  const [formData, setFormData] = useState<SellerFormState>({
    propertyAddress: "",
    cityState: "",
    propertyCondition: "",
    occupancyStatus: "",
    timelineToSell: "",
    name: "",
    phone: "",
    email: "",
    details: "",
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/seller-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.")
      }

      setStatus("success")
      setFormData({
        propertyAddress: "",
        cityState: "",
        propertyCondition: "",
        occupancyStatus: "",
        timelineToSell: "",
        name: "",
        phone: "",
        email: "",
        details: "",
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send your message."
      )
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-white/30"

  const selectClass =
    "w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none"

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="propertyAddress"
          value={formData.propertyAddress}
          onChange={handleChange}
          placeholder="Property address"
          required
          className={inputClass}
        />

        <input
          name="cityState"
          value={formData.cityState}
          onChange={handleChange}
          placeholder="City, State"
          required
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <select
          name="propertyCondition"
          value={formData.propertyCondition}
          onChange={handleChange}
          required
          className={selectClass}
        >
          <option value="">Property condition</option>
          <option value="Move-in ready">Move-in ready</option>
          <option value="Needs cosmetic work">Needs cosmetic work</option>
          <option value="Needs major renovation">Needs major renovation</option>
          <option value="Not sure">Not sure</option>
        </select>

        <select
          name="occupancyStatus"
          value={formData.occupancyStatus}
          onChange={handleChange}
          required
          className={selectClass}
        >
          <option value="">Occupancy status</option>
          <option value="Owner occupied">Owner occupied</option>
          <option value="Tenant occupied">Tenant occupied</option>
          <option value="Vacant">Vacant</option>
          <option value="Not sure">Not sure</option>
        </select>
      </div>

      <div className="grid gap-4">
        <select
          name="timelineToSell"
          value={formData.timelineToSell}
          onChange={handleChange}
          required
          className={selectClass}
        >
          <option value="">Timeline to sell</option>
          <option value="ASAP">ASAP</option>
          <option value="Within 30 days">Within 30 days</option>
          <option value="1-3 months">1–3 months</option>
          <option value="Just exploring options">Just exploring options</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className={inputClass}
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className={inputClass}
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          className={inputClass}
        />
      </div>

      <textarea
        name="details"
        value={formData.details}
        onChange={handleChange}
        rows={6}
        placeholder="Anything else you'd like to share about the property?"
        className={inputClass}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600 disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit Property"}
      </button>

      {status === "success" && (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Thanks — your property details were sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {errorMessage}
        </div>
      )}
    </form>
  )
}