import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, MessageSquareText, Sparkles, Star, TrendingUp } from "lucide-react";
import { vendors as seedVendors } from "@/data/vendors";

const vendorDashboardData = [
  { name: "Apex Architects Studio", category: "Architects", city: "Bangalore", price: "₹4.5L", rating: 4.9, status: "Live" },
  { name: "StonePeak Builders", category: "Builders", city: "Mysore", price: "₹18.0L", rating: 4.8, status: "Live" },
  { name: "Nestform Interiors", category: "Interior Designers", city: "Hyderabad", price: "₹6.2L", rating: 4.7, status: "Live" },
];

function VendorAdmin() {
  const stats = {
    profileCompletion: "92%",
    enquiries: 42,
    bookings: 16,
    avgRating: 4.8,
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Vendor portal
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Vendor dashboard
                </h1>
              </div>

              <Button
                asChild
                className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
              >
                <Link to="/vendor-profile/new">
                  Edit profile
                </Link>
              </Button>
            </div>
          </header>

          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Profile completion</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.profileCompletion}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Incoming enquiries</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.enquiries}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Bookings</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.bookings}</p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-100 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <p className="text-sm text-slate-500">Average rating</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stats.avgRating}</p>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Portfolio</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Your business listings</h2>
              </div>
              <div className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700 ring-1 ring-amber-100">
                Public profile live
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {vendorDashboardData.map((vendor) => (
                <div
                  key={vendor.name}
                  className="flex flex-col gap-4 rounded-[1.5rem] border border-amber-100 bg-amber-50/35 p-5 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={seedVendors[0].images?.[0]}
                      alt={vendor.name}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900">{vendor.name}</h3>
                        <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 ring-1 ring-amber-100">
                          {vendor.category}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-amber-500" />
                          {vendor.city}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {vendor.rating}
                        </span>
                        <span className="font-medium text-slate-700">{vendor.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      {vendor.status}
                    </span>

                    <Button
                      asChild
                      variant="outline"
                      className="h-10 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                    >
                      <Link to={`/vendor-profile/${seedVendors[0].id}`}>Edit profile</Link>
                    </Button>

                    <Button
                      asChild
                      className="h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600"
                    >
                      <Link to="/vendor-leads">
                        <MessageSquareText className="mr-2 h-4 w-4" />
                        Leads
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 flex justify-end">
            <Button asChild variant="outline" className="h-10 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
              <Link to="/vendors">
                View public marketplace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default VendorAdmin;
