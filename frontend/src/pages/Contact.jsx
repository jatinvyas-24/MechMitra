import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import heroImage from "../assets/mechmitra-hero.jpeg";

const contactOptions = [
  {
    title: "Customer Help",
    detail: "Roadside support, request questions, and service follow-up.",
  },
  {
    title: "Mechanic Partners",
    detail: "Partner onboarding, local coverage, and service opportunities.",
  },
  {
    title: "General Support",
    detail: "Feedback, platform questions, and business inquiries.",
  },
];

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Contact details are ready to connect with the backend.");
  }

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
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,58,90,.98),rgba(16,58,90,.78),rgba(16,58,90,.34))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center px-4 py-12 sm:min-h-[480px] sm:px-10 sm:py-14 lg:px-[7vw]">
          <div className="max-w-[720px] text-white">
            <p className="text-sm font-extrabold uppercase tracking-normal text-amber-300">
              Contact MechMitra
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Tell us what you need and we will route it right.
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-slate-100 sm:text-lg">
              Reach out for customer support, mechanic partnership requests, or questions about bringing MechMitra to more areas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-10 sm:py-20 lg:px-[7vw]">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#142139] sm:text-5xl">
              Reach the right team
            </h2>
            <p className="mt-5 max-w-[580px] text-base leading-relaxed text-slate-600 sm:text-lg">
              Share a few details and the right MechMitra team can pick up the conversation from there.
            </p>

            <div className="mt-8 grid gap-4">
              {contactOptions.map((option) => (
                <article key={option.title} className="rounded-lg bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100">
                  <h3 className="text-xl font-extrabold text-slate-950">{option.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {option.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <form
            className="min-w-0 rounded-lg bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200 sm:p-7"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Full name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  placeholder="Enter phone number"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Email address</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                placeholder="you@example.com"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">I am contacting as</span>
              <select
                name="contactType"
                required
                className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="customer">Customer</option>
                <option value="mechanic">Mechanic partner</option>
                <option value="business">Business inquiry</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                name="message"
                required
                rows="5"
                className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                placeholder="Tell us how we can help"
              />
            </label>

            <button
              type="submit"
              className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-500"
            >
              Send Message
            </button>

            {message && (
              <p className="mt-4 rounded-lg border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-800">
                {message}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Contact;
