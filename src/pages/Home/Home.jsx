import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedVendors from "@/components/home/FeaturedVendors";
import SearchSection from "@/components/home/SearchSection";
import { Button } from "@/components/ui/button";
import { materials } from "@/data/materials";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Verified professionals",
    text: "Every contractor and specialist is screened for quality, trust, and service reliability.",
  },
  {
    icon: MapPin,
    title: "Local expertise",
    text: "Find the right builders and designers near your city, neighborhood, or project site.",
  },
  {
    icon: Sparkles,
    title: "Curated projects",
    text: "Explore premium packages for construction, renovation, interiors, and landscaping.",
  },
  {
    icon: Users,
    title: "Fast decisions",
    text: "Compare ratings, budgets, and recent work to choose the best team for your home.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover your needs",
    text: "Browse by architecture, construction, interiors, and renovation services.",
    icon: Search,
  },
  {
    number: "02",
    title: "Compare and shortlist",
    text: "Check portfolios, pricing, and project experience before deciding.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Build with confidence",
    text: "Finalize your team and start turning your property vision into reality.",
    icon: CalendarCheck2,
  },
];

const testimonials = [
  {
    name: "Priya & Sohan",
    city: "Bangalore",
    quote:
      "We found a reliable architect and contractor in one place, and the process felt organized from day one.",
  },
  {
    name: "Neha & Arjun",
    city: "Mysore",
    quote:
      "The profiles were detailed and trustworthy. It felt like having a premium home project guide at our fingertips.",
  },
  {
    name: "Rohit & Meera",
    city: "Hyderabad",
    quote:
      "We compared multiple teams quickly and shortlisted the right partner for our renovation without the usual stress.",
  },
];

function Home() {
  const featuredMaterials = materials.slice(0, 3);

  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <Categories />
      <FeaturedVendors />

      <section className="bg-gradient-to-b from-white to-amber-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Shop essentials</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Popular construction materials
              </h2>
            </div>

            <Button asChild variant="outline" className="rounded-full border-amber-200 bg-white px-5 text-amber-700 hover:bg-amber-50">
              <Link to="/materials">Browse all materials</Link>
            </Button>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {featuredMaterials.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[1.75rem] border border-amber-100 bg-white shadow-[0_18px_40px_rgba(251,146,60,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(251,146,60,0.14)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
                    {item.category}
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">From</p>
                      <p className="mt-1 text-xl font-bold text-slate-900">₹{item.price}</p>
                    </div>

                    <Button asChild className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                      <Link to="/materials">Shop now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Why homeowners choose us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Everything you need for a smoother build journey
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-amber-100 bg-white p-6 shadow-[0_14px_35px_rgba(251,146,60,0.06)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 text-amber-700 ring-1 ring-amber-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-rose-50/80 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Find the right specialists in three simple steps
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <div
                key={number}
                className="rounded-[1.75rem] border border-amber-100 bg-white p-7 shadow-[0_16px_40px_rgba(251,146,60,0.08)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                    {number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 ring-1 ring-amber-100">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Homeowner stories
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Trusted by families building their next chapter
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map(({ name, city, quote }) => (
              <div
                key={name}
                className="rounded-[1.75rem] border border-rose-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${name}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-base leading-7 text-slate-700">“{quote}”</p>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <h3 className="font-semibold text-slate-900">{name}</h3>
                  <p className="text-sm text-slate-500">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 p-8 text-white shadow-[0_20px_60px_rgba(251,146,60,0.25)] md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
                  Ready to begin?
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Start planning your dream home today
                </h2>
                <p className="mt-3 text-base text-amber-50">
                  Discover trusted professionals, compare quotes, and hire the right specialists for your build or renovation journey.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-white text-amber-700 hover:bg-amber-50"
                >
                  <Link to="/vendors">
                    Explore vendors
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/60 bg-transparent text-white hover:bg-white/10"
                >
                  <Link to="/register">
                    Create account
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;