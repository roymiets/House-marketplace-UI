import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { vendors } from "@/data/vendors";

function FeaturedVendors() {
  return (
    <section className="bg-gradient-to-b from-amber-50/70 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Top picks</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Featured service providers
            </h2>
          </div>

          <Button asChild variant="outline" className="rounded-full border-amber-200 bg-white px-5 text-amber-700 hover:bg-amber-50">
            <Link to="/vendors">
              View all services
            </Link>
          </Button>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {vendors.map((vendor) => (
            <Card
              key={vendor.id}
              className="group overflow-hidden rounded-[1.75rem] border border-amber-100 bg-white shadow-[0_18px_40px_rgba(251,146,60,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(251,146,60,0.14)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vendor.images[0]}
                  alt={vendor.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
                  {vendor.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{vendor.rating}</span>
                  </div>

                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                    {vendor.city}
                  </span>
                </div>
              </div>

              <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{vendor.name}</h3>
                    <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <span>{vendor.city}</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
                    Popular
                  </div>
                </div>

                <p className="text-sm leading-6 text-slate-600">{vendor.description}</p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">From</p>
                    <p className="mt-1 text-xl font-bold text-slate-900">{vendor.price}</p>
                  </div>

                  <Button asChild className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                    <Link to="/vendors">
                      View profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedVendors;