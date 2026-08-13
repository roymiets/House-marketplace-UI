import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { vendors } from "@/data/vendors";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "buildnest-wishlist";

const compareRows = [
  { label: "Rating", key: "rating" },
  { label: "Starting price", key: "price" },
  { label: "Location", key: "city" },
  { label: "Category", key: "category" },
  { label: "Response time", key: "response" },
  { label: "Custom packages", key: "packages" },
];

function getSavedWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function Compare() {
  const savedVendorIds = getSavedWishlist();
  const compareVendors = vendors.filter((vendor) => savedVendorIds.includes(vendor.id)).slice(0, 3);

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Vendor comparison
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Compare your saved picks
                </h1>
              </div>

              <Link
                to="/vendors"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to vendors
              </Link>
            </div>
          </header>

          {compareVendors.length >= 2 ? (
            <>
              <div className="mt-8 overflow-x-auto rounded-[2rem] border border-amber-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
                <table className="min-w-[900px] divide-y divide-amber-100">
                  <thead className="bg-amber-50/70">
                    <tr>
                      <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Feature</th>
                      {compareVendors.map((vendor) => (
                        <th key={vendor.id} className="px-5 py-4 text-left align-top">
                          <div className="flex flex-col gap-3">
                            <img src={vendor.images[0]} alt={vendor.name} className="h-28 w-full rounded-[1rem] object-cover" />
                            <div>
                              <p className="text-lg font-bold text-slate-900">{vendor.name}</p>
                              <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                {vendor.rating}
                              </div>
                            </div>
                            <Button asChild className="h-9 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                              <Link to={`/vendors/${vendor.id}`}>View profile</Link>
                            </Button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {compareRows.map(({ label, key }) => (
                      <tr key={key} className="bg-white">
                        <td className="px-5 py-4 text-sm font-semibold text-slate-700">{label}</td>
                        {compareVendors.map((vendor) => {
                          const value = {
                            rating: `${vendor.rating} / 5`,
                            price: vendor.price,
                            city: vendor.city,
                            category: vendor.category,
                            response: "Within 24 hrs",
                            packages: "Custom packages",
                          }[key];

                          return (
                            <td key={`${vendor.id}-${key}`} className="px-5 py-4 text-sm text-slate-600">
                              {value}
                            </td>
                          );
                        })}
                      </tr>
                    ))}

                    <tr className="bg-amber-50/40">
                      <td className="px-5 py-4 text-sm font-semibold text-slate-700">Best for</td>
                      {compareVendors.map((vendor) => (
                        <td key={`${vendor.id}-best`} className="px-5 py-4 text-sm text-slate-600">
                          {vendor.category === "Interior Designers" ? "Turnkey styling and finishes" : "Strong project execution and customization"}
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-sm font-semibold text-slate-700">Recommended</td>
                      {compareVendors.map((vendor) => (
                        <td key={`${vendor.id}-recommended`} className="px-5 py-4 text-sm text-slate-600">
                          {vendor.rating >= 4.8 ? <span className="inline-flex items-center gap-2 text-emerald-600"><Check className="h-4 w-4" /> Top choice</span> : "Strong option"}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-end">
                <Button asChild className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600">
                  <Link to="/vendors">Continue shopping <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-dashed border-amber-200 bg-white p-12 text-center shadow-[0_16px_40px_rgba(15,23,42,0.02)]">
              <h2 className="text-2xl font-semibold text-slate-900">Save at least two vendors to compare</h2>
              <p className="mt-3 text-slate-600">Shortlist a few vendors from the marketplace and come back here to see side-by-side details.</p>

              <Link
                to="/vendors"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
              >
                Explore vendors
              </Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Compare;
