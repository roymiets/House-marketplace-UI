import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Mail, Users } from "lucide-react";

const STORAGE_KEY = "buildnest-inquiries";

function getStoredInquiries() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function Inquiries() {
  const [inquiries, setInquiries] = useState(() => getStoredInquiries());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
  }, [inquiries]);

  const updateInquiryStatus = (id, status) => {
    setInquiries((current) =>
      current.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status } : inquiry,
      ),
    );
  };

  const pendingCount = inquiries.filter((inquiry) => inquiry.status === "new").length;

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Project enquiries
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Project enquiry tracker
                </h1>
              </div>

              <Button
                asChild
                className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
              >
                <Link to="/vendors">
                  Explore vendors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Total enquiries</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{inquiries.length}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Pending follow-up</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{pendingCount}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Contacted</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{inquiries.filter((item) => item.status === "contacted").length}</p>
            </div>
          </section>

          {inquiries.length === 0 ? (
            <section className="mt-8 rounded-[2rem] border border-dashed border-amber-200 bg-white p-10 text-center shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <Clock3 className="mx-auto h-12 w-12 text-amber-400" />
              <h2 className="mt-4 text-2xl font-bold text-slate-900">No enquiries yet</h2>
              <p className="mt-3 text-slate-600">
                Start by sending a quick enquiry from any vendor profile to track leads here.
              </p>
              <Button
                asChild
                className="mt-6 h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
              >
                <Link to="/vendors">Browse vendors</Link>
              </Button>
            </section>
          ) : (
            <section className="mt-8 space-y-5">
              {inquiries.map((inquiry) => (
                <article
                  key={inquiry.id}
                  className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-2xl font-bold text-slate-900">{inquiry.vendorName}</h2>
                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-700 ring-1 ring-amber-100">
                          {inquiry.category}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-2">
                          <Mail className="h-4 w-4 text-amber-500" />
                          {inquiry.email}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-amber-500" />
                          {inquiry.date}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Users className="h-4 w-4 text-amber-500" />
                          {inquiry.projectSize ?? inquiry.guests ?? 0} sq ft
                        </span>
                      </div>

                      <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">{inquiry.message}</p>
                    </div>

                    <div className="flex flex-col items-start gap-3 lg:items-end">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                          inquiry.status === "contacted"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {inquiry.status === "contacted" ? "Contacted" : "Pending review"}
                      </span>

                      <Button
                        variant={inquiry.status === "contacted" ? "outline" : "default"}
                        className={
                          inquiry.status === "contacted"
                            ? "h-10 rounded-full border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50"
                            : "h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                        }
                        onClick={() =>
                          updateInquiryStatus(
                            inquiry.id,
                            inquiry.status === "contacted" ? "new" : "contacted",
                          )
                        }
                      >
                        {inquiry.status === "contacted" ? (
                          <>
                            <Clock3 className="mr-2 h-4 w-4" />
                            Reopen
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Mark contacted
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Inquiries;
