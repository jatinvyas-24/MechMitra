import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/mechmitra-hero.jpeg";
import Services from "../components/Services";
import Mechanic from "../components/Mechanic";

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />

      <section id="home" className="relative overflow-hidden bg-[#f3f7fb] lg:min-h-[650px]">
        <div className="relative z-10 flex px-4 py-12 sm:px-10 sm:py-16 lg:min-h-[650px] lg:w-[55%] lg:items-center lg:px-[7vw]">
          <div className="w-full max-w-[620px]">
            <h1 className="text-3xl font-bold leading-tight text-[#142139] sm:text-5xl lg:text-6xl">
              Your Vehicle Breaks Down?
              <span className="block text-cyan-700">We&apos;ll Find the Mechanic.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Get quick roadside assistance from trusted mechanics near you. Share your problem and location, and get the right mechanic on the way.
            </p>

            <button
              type="button"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-900 transition hover:bg-amber-500 sm:w-auto"
            >
              Get Mechanic Help
            </button>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:min-h-0 lg:w-[70%]">
          <img
            src={heroImage}
            alt="A mechanic helping a customer with a vehicle"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#f3f7fb_0%,rgba(243,247,251,.88)_10%,rgba(243,247,251,.35)_28%,rgba(243,247,251,0)_42%)] lg:block" />
        </div>
      </section>

      <Services />
      <Mechanic />

      <Footer />
    </main>
  );
}

export default Home;
