import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail, Users } from "lucide-react";

const STORAGE_KEY = "buildnest-vendor-leads";

const seedLeads = [
  {
    id: 1,
    client: "Aanya Sharma",
    email: "aanya.sharma@example.com",
    date: "2026-09-12",
    projectSize: 2200,
    service: "Architectural design",
    message: "We want a modern 3BHK layout with a calm palette and efficient space planning for family living.",
    status: "new",
  },
  {
    id: 2,
    client: "Meher Reddy",
    email: "meher.reddy@example.com",
    date: "2026-10-04",
    projectSize: 1800,
    service: "Home renovation",
    message: "Need a full-house renovation package and guidance on material upgrades within a moderate timeline.",
    status: "follow-up",
  },
  {
    id: 3,
    client: "Ira Nair",
    email: "ira.nair@example.com",
    date: "2026-11-02",
    projectSize: 3200,
    service: "Interior styling",
    message: "Looking for a warm, functional interior upgrade with storage planning and premium material recommendations.",
    status: "quoted",
  },
];

function getStoredLeads() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : seedLeads;
  } catch {
    return seedLeads;
  }
}

function VendorLeads() {
  const [leads, setLeads] = useState(() => getStoredLeads());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  }, [leads]);

  const updateStatus = (id, status) => {
    setLeads((current) => current.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
  };

  const newCount = leads.filter((lead) => lead.status === "new").length;

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Leads</p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Inquiry inbox
                </h1>
              </div>

              <Button asChild className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                <Link to="/vendor-admin">
                  Back to dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Total leads</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{leads.length}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">New</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{newCount}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Quoted</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{leads.filter((lead) => lead.status === "quoted").length}</p>
            </div>
          </section>

          <section className="mt-8 space-y-5">
            {leads.map((lead) => (
              <article key={lead.id} className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold text-slate-900">{lead.client}</h2>
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-700 ring-1 ring-amber-100">
                        {lead.service}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <Mail className="h-4 w-4 text-amber-500" />
                        {lead.email}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-amber-500" />
                        {lead.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Users className="h-4 w-4 text-amber-500" />
                        {lead.projectSize} sq ft
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">{lead.message}</p>
                  </div>

                  <div className="flex flex-col items-start gap-3 lg:items-end">
                    <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                      lead.status === "new"
                        ? "bg-amber-100 text-amber-700"
                        : lead.status === "follow-up"
                          ? "bg-sky-100 text-sky-700"
                          : "bg-emerald-100 text-emerald-700"
                    }`}>
                      {lead.status === "new" ? "New" : lead.status === "follow-up" ? "Follow-up" : "Quoted"}
                    </span>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={lead.status === "new" ? "default" : "outline"}
                        className={lead.status === "new" ? "h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600" : "h-10 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"}
                        onClick={() => updateStatus(lead.id, "new")}
                      >
                        <Clock3 className="mr-2 h-4 w-4" />
                        New
                      </Button>

                      <Button
                        variant={lead.status === "follow-up" ? "default" : "outline"}
                        className={lead.status === "follow-up" ? "h-10 rounded-full bg-sky-500 text-white hover:bg-sky-600" : "h-10 rounded-full border-sky-200 bg-white text-sky-600 hover:bg-sky-50"}
                        onClick={() => updateStatus(lead.id, "follow-up")}
                      >
                        Follow-up
                      </Button>

                      <Button
                        variant={lead.status === "quoted" ? "default" : "outline"}
                        className={lead.status === "quoted" ? "h-10 rounded-full bg-emerald-500 text-white hover:bg-emerald-600" : "h-10 rounded-full border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50"}
                        onClick={() => updateStatus(lead.id, "quoted")}
                      >
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Quote sent
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default VendorLeads;
