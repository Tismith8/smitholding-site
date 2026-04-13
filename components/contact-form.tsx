"use client"

import { useState } from "react"
import { ChevronRight, LoaderCircle, Mail, Phone, UserRound } from "lucide-react"

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
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
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send your message."
      )
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/55">Name</span>
          <div className="relative">
            <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/55">Email</span>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60"
            />
          </div>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/55">Phone</span>
        <div className="relative">
          <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60"
          />
        </div>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/55">How can we help?</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us about the property, project, or opportunity"
          required
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-red-500/60"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            Submit Inquiry <ChevronRight className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "success" && (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Thanks — your message has been sent.
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
