import { Link } from "react-router-dom";
import mechanicPartnerImage from "../assets/mechanic-partner.jpeg";

function Mechanic() {
  return (
    <section id="mechanic" className="relative overflow-hidden bg-[#eef4f8]">
      <img
        src={mechanicPartnerImage}
        alt="Mechanic partner standing beside a motorcycle with a tool kit"
        className="absolute inset-y-0 right-0 hidden h-full w-auto max-w-none object-contain object-right sm:block"
      />
      <div className="absolute inset-0 bg-slate-50/90 lg:hidden" />
      <div
        className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,#eef4f8_0%,rgba(238,244,248,.96)_31%,rgba(238,244,248,.68)_53%,rgba(238,244,248,.12)_78%,rgba(238,244,248,0)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[380px] max-w-[1440px] items-center px-4 py-14 sm:min-h-[430px] sm:px-10 sm:py-16 lg:min-h-[500px] lg:px-[7vw]">
        <div className="max-w-[590px]">
          <h2 className="text-3xl font-extrabold leading-tight text-[#142139] sm:text-5xl lg:text-6xl">
            Become a Mechmitra Partner
          </h2>
          <p className="mt-6 max-w-[540px] text-base leading-relaxed text-slate-600 sm:text-lg">
            Join Mechmitra and connect with customers who need vehicle repair and roadside assistance in your area.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 text-sm font-extrabold text-slate-900 transition hover:bg-amber-500 sm:w-auto"
          >
            Join as a Mechanic
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Mechanic;
