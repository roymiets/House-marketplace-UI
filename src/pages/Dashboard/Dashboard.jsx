import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Clock3, Heart, Landmark, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const checklist = [
  { title: "Confirm plot or site details", completed: true },
  { title: "Finalize architect", completed: true },
  { title: "Approve structural layout", completed: false },
  { title: "Choose materials and finishes", completed: false },
  { title: "Review contractor timeline", completed: false },
];

const budgetBreakdown = [
  { label: "Site prep", value: 320000, color: "bg-amber-500" },
  { label: "Architecture", value: 180000, color: "bg-orange-500" },
  { label: "Construction", value: 210000, color: "bg-emerald-500" },
  { label: "Interiors", value: 115000, color: "bg-violet-500" },
];

const timeline = [
  { label: "Site inspection", date: "12 Aug" },
  { label: "Architect review", date: "21 Aug" },
  { label: "Permit approval", date: "1 Sep" },
  { label: "Groundbreaking", date: "10 Sep" },
];

const savedVendors = [
  { name: "Apex Architects Studio", category: "Architects" },
  { name: "StonePeak Builders", category: "Builders" },
  { name: "Nestform Interiors", category: "Interior Designers" },
];

function Dashboard() {
  const totalBudget = 825000;
  const usedBudget = budgetBreakdown.reduce((sum, item) => sum + item.value, 0);
  const progress = Math.round((usedBudget / totalBudget) * 100);

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Home project dashboard
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Your project dashboard
                </h1>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                >
                  <Link to="/profile">My profile</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                >
                  <Link to="/inquiries">My enquiries</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                >
                  <Link to="/quotes">My quotes</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                >
                  <Link to="/payments">Payments</Link>
                </Button>
                <Button
                  asChild
                  className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
                >
                  <Link to="/vendors">Browse vendors</Link>
                </Button>
              </div>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Checklist progress", value: "68%", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-600" },
              { label: "Budget used", value: "₹8.25L", icon: Landmark, color: "bg-amber-50 text-amber-600" },
              { label: "Saved vendors", value: "12", icon: Heart, color: "bg-orange-50 text-orange-600" },
              { label: "Next milestone", value: "3 days", icon: Clock3, color: "bg-violet-50 text-violet-600" },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Planning checklist</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Your upcoming tasks</h2>
                </div>

                <div className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700 ring-1 ring-amber-100">
                  {checklist.filter((item) => item.completed).length}/{checklist.length} done
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {checklist.map(({ title, completed }) => (
                  <div key={title} className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full ${completed ? "bg-emerald-500 text-white" : "bg-white text-slate-400 ring-1 ring-slate-200"}`}>
                        {completed ? <CheckCircle2 className="h-4 w-4" /> : <Clock3 className="h-4 w-4" />}
                      </span>
                      <span className={`font-medium ${completed ? "text-slate-900 line-through" : "text-slate-700"}`}>
                        {title}
                      </span>
                    </div>

                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${completed ? "bg-emerald-100 text-emerald-700" : "bg-white text-slate-500 ring-1 ring-slate-200"}`}>
                      {completed ? "Done" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Budget</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Spending overview</h2>
                </div>
                <Target className="h-5 w-5 text-amber-500" />
              </div>

              <div className="mt-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Spent</p>
                    <p className="text-3xl font-bold text-slate-900">₹{usedBudget.toLocaleString("en-IN")}</p>
                  </div>
                  <p className="text-sm text-slate-500">of ₹{totalBudget.toLocaleString("en-IN")}</p>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-amber-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: `${progress}%` }} />
                </div>

                <div className="mt-6 space-y-4">
                  {budgetBreakdown.map(({ label, value, color }) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                        <span>{label}</span>
                        <span className="font-semibold text-slate-800">₹{value.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-amber-50">
                        <div className={`h-full rounded-full ${color}`} style={{ width: `${(value / totalBudget) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Timeline</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Upcoming milestones</h2>
                </div>
                <Sparkles className="h-5 w-5 text-amber-500" />
              </div>

              <div className="mt-6 space-y-4">
                {timeline.map(({ label, date }) => (
                  <div key={label} className="flex items-center justify-between rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4">
                    <div>
                      <p className="font-medium text-slate-900">{label}</p>
                      <p className="text-sm text-slate-500">Priority milestone</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
                      {date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Favourites</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Saved vendors</h2>
                </div>
                <ArrowUpRight className="h-5 w-5 text-amber-500" />
              </div>

              <div className="mt-6 space-y-4">
                {savedVendors.map(({ name, category }) => (
                  <div key={name} className="flex items-center justify-between rounded-[1.25rem] border border-amber-100 bg-amber-50/40 p-4">
                    <div>
                      <p className="font-medium text-slate-900">{name}</p>
                      <p className="text-sm text-slate-500">{category}</p>
                    </div>
                    <Button asChild variant="outline" className="h-9 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                      <Link to="/vendors">View</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
