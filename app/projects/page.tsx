export default function ProjectsPage() {
  const projects = [
    {
      title: "Noxen, PA Renovation",
      details: "3 Bed • 1 Bath • 1,150 Sq Ft",
      description:
        "Full interior and exterior renovation including new flooring, kitchen, bathroom, custom fireplace, and complete cosmetic upgrades.",
    },
    {
      title: "Ridge, NY Conversion",
      details: "3 Bed • 2 Bath • 1,692 Sq Ft",
      description:
        "Extensive renovation including full kitchen remodel, two new bathrooms, and conversion from a 2-bedroom to a 3-bedroom layout.",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
          Projects & Portfolio
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
          Real projects. Real execution.
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          Smitholding LLC focuses on identifying opportunities, executing renovations, and
          creating value through disciplined real estate strategy.
        </p>
      </div>

      {/* REAL PROJECTS */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-red-300">
              Completed Project
            </div>

            <h2 className="mt-3 text-2xl font-semibold text-white">
              {project.title}
            </h2>

            <div className="mt-2 text-sm text-white/50">{project.details}</div>

            <p className="mt-4 leading-7 text-white/65">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* STRATEGY SECTION */}
      <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        <h2 className="text-2xl font-bold text-white">
          Built on a repeatable process
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-white/65">
          Each project follows a structured approach — from acquisition and planning,
          through renovation and execution, to final positioning for resale, rental,
          or investor disposition. The focus is always on creating measurable value.
        </p>
      </div>
    </section>
  )
}