import { Building2, Hammer, Palette, Ruler, Trees } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Architects",
    category: "Architects",
    icon: Ruler,
  },
  {
    title: "Builders",
    category: "Builders",
    icon: Building2,
  },
  {
    title: "Interior Design",
    category: "Interior Designers",
    icon: Palette,
  },
  {
    title: "Renovation",
    category: "Renovation",
    icon: Hammer,
  },
  {
    title: "Landscaping",
    category: "Landscaping",
    icon: Trees,
  },
];

function Categories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Popular picks</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Browse Categories
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                to={`/services?category=${category.category}`}
                className="group block rounded-[1.5rem] border border-amber-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(251,146,60,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(251,146,60,0.14)]"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 text-amber-700 ring-1 ring-amber-100 transition group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-semibold text-slate-800">
                  {category.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;