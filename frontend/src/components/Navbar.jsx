import logo from "../assets/mechmitra-logo.jpeg";
import { NavLink } from "react-router-dom";

const navItems = [["Home", "/"], ["About", "/about"], ["Features", "/features"], ["Contact", "/contact"]];

function Navbar() {
  return (
    <header className="flex h-[70px] items-center gap-3 border-b border-slate-200 bg-white px-5 sm:h-[84px] sm:px-7 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-[8vw]">
      <NavLink className="inline-flex shrink-0 items-center gap-2.5 text-[18px] font-extrabold text-slate-900 sm:text-[22px]" to="/" aria-label="MechMitra home">
        <span className="block size-10 shrink-0 overflow-hidden rounded-lg bg-white" aria-hidden="true">
          <img
            src={logo}
            alt=""
            width="60"
            height="60"
            className="block size-10 max-w-none object-cover"
            style={{ width: "40px", height: "40px" }}
          />
        </span>
        <span>MechMitra</span>
      </NavLink>
      <nav className="hidden h-full items-center justify-center gap-8 text-sm font-semibold lg:col-start-2 lg:flex xl:gap-12" aria-label="Primary navigation">
        {navItems.map(([label, to]) => (
          <NavLink key={label} to={to} end={to === "/"} className={({ isActive }) => `group flex h-full items-center ${isActive ? "text-cyan-700" : "hover:text-cyan-700"}`}>
            {({ isActive }) => <span className={`border-b-[3px] pb-1.5 ${isActive ? "border-cyan-600" : "border-transparent group-hover:border-cyan-600"}`}>{label}</span>}
          </NavLink>
        ))}
      </nav>
      <NavLink className="ml-auto shrink-0 rounded-lg bg-[#103a5a] px-3 py-2.5 text-xs font-bold text-white hover:bg-[#0a2d48] sm:px-4 sm:text-sm lg:col-start-3 lg:justify-self-end" to="/login">Login / Sign Up</NavLink>
    </header>
  );
}

export default Navbar;
