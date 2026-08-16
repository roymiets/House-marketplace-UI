import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Clock3, MessageSquareText, Sparkles, Tag } from "lucide-react";

const STORAGE_KEY = "buildnest-quotes";

const defaultQuotes = [
  {
    id: "q1",
    vendorName: "Apex Architects Studio",
    category: "Architects",
    packageName: "Modern Villa Design Package",
    amount: "₹4,50,000",
    status: "sent",
    responseDate: "24 Aug",
    note: "Includes structural planning, elevation concepts, and material suggestions for a premium residential layout.",
  },
  {
    id: "q2",
    vendorName: "StonePeak Builders",
    category: "Builders",
    packageName: "Full Construction Package",
    amount: "₹18,00,000",
    status: "review",
    responseDate: "29 Aug",
    note: "Includes site management, civil work supervision, and milestone-driven execution planning.",
  },
  {
    id: "q3",
    vendorName: "Nestform Interiors",
    category: "Interior Designers",
    packageName: "Luxury Home Styling Plan",
    amount: "₹6,20,000",
    status: "accepted",
    responseDate: "12 Sep",
    note: "Custom layouts, premium finish selections, and turnkey interior styling for the main living spaces.",
  },
];

function getStoredQuotes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultQuotes;
  } catch {
    return defaultQuotes;
  }
}

function Quotes() {
  const [quotes, setQuotes] = useState(() => getStoredQuotes());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
  }, [quotes]);

  const updateStatus = (id, status) => {
    setQuotes((current) =>
      current.map((quote) =>
        quote.id === id ? { ...quote, status } : quote,
      ),
    );
  };

  const stats = {
    total: quotes.length,
    sent: quotes.filter((q) => q.status === "sent").length,
    review: quotes.filter((q) => q.status === "review").length,
    accepted: quotes.filter((q) => q.status === "accepted").length,
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Project quotes
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  My service provider offers
                </h1>
              </div>

              <Button
                asChild
                className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
              >
                <Link to="/services">
                  Explore more service providers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-4">
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Total quotes</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.total}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Sent</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.sent}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Under review</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.review}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Accepted</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.accepted}</p>
            </div>
          </section>

          <section className="mt-8 space-y-5">
            {quotes.map((quote) => (
              <article
                key={quote.id}
                className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold text-slate-900">{quote.vendorName}</h2>
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-700 ring-1 ring-amber-100">
                        {quote.category}
                      </span>
                    </div>

                    <p className="mt-4 text-lg font-semibold text-slate-800">{quote.packageName}</p>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-amber-700 ring-1 ring-amber-100">
                        <Tag className="h-4 w-4" />
                        {quote.amount}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-amber-500" />
                        Response by {quote.responseDate}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">{quote.note}</p>
                  </div>

                  <div className="flex flex-col items-start gap-3 lg:items-end">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                        quote.status === "accepted"
                          ? "bg-emerald-100 text-emerald-700"
                          : quote.status === "review"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-sky-100 text-sky-700"
                      }`}
                    >
                      {quote.status === "accepted"
                        ? "Accepted"
                        : quote.status === "review"
                          ? "In review"
                          : "Quote sent"}
                    </span>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button
                        variant={quote.status === "accepted" ? "outline" : "default"}
                        className={
                          quote.status === "accepted"
                            ? "h-10 rounded-full border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50"
                            : "h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                        }
                        onClick={() => updateStatus(quote.id, quote.status === "accepted" ? "review" : "accepted")}
                      >
                        {quote.status === "accepted" ? (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Reopen
                          </>
                        ) : (
                          <>
                            <BadgeCheck className="mr-2 h-4 w-4" />
                            Accept
                          </>
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        className="h-10 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                        onClick={() => updateStatus(quote.id, "review")}
                      >
                        <MessageSquareText className="mr-2 h-4 w-4" />
                        Review later
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

export default Quotes;
