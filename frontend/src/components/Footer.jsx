import { Link } from "react-router-dom";

const quickLinks = [["Home", "/"], ["About", "/about"], ["Features", "/features"], ["Contact", "/contact"]];
const customerLinks = [["Find a Mechanic", "/#finder"], ["Request Service", "/#finder"], ["Track Mechanic", "/features"], ["Service History", "/login"]];
const mechanicLinks = [["Become a Mechanic", "/contact"], ["Mechanic Login", "/login"], ["Manage Requests", "/login"], ["Earnings", "/features"]];
const supportLinks = [["Help Center", "/contact"], ["Contact Us", "/contact"], ["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"]];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="text-sm font-extrabold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map(([label, to]) => <li key={label}><Link className="text-sm text-slate-300 transition hover:text-amber-300" to={to}>{label}</Link></li>)}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0e334f] text-slate-200">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:grid-cols-2 sm:px-10 sm:py-14 lg:grid-cols-[1.55fr_repeat(4,1fr)] lg:gap-8 lg:px-[7vw]">
        <div className="max-w-[310px] sm:col-span-2 lg:col-span-1">
          <Link to="/" className="text-2xl font-extrabold text-white">MechMitra</Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">Your trusted way to find nearby mechanics and get roadside assistance when you need it most.</p>
        </div>
        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="For Customers" links={customerLinks} />
        <FooterColumn title="For Mechanics" links={mechanicLinks} />
        <FooterColumn title="Support" links={supportLinks} />
      </div>
      <div className="border-t border-slate-600/70 px-4 py-5 sm:px-10 lg:px-[7vw]"><p className="mx-auto max-w-[1440px] text-sm text-slate-400">&copy; 2026 MechMitra. All rights reserved.</p></div>
    </footer>
  );
}

export default Footer;
