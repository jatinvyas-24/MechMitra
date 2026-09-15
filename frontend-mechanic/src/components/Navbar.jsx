import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/mechmitra-logo.jpeg";

const navItems = [
  ["Earning", "/earning"],
  ["Order", "/order"],
  ["Profile", "/profile"],
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[70px] max-w-[1440px] items-center gap-3 px-4 sm:min-h-[84px] sm:px-7 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-[8vw]">
        <NavLink
          className="inline-flex min-w-0 shrink-0 items-center gap-2.5 text-[18px] font-extrabold text-slate-900 sm:text-[22px]"
          to="/"
          aria-label="MechMitra mechanic home"
          onClick={closeMenu}
        >
          <span
            className="block size-10 shrink-0 overflow-hidden rounded-lg bg-white"
            aria-hidden="true"
          >
            <img
              src={logo}
              alt=""
              width="60"
              height="60"
              className="block size-full max-w-none object-cover"
            />
          </span>
          <span className="truncate">MechMitra</span>
        </NavLink>

        <nav
          className="hidden h-full items-center justify-center gap-8 text-sm font-semibold lg:col-start-2 lg:flex xl:gap-12"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, to]) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `group flex h-full items-center ${isActive ? "text-cyan-700" : "hover:text-cyan-700"}`
              }
            >
              {({ isActive }) => (
                <span
                  className={`border-b-[3px] pb-1.5 ${isActive ? "border-cyan-600" : "border-transparent group-hover:border-cyan-600"}`}
                >
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:col-start-3 lg:justify-self-end">
          <NavLink
            className="hidden min-h-11 shrink-0 items-center rounded-lg bg-[#103a5a] px-4 text-sm font-bold text-white hover:bg-[#0a2d48] sm:inline-flex"
            to="/login"
            onClick={closeMenu}
          >
            Login / Sign Up
          </NavLink>
          <button
            type="button"
            className="inline-flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white text-[#103a5a] shadow-sm transition hover:bg-slate-50 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`${isMenuOpen ? "grid" : "hidden"} gap-2 border-t border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-7 lg:hidden`}
        aria-label="Mobile navigation"
      >
        {navItems.map(([label, to]) => (
          <NavLink
            key={label}
            to={to}
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-sm font-bold transition ${isActive ? "bg-cyan-50 text-cyan-700" : "text-slate-700 hover:bg-slate-50 hover:text-cyan-700"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
