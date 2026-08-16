import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, ChartNoAxesCombined, LayoutDashboard, ShieldCheck, Users } from "lucide-react";

const initialVendorMetrics = [
  { id: 1, name: "Apex Architects Studio", category: "Architects", status: "Approved", value: "₹68k" },
  { id: 2, name: "StonePeak Builders", category: "Builders", status: "Pending", value: "₹2.4L" },
  { id: 3, name: "Nestform Interiors", category: "Interior Designers", status: "Approved", value: "₹1.2L" },
  { id: 4, name: "Urban Crest Renovations", category: "Renovation", status: "Review", value: "₹96k" },
];

const platformStats = [
  { label: "Active service providers", value: "186", icon: BriefcaseBusiness },
  { label: "New enquiries", value: "482", icon: Users },
  { label: "Approval rate", value: "94%", icon: ShieldCheck },
  { label: "Revenue tracked", value: "₹24.6L", icon: ChartNoAxesCombined },
];

function AdminDashboard() {
  const [vendorMetrics, setVendorMetrics] = useState(initialVendorMetrics);

  const reviewedVendors = useMemo(
    () => vendorMetrics.filter((item) => item.status !== "Pending").length,
    [vendorMetrics],
  );

  const handleVendorDecision = (id, nextStatus) => {
    setVendorMetrics((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: nextStatus } : item,
      ),
    );
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Admin control
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Marketplace overview
                </h1>
              </div>

              <div className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
                Platform review queue • 12 pending
              </div>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {platformStats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Review queue</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Service provider approvals</h2>
                </div>
                <LayoutDashboard className="h-5 w-5 text-amber-600" />
              </div>

              <div className="mt-6 space-y-4">
                {vendorMetrics.map(({ id, name, category, status, value }) => (
                  <div key={id} className="flex flex-col gap-3 rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{name}</p>
                      <p className="text-sm text-slate-500">{category}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-slate-700">{value}</span>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          status === "Approved"
                            ? "bg-emerald-100 text-emerald-700"
                            : status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-sky-100 text-sky-700"
                        }`}
                      >
                        {status}
                      </span>

                      {status !== "Approved" ? (
                        <Button
                          type="button"
                          onClick={() => handleVendorDecision(id, "Approved")}
                          className="h-9 rounded-full bg-emerald-600 px-3 text-xs text-white hover:bg-emerald-700"
                        >
                          Approve
                        </Button>
                      ) : null}

                      {status !== "Rejected" ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => handleVendorDecision(id, "Rejected")}
                          className="h-9 rounded-full border-amber-200 bg-white px-3 text-xs text-amber-700 hover:bg-amber-50"
                        >
                          Reject
                        </Button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Quality checks</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Platform health</h2>
                </div>
                <BadgeCheck className="h-5 w-5 text-amber-600" />
              </div>

              <div className="mt-6 space-y-5">
                <div className="rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-5">
                  <p className="text-sm text-slate-500">Reviewed service providers</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{reviewedVendors}</p>
                </div>

                <div className="rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-5">
                  <p className="text-sm text-slate-500">Manual review needed</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">12</p>
                </div>

                <div className="rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-5">
                  <p className="text-sm text-slate-500">Featured service providers</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">28</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default AdminDashboard;
