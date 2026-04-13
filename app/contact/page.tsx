import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
            Contact
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Let’s talk about your next opportunity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Whether you are looking to discuss a property, investment opportunity, renovation project,
            or potential partnership, Smitholding LLC is always open to the right conversation.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-white/45">Email</div>
              <div className="mt-2 text-lg text-white">Tim@smitholding.com</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-white/45">Phone</div>
              <div className="mt-2 text-lg text-white">570-417-2528</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-white/45">Location</div>
              <div className="mt-2 text-lg text-white">Based in Copiague, NY • Operating Nationwide</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold text-white">Send a message</h2>
          <p className="mt-3 text-white/60">
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}