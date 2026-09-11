import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import heroImage from "../assets/mechmitra-hero.jpeg";
import mechanicPartnerImage from "../assets/mechanic-partner.jpeg";

const highlights = [
  {
    value: "Fast",
    label: "nearby help for urgent vehicle issues",
  },
  {
    value: "Trusted",
    label: "mechanics matched for practical roadside work",
  },
  {
    value: "Clear",
    label: "service details shared before help is on the way",
  },
];

const values = [
  {
    title: "Built for roadside stress",
    description:
      "MechMitra keeps the request flow simple so customers can explain the issue, share location, and get moving again.",
  },
  {
    title: "Fair for local mechanics",
    description:
      "Mechanic partners get direct service opportunities from nearby customers without complicated discovery steps.",
  },
  {
    title: "Focused on real repairs",
    description:
      "The platform is shaped around common breakdown moments like punctures, battery issues, engine trouble, and two-wheeler support.",
  },
];

function About() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-[#103a5a]">
        <img
          src={heroImage}
          alt="A mechanic helping a customer with a vehicle"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,58,90,.98),rgba(16,58,90,.78),rgba(16,58,90,.36))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[440px] max-w-[1440px] items-center px-4 py-12 sm:min-h-[520px] sm:px-10 sm:py-14 lg:px-[7vw]">
          <div className="max-w-[720px] pb-4 text-white">
            <p className="text-sm font-extrabold uppercase tracking-normal text-amber-300">
              About MechMitra
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Roadside help designed around real vehicle trouble.
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-slate-100 sm:text-lg">
              MechMitra connects customers with nearby mechanics for quick, practical support when a vehicle breaks down.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/#services"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-500 sm:w-auto"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-5 text-sm font-extrabold text-[#103a5a] transition hover:bg-slate-100 sm:w-auto"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#142139] sm:text-5xl">
              Made for customers and mechanics.
            </h2>
            <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-600 sm:text-lg">
              Vehicle trouble is already frustrating. MechMitra gives customers a direct path to help and gives mechanics a cleaner way to receive service requests in their area.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.value}
                className="rounded-lg bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100"
              >
                <h3 className="text-2xl font-extrabold text-cyan-700">{item.value}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4f8] px-4 py-14 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
            <img
              src={mechanicPartnerImage}
              alt="Mechanic partner standing beside a motorcycle with a tool kit"
              className="h-full min-h-[260px] w-full object-cover object-right sm:min-h-[340px]"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#142139] sm:text-5xl">
              What guides us
            </h2>
            <div className="mt-8 space-y-4">
              {values.map((value) => (
                <article key={value.title} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-extrabold text-slate-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;
