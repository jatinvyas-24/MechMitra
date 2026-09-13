import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import mechanicPartnerImage from "../assets/mechanic-partner.jpeg";

function ServiceRepairPage({
  title,
  vehicleLabel,
  vehiclePlaceholder,
  heroTitle,
  heroDescription,
  locationDescription,
  issuePlaceholder,
  selectPlaceholder,
  issueTypes,
  mechanics,
}) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`Your ${title.toLowerCase()} issue is ready. Nearby mechanic options are shown below.`);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-[#103a5a]">
        <img
          src={mechanicPartnerImage}
          alt="Mechanic partner standing beside a motorcycle with a tool kit"
          className="absolute inset-0 h-full w-full object-cover object-right opacity-40"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,58,90,.98),rgba(16,58,90,.82),rgba(16,58,90,.34))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center px-4 py-12 sm:min-h-[500px] sm:px-10 sm:py-14 lg:px-[7vw]">
          <div className="max-w-[720px] text-white">
            <p className="text-sm font-extrabold uppercase tracking-normal text-amber-300">
              {title}
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-slate-100 sm:text-lg">
              {heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#142139] sm:text-5xl">
              Search by location
            </h2>
            <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-600 sm:text-lg">
              {locationDescription}
            </p>

            <form className="mt-8 rounded-lg bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200 sm:p-7" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Current location</span>
                  <input
                    type="text"
                    name="location"
                    required
                    className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Area, landmark, or city"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-slate-700">{vehicleLabel}</span>
                  <input
                    type="text"
                    name="vehicleDetails"
                    className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                    placeholder={vehiclePlaceholder}
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="text-sm font-bold text-slate-700">Issue type</span>
                <select
                  name="issueType"
                  required
                  defaultValue=""
                  className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                >
                  <option value="" disabled>
                    {selectPlaceholder}
                  </option>
                  {issueTypes.map((issue) => (
                    <option key={issue} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-4 block">
                <span className="text-sm font-bold text-slate-700">Explain the issue</span>
                <textarea
                  name="issueDetails"
                  required
                  rows="5"
                  className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  placeholder={issuePlaceholder}
                />
              </label>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Enter phone number"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Help needed</span>
                  <select
                    name="urgency"
                    defaultValue="now"
                    className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  >
                    <option value="now">Now</option>
                    <option value="today">Later today</option>
                    <option value="scheduled">Schedule visit</option>
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-500"
              >
                Search Nearby Mechanic
              </button>

              {message && (
                <p className="mt-4 rounded-lg border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-800">
                  {message}
                </p>
              )}
            </form>
          </div>

          <aside className="lg:pt-3">
            <div className="rounded-lg bg-[#eef4f8] p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-normal text-cyan-700">
                    Nearby options
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#142139] sm:text-3xl">
                    Mechanics around you
                  </h2>
                </div>
                <span className="rounded-lg bg-white px-3 py-2 text-sm font-extrabold text-[#103a5a] ring-1 ring-slate-200">
                  {mechanics.length} found
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {mechanics.map((mechanic) => (
                  <article key={mechanic.name} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-xl font-extrabold leading-tight text-slate-950">
                          {mechanic.name}
                        </h3>
                        <p className="mt-2 text-sm font-bold text-cyan-700">{mechanic.area}</p>
                      </div>
                      <span className="shrink-0 rounded-lg bg-amber-100 px-3 py-1.5 text-sm font-extrabold text-slate-900">
                        {mechanic.rating}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {mechanic.specialty}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <span className="text-sm font-bold text-slate-600">Reach in {mechanic.time}</span>
                      <button
                        type="button"
                        className="inline-flex min-h-10 items-center justify-center rounded-lg bg-[#103a5a] px-4 text-sm font-extrabold text-white transition hover:bg-[#0a2d48]"
                      >
                        Select
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ServiceRepairPage;
