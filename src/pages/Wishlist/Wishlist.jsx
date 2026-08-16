import MainLayout from "@/components/layout/MainLayout";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { Button } from "@/components/ui/button";
import { vendors } from "@/data/vendors";
import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const STORAGE_KEY = "buildnest-wishlist";

function getSavedWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function Wishlist() {
  const [wishlist, setWishlist] = useState(getSavedWishlist);

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

  const savedVendors = vendors.filter((vendor) => wishlist.includes(vendor.id));

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Your shortlist
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Wishlist
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm ring-1 ring-amber-100">
                <Heart className="h-4 w-4 fill-current" />
                {savedVendors.length} saved service providers
              </div>
            </div>
          </header>

          {savedVendors.length > 0 ? (
            <>
              {savedVendors.length >= 2 ? (
                <div className="mt-8 flex justify-end">
                  <Button asChild className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600">
                    <Link to="/compare">Compare selected vendors</Link>
                  </Button>
                </div>
              ) : null}

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {savedVendors.map((vendor) => (
                  <ServiceCard
                    key={vendor.id}
                    vendor={vendor}
                    isSaved={true}
                    onToggleWishlist={toggleWishlist}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-dashed border-amber-200 bg-white p-10 text-center shadow-[0_16px_40px_rgba(15,23,42,0.02)]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Sparkles className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-slate-900">Your shortlist is empty</h2>
              <p className="mt-3 text-slate-600">
                Save your favorite service providers from the marketplace to compare and revisit later.
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
              >
                Explore service providers
              </Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Wishlist;
