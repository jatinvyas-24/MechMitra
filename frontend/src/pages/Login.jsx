import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mechmitra-logo.jpeg";

function Login() {
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const isSignup = authMode === "signup";

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      isSignup
        ? "Account details are ready to connect with the backend."
        : "Login details are ready to connect with the backend."
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <section className="relative flex min-h-dvh items-start justify-center bg-[#eef4f8] px-4 pb-8 pt-20 sm:items-center sm:px-10 sm:py-12">
        <Link
          to="/"
          aria-label="Back to home"
          className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-lg bg-white text-2xl font-extrabold text-[#103a5a] shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 sm:left-8 sm:top-8 sm:size-11"
        >
          &larr;
        </Link>

        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center">
          <div className="flex min-h-[560px] w-full max-w-[560px] flex-col justify-start rounded-lg bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:min-h-[600px] sm:p-7">
            <Link to="/" className="mx-auto flex w-fit flex-col items-center gap-3 text-center text-lg font-extrabold text-[#142139]">
              <span className="block size-16 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100">
                <img src={logo} alt="" className="h-full w-full object-cover" />
              </span>
              <span>MechMitra</span>
            </Link>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              {isSignup && (
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Full name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Enter your full name"
                  />
                </label>
              )}

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email address</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Password</span>
                <div className="mt-2 flex h-12 overflow-hidden rounded-lg border border-slate-200 bg-white focus-within:border-cyan-600 focus-within:ring-4 focus-within:ring-cyan-100">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete={isSignup ? "new-password" : "current-password"}
                    required
                    minLength={6}
                    className="min-w-0 flex-1 px-4 text-sm text-slate-900 outline-none"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="shrink-0 px-4 text-xs font-extrabold text-cyan-700 hover:bg-cyan-50"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <label className="inline-flex items-center gap-2 font-semibold text-slate-600">
                  <input type="checkbox" className="size-4 rounded border-slate-300 accent-cyan-700" />
                  Remember me
                </label>
                {!isSignup && (
                  <Link to="/login" className="font-bold text-cyan-700 hover:text-cyan-900">
                    Forgot password?
                  </Link>
                )}
              </div>

              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-950 transition hover:bg-amber-500"
              >
                {isSignup ? "Create Account" : "Login"}
              </button>
            </form>

            {message && (
              <p className="mt-4 rounded-lg border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-800">
                {message}
              </p>
            )}

            <p className="mt-6 text-center text-sm text-slate-500">
              {isSignup ? "Already have an account?" : "New to MechMitra?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setAuthMode(isSignup ? "login" : "signup");
                  setMessage("");
                }}
                className="font-extrabold text-cyan-700 hover:text-cyan-900"
              >
                {isSignup ? "Login" : "Create one"}
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
