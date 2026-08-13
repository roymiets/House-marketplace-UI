import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { HeartHandshake, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: HeartHandshake,
    title: "Trusted connections",
    text: "We help homeowners discover professionals they can genuinely trust for one of their biggest investments.",
  },
  {
    icon: ShieldCheck,
    title: "Verified quality",
    text: "Every vendor is reviewed for craftsmanship, reliability, and project delivery standards.",
  },
  {
    icon: Sparkles,
    title: "Curated projects",
    text: "We bring together premium options and tailored recommendations for every stage of home building and renovation.",
  },
  {
    icon: TrendingUp,
    title: "Smart planning",
    text: "Save time with transparent pricing, clear comparisons, and a smoother journey from design to completion.",
  },
];

const stats = [
  { label: "Homes planned", value: "5000+" },
  { label: "Verified experts", value: "1200+" },
  { label: "Cities served", value: "50+" },
  { label: "Average rating", value: "4.8/5" },
];

function About() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-rose-50 via-white to-white pb-20">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <section className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  About BuildNest
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Making home construction clear, transparent, and stress-free.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                  BuildNest is a home construction marketplace built for homeowners who want quality work without the confusion of endless searching. We connect people with the right architects, contractors, designers, and specialists for every stage of their project.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                    <Link to="/vendors">Explore vendors</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                    <Link to="/register">Create account</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-100 via-white to-orange-50 p-6">
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-amber-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Our mission</p>
                  <p className="mt-4 text-lg leading-8 text-slate-700">
                    To help every homeowner find the right people, plans, and solutions for building a better home with confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-rose-100 bg-white p-6 text-center shadow-[0_14px_35px_rgba(244,114,182,0.06)]">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="mt-16">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Why we exist</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Built for confident home decisions</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.5rem] border border-rose-100 bg-white p-6 shadow-[0_14px_35px_rgba(244,114,182,0.06)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-50 text-rose-600 ring-1 ring-rose-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
