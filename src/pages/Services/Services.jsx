import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { vendors } from "@/data/vendors";
import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const STORAGE_KEY = "buildnest-wishlist";

function getSavedWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [wishlist, setWishlist] = useState(getSavedWishlist);

  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromURL || "All"
  );

  const categories = [
    "All",
    "Architects",
    "Builders",
    "Interior Designers",
    "Renovation",
    "Landscaping",
  ];

  const cities = ["All", "Bangalore", "Mysore", "Hyderabad"];

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const filteredVendors = vendors.filter((vendor) => {
    const searchValue = `${vendor.name} ${vendor.category} ${vendor.city}`.toLowerCase();
    const matchesSearch = searchValue.includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      vendor.category === selectedCategory;

    const matchesCity =
      selectedCity === "All" ||
      vendor.city === selectedCity;

    return matchesSearch && matchesCategory && matchesCity;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    if (sortBy === "price") {
      return (
        parseInt(a.price.replace(/[^0-9]/g, "")) -
        parseInt(b.price.replace(/[^0-9]/g, ""))
      );
    }

    return 0;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (vendorId) => {
    setWishlist((current) =>
      current.includes(vendorId)
        ? current.filter((id) => id !== vendorId)
        : [...current, vendorId]
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCity("All");
    setSelectedCategory("All");
    setSortBy("rating");
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Home construction marketplace
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Find the right service providers for your home project
                </h1>
                <p className="mt-3 max-w-2xl text-base text-slate-600">
                  Discover verified architects, builders, interior designers, renovation specialists, and landscapers for your next build or upgrade.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-amber-100 bg-white p-3 shadow-sm">
                  <div className="flex items-center justify-center gap-1 text-amber-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-lg font-bold text-slate-900">4.8</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Average rating</p>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white p-3 shadow-sm">
                  <span className="text-lg font-bold text-slate-900">1200+</span>
                  <p className="mt-1 text-xs text-slate-500">Profiles</p>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white p-3 shadow-sm">
                  <span className="text-lg font-bold text-slate-900">50+</span>
                  <p className="mt-1 text-xs text-slate-500">Cities</p>
                </div>
              </div>
            </div>
          </header>

          <section className="mt-8 rounded-[1.75rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  className="h-12 rounded-full border-amber-100 bg-amber-50/60 pl-11 text-base focus-visible:ring-amber-200"
                  placeholder="Search by vendor, category or city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Button
                variant="outline"
                className="h-12 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                onClick={resetFilters}
              >
                Reset filters
              </Button>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                  <SlidersHorizontal className="h-4 w-4 text-amber-600" />
                  Browse by category
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      size="sm"
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={
                        selectedCategory === category
                          ? "rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                          : "rounded-full border-amber-200 bg-white text-slate-700 hover:bg-amber-50"
                      }
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="min-w-[180px]">
                <label className="mb-2 block text-sm font-medium text-slate-600">City</label>
                <select
                  className="h-11 w-full rounded-xl border border-amber-100 bg-amber-50 px-3 text-sm text-slate-700 outline-none transition focus:border-amber-200 focus:ring-3 focus:ring-amber-100"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-[180px]">
                <label className="mb-2 block text-sm font-medium text-slate-600">Sort by</label>
                <select
                  className="h-11 w-full rounded-xl border border-amber-100 bg-amber-50 px-3 text-sm text-slate-700 outline-none transition focus:border-amber-200 focus:ring-3 focus:ring-amber-100"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="rating">Top rated</option>
                  <option value="price">Price: low to high</option>
                </select>
              </div>
            </div>
          </section>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-600">
              Showing <span className="text-base font-semibold text-slate-900">{sortedVendors.length}</span> service providers
            </p>
          </div>

          {sortedVendors.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sortedVendors.map((vendor) => (
                <ServiceCard
                  key={vendor.id}
                  vendor={vendor}
                  isSaved={wishlist.includes(vendor.id)}
                  onToggleWishlist={toggleWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-amber-200 bg-white p-12 text-center">
              <h3 className="text-2xl font-semibold text-slate-900">No service providers match your search</h3>
              <p className="mt-3 text-slate-600">Try a different keyword, city, or category to explore more options.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Services;