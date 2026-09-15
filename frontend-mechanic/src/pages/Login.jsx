import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <section className="px-4 py-16 sm:px-10 lg:px-[7vw]">
        <div className="mx-auto max-w-[520px] rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold text-[#142139]">Mechanic Login</h1>
          <form className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Mobile Number</span>
              <input className="mt-2 min-h-12 w-full rounded-lg border border-slate-300 px-4 outline-none focus:border-cyan-600" type="tel" placeholder="Enter mobile number" />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Password</span>
              <input className="mt-2 min-h-12 w-full rounded-lg border border-slate-300 px-4 outline-none focus:border-cyan-600" type="password" placeholder="Enter password" />
            </label>
            <button type="button" className="min-h-12 w-full rounded-lg bg-[#103a5a] px-4 text-sm font-extrabold text-white hover:bg-[#0a2d48]">Login / Sign Up</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Login;
