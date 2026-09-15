import { Link } from "react-router-dom";

const quickLinks = [["Home", "/"], ["Earning", "/earning"], ["Order", "/order"], ["Profile", "/profile"]];
const mechanicLinks = [["Join as a Mechanic", "/login"], ["Manage Orders", "/order"], ["Track Earnings", "/earning"], ["Update Profile", "/profile"]];
const supportLinks = [["Help Center", "/login"], ["Service Guidelines", "/order"], ["Privacy Policy", "/profile"], ["Terms & Conditions", "/profile"]];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="text-sm font-extrabold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link className="text-sm text-slate-300 transition hover:text-amber-300" to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0e334f] text-slate-200">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:grid-cols-2 sm:px-10 sm:py-14 lg:grid-cols-[1.6fr_repeat(3,1fr)] lg:gap-8 lg:px-[7vw]">
        <div className="max-w-[330px] sm:col-span-2 lg:col-span-1">
          <Link to="/" className="text-2xl font-extrabold text-white">MechMitra</Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">A trusted partner platform for mechanics to receive nearby service orders, manage work, and grow daily earnings.</p>
        </div>
        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="For Mechanics" links={mechanicLinks} />
        <FooterColumn title="Support" links={supportLinks} />
      </div>
      <div className="border-t border-slate-600/70 px-4 py-5 sm:px-10 lg:px-[7vw]">
        <p className="mx-auto max-w-[1440px] text-sm text-slate-400">&copy; 2026 MechMitra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
