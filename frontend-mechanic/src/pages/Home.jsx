import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import heroImage from "../assets/mechmitra-hero.jpeg";

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />

      <section id="home" className="relative overflow-hidden bg-[#f3f7fb] lg:min-h-[650px]">
        <div className="relative z-10 flex px-4 py-12 sm:px-10 sm:py-16 lg:min-h-[650px] lg:w-[55%] lg:items-center lg:px-[7vw]">
          <div className="w-full max-w-[620px]">
            <h1 className="text-3xl font-bold leading-tight text-[#142139] sm:text-5xl lg:text-6xl">
              Join as a Mechanic
              <span className="block text-cyan-700">Grow With MechMitra.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Accept nearby repair orders, help customers during breakdowns, and manage your work from one simple mechanic dashboard.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/login"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-900 transition hover:bg-amber-500 sm:w-auto"
              >
                Join Now
              </a>
              <a
                href="/order"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-extrabold text-[#103a5a] transition hover:bg-slate-50 sm:w-auto"
              >
                View Orders
              </a>
            </div>
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

      <section className="bg-white px-4 py-12 sm:px-10 lg:px-[7vw]">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#142139]">Get Local Orders</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Receive nearby service requests for breakdowns, repairs, and roadside assistance.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#142139]">Track Earnings</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Keep a clear view of completed jobs and daily income from your mechanic account.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#142139]">Build Trust</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Maintain your profile so customers can quickly choose a reliable mechanic.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
