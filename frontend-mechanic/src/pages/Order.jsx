import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Order() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <section className="px-4 py-16 sm:px-10 lg:px-[7vw]">
        <div className="mx-auto max-w-[1440px] rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold text-[#142139]">Order</h1>
          <p className="mt-4 max-w-2xl text-slate-600">View incoming service orders, customer details, and current repair requests in one place.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Order;
