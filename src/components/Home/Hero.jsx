import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.16),_transparent_40%),linear-gradient(180deg,_rgba(255,247,237,0.9),_rgba(255,255,255,0.8))]" />
      <div className="container relative mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-amber-100 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] backdrop-blur-sm md:p-12">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Home construction made simple
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Build Your Dream Home
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Connect with trusted architects, contractors,
            interior designers, and specialists to plan,
            build, and renovate with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
              <Link to="/services">Explore services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
              <Link to="/materials">Shop materials</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;