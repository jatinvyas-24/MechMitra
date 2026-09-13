import { Link } from "react-router-dom";

const Services = () => {
    const topServices = [
  {
    title: "Bike Repair",
    description: "Quick roadside help for two-wheelers",
    icon: "\uD83C\uDFCD\uFE0F",
    to: "/services/bike-repair",
  },
  {
    title: "Car Repair",
    description: "Trusted mechanics for car breakdowns",
    icon: "\uD83D\uDE97",
    to: "/services/car-repair",
  },
  {
    title: "Tyre Repair",
    description: "Flat tyre puncture and wheel support",
    icon: "\uD83D\uDEDE",
    to: "/services/tyre-repair",
  },
  {
    title: "Battery Assistance",
    description: "Jump-starts and battery issue checks",
    icon: "\uD83D\uDD0B",
    to: "/services/battery-assistance",
  },
  {
    title: "Engine Repair",
    description: "On-demand support for engine trouble",
    icon: "\uD83D\uDD27",
    to: "/services/engine-repair",
  },
];

  return (
    <section id="services" className="bg-white px-4 py-14 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto max-w-[1440px]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-800 sm:text-5xl lg:text-6xl">
              Top Services
            </h2>
            <div className="mt-5 h-1.5 w-28 bg-amber-400 sm:w-40" aria-hidden="true" />
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-11 xl:grid-cols-3 xl:gap-x-11 xl:gap-y-14">
            {topServices.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="flex min-h-[160px] items-start justify-between gap-4 rounded-lg bg-slate-50 px-5 py-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md sm:min-h-[182px] sm:items-center sm:px-8"
              >
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold leading-tight text-slate-950 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[230px] text-sm leading-relaxed text-slate-500 sm:text-base">
                    {service.description}
                  </p>
                </div>
                <span className="shrink-0 text-5xl leading-none drop-shadow-sm sm:text-7xl" aria-hidden="true">
                  {service.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services
