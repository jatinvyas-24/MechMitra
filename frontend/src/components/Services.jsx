const Services = () => {
    const topServices = [
  {
    title: "Bike Repair",
    description: "Quick roadside help for two-wheelers",
    icon: "\uD83C\uDFCD\uFE0F",
  },
  {
    title: "Car Repair",
    description: "Trusted mechanics for car breakdowns",
    icon: "\uD83D\uDE97",
  },
  {
    title: "Tyre Repair",
    description: "Flat tyre puncture and wheel support",
    icon: "\uD83D\uDEDE",
  },
  {
    title: "Battery Assistance",
    description: "Jump-starts and battery issue checks",
    icon: "\uD83D\uDD0B",
  },
  {
    title: "Engine Repair",
    description: "On-demand support for engine trouble",
    icon: "\uD83D\uDD27",
  },
];

  return (
    <section id="services" className="bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto max-w-[1440px]">
          <div>
            <h2 className="text-4xl font-extrabold tracking-normal text-slate-800 sm:text-5xl lg:text-6xl">
              Top Services
            </h2>
            <div className="mt-5 h-1.5 w-40 bg-amber-400" aria-hidden="true" />
          </div>

          <div className="mt-11 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-11 xl:gap-y-14">
            {topServices.map((service) => (
              <article
                key={service.title}
                className="flex min-h-[182px] items-center justify-between gap-5 rounded-lg bg-slate-50 px-6 py-8 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md sm:px-8"
              >
                <div className="min-w-0">
                  <h3 className="text-2xl font-extrabold leading-tight text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[210px] text-base leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>
                <span className="shrink-0 text-6xl leading-none drop-shadow-sm sm:text-7xl" aria-hidden="true">
                  {service.icon}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services
