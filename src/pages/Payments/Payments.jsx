import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, CheckCircle2, CreditCard, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const paymentSummary = [
  { label: "Total booked", value: "₹4.8L", caption: "Across 6 vendors" },
  { label: "Paid so far", value: "₹3.1L", caption: "64% completed" },
  { label: "Due this month", value: "₹92k", caption: "2 upcoming invoices" },
  { label: "Saved for project", value: "₹1.5L", caption: "Emergency reserve" },
];

const upcomingInvoices = [
  { vendor: "StonePeak Builders", service: "Site advance", amount: "₹1,20,000", due: "15 Aug", status: "Due soon" },
  { vendor: "Nestform Interiors", service: "Interior design package", amount: "₹78,000", due: "22 Aug", status: "Scheduled" },
  { vendor: "Apex Architects Studio", service: "Design milestone", amount: "₹96,000", due: "30 Aug", status: "Scheduled" },
];

const paymentTimeline = [
  { title: "Site booking confirmed", date: "12 Jul", amount: "₹1,20,000", status: "Paid" },
  { title: "Architectural advance", date: "23 Jul", amount: "₹60,000", status: "Paid" },
  { title: "Interior design deposit", date: "4 Aug", amount: "₹80,000", status: "Paid" },
  { title: "Landscape final balance", date: "18 Aug", amount: "₹45,000", status: "Pending" },
];

const paymentMethods = [
  { method: "HDFC Credit Card", last4: "•••• 4028", type: "Primary" },
  { method: "UPI - Aanya parmar", last4: "@paytm", type: "Secondary" },
];

function Payments() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Payments
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Budget and payment tracker
                </h1>
              </div>

              <Button
                asChild
                className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
              >
                <Link to="/dashboard">
                  Back to dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paymentSummary.map(({ label, value, caption }) => (
              <div key={label} className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
                <p className="mt-2 text-sm text-slate-500">{caption}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Upcoming</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Invoices to settle</h2>
                </div>
                <CreditCard className="h-5 w-5 text-amber-500" />
              </div>

              <div className="mt-6 space-y-4">
                {upcomingInvoices.map(({ vendor, service, amount, due, status }) => (
                  <div key={`${vendor}-${service}`} className="flex flex-col gap-3 rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{vendor}</p>
                      <p className="text-sm text-slate-500">{service}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-slate-800">{amount}</span>
                      <span className="text-sm text-slate-500">Due {due}</span>
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${status === "Due soon" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"}`}>
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Payment methods</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Saved options</h2>
                </div>
                <ShieldCheck className="h-5 w-5 text-amber-500" />
              </div>

              <div className="mt-6 space-y-4">
                {paymentMethods.map(({ method, last4, type }) => (
                  <div key={method} className="rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium text-slate-900">{method}</p>
                        <p className="text-sm text-slate-500">{last4}</p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        {type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Ledger</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Payment timeline</h2>
              </div>
              <Sparkles className="h-5 w-5 text-amber-500" />
            </div>

            <div className="mt-6 space-y-4">
              {paymentTimeline.map(({ title, date, amount, status }) => (
                <div key={title} className="flex flex-col gap-3 rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full ${status === "Paid" ? "bg-emerald-500 text-white" : "bg-amber-100 text-amber-700"}`}>
                      {status === "Paid" ? <CheckCircle2 className="h-4 w-4" /> : <CalendarDays className="h-4 w-4" />}
                    </span>
                    <div>
                      <p className="font-medium text-slate-900">{title}</p>
                      <p className="text-sm text-slate-500">{date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-800">{amount}</span>
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${status === "Paid" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Payments;
