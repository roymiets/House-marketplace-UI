import { Button } from "@/components/ui/button";
import { materials, materialCategories } from "@/data/materials";
import { ArrowRight, Filter, PackageCheck, Search, ShieldCheck, Star } from "lucide-react";
import { useMemo, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";

function Materials() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMaterials = useMemo(() => {
    return materials.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
        || item.brand.toLowerCase().includes(searchQuery.toLowerCase())
        || item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Construction materials
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Buy the essentials for your next build
                </h1>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button asChild className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600">
                  <span>Request bulk quote</span>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                  <span>Compare suppliers</span>
                </Button>
              </div>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Top categories</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">6+</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Verified suppliers</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">180+</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Fast delivery</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">24 hrs</p>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search cement, pipes, paint, tools..."
                  className="h-12 w-full rounded-full border border-amber-100 bg-amber-50/40 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-amber-200 focus:ring-3 focus:ring-amber-100"
                />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50/40 px-3 py-2 text-sm text-slate-600">
                <Filter className="h-4 w-4 text-amber-600" />
                Smart filters
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {materialCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                    selectedCategory === category
                      ? "border-amber-200 bg-amber-500 text-white shadow-[0_10px_24px_rgba(251,146,60,0.25)]"
                      : "border-amber-100 bg-white text-slate-600 hover:border-amber-200 hover:text-amber-700",
                  ].join(" ")}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-8">
            {filteredMaterials.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-amber-200 bg-white p-12 text-center shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <PackageCheck className="mx-auto h-12 w-12 text-amber-400" />
                <h2 className="mt-4 text-2xl font-bold text-slate-900">No materials found</h2>
                <p className="mt-2 text-slate-600">Try another category or search keyword for your project needs.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {filteredMaterials.map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-[1.75rem] border border-amber-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(251,146,60,0.10)]"
                  >
                    <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />

                    <div className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-700 ring-1 ring-amber-100">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-600">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          {item.rating}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.brand}</p>

                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Price</p>
                          <p className="text-2xl font-bold text-slate-900">₹{item.price}</p>
                        </div>
                        <p className="text-right text-xs text-slate-500">{item.unit}</p>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>

                      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                          {item.stock}
                        </span>
                        <span>{item.delivery}</span>
                      </div>

                      <div className="mt-5 flex gap-2">
                        <Button className="flex-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                          Add to cart
                        </Button>
                        <Button variant="outline" className="rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                          Quote
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="mt-10 rounded-[2rem] border border-amber-100 bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 p-8 text-white shadow-[0_20px_60px_rgba(251,146,60,0.25)] md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
                  Supplier network
                </p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Need a bulk order for your project?</h2>
              </div>

              <Button asChild className="rounded-full bg-white text-amber-700 hover:bg-amber-50">
                <span className="inline-flex items-center gap-2">
                  Talk to a specialist
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Materials;
