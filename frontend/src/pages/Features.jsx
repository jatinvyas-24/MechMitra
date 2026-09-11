import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mechanicPartnerImage from "../assets/mechanic-partner.jpeg";

const features = [
  {
    title: "Nearby mechanic matching",
    description:
      "Connect customers with mechanics who can respond to the vehicle type, issue, and location.",
  },
  {
    title: "Service request details",
    description:
      "Capture breakdown type, contact details, and notes so the mechanic knows what to expect.",
  },
  {
    title: "Customer and mechanic flows",
    description:
      "Support both sides of the service experience with login paths and partner request routing.",
  },
  {
    title: "Roadside-first services",
    description:
      "Prioritize practical help for tyres, batteries, engines, bike repairs, and car breakdowns.",
  },
  {
    title: "Location-ready assistance",
    description:
      "Designed around local dispatch so customers can get help without searching through long lists.",
  },
  {
    title: "Service history foundation",
    description:
      "Prepare the experience for future records, repeat requests, and customer account activity.",
  },
];

const steps = [
  {
    title: "Request",
    description: "Customer shares the vehicle issue and basic service details.",
  },
  {
    title: "Match",
    description: "MechMitra routes the request toward a suitable nearby mechanic.",
  },
  {
    title: "Reach",
    description: "The mechanic gets the context needed before arriving.",
  },
  {
    title: "Resolve",
    description: "Customer gets support and can continue the journey.",
  },
];

function Features() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-[#142139]">
        <img
          src={mechanicPartnerImage}
          alt="Mechanic partner standing beside a motorcycle with a tool kit"
          className="absolute inset-0 h-full w-full object-cover object-right opacity-40"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,57,.98),rgba(20,33,57,.78),rgba(20,33,57,.3))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[440px] max-w-[1440px] items-center px-4 py-12 sm:min-h-[520px] sm:px-10 sm:py-14 lg:px-[7vw]">
          <div className="max-w-[720px] text-white">
            <p className="text-sm font-extrabold uppercase tracking-normal text-amber-300">
              Features
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Everything needed to get help moving.
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-slate-100 sm:text-lg">
              MechMitra brings service requests, mechanic matching, and roadside support into one direct experience.
            </p>
            <Link
              to="/login"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-500 sm:w-auto"
            >
              Start a Request
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-[720px]">
            <h2 className="text-3xl font-extrabold leading-tight text-[#142139] sm:text-5xl">
              Built around the moments drivers actually face.
            </h2>
            <div className="mt-5 h-1.5 w-28 bg-amber-400 sm:w-40" aria-hidden="true" />
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-11 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="min-h-[170px] rounded-lg bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md sm:min-h-[190px] sm:p-6"
              >
                <h3 className="text-xl font-extrabold leading-tight text-slate-950 sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4f8] px-4 py-14 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-[#142139] sm:text-5xl">
                How a service request flows
              </h2>
              <p className="mt-5 max-w-[640px] text-base leading-relaxed text-slate-600 sm:text-lg">
                Each step keeps the next action clear for the customer and the mechanic.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#103a5a] px-5 text-sm font-extrabold text-white transition hover:bg-[#0a2d48] sm:w-fit"
            >
              Partner With Us
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
                <p className="text-sm font-extrabold text-cyan-700">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-extrabold text-slate-950 sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Features;
