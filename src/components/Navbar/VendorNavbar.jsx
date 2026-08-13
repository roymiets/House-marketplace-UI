import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BriefcaseBusiness, LayoutDashboard, Menu, MessageSquareText, Store, WalletCards } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItemClass = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
    isActive
      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.18)]"
      : "text-slate-600 hover:bg-amber-50 hover:text-amber-700 hover:shadow-sm ring-1 ring-transparent hover:ring-amber-100",
  ].join(" ");

function VendorNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/80 shadow-[0_8px_30px_rgba(251,146,60,0.08)] backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-18 items-center justify-between gap-4 py-3">
          <Link to="/vendor-admin" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)]">
              <BriefcaseBusiness className="h-4 w-4" />
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Vendor Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-amber-100 bg-white/80 p-1.5 shadow-sm md:flex">
            <NavLink to="/vendor-admin" className={navItemClass}>
              Dashboard
            </NavLink>
            <NavLink to="/vendor-leads" className={navItemClass}>
              Leads
            </NavLink>
            <NavLink to="/vendor-profile/new" className={navItemClass}>
              Profile
            </NavLink>
            <NavLink to="/vendor-quotes" className={navItemClass}>
              Quotes
            </NavLink>
            <NavLink to="/vendor-payments" className={navItemClass}>
              Payments
            </NavLink>
            <NavLink to="/vendor-inquiries" className={navItemClass}>
              Inquiries
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-amber-200 bg-white px-5 text-amber-700 shadow-sm hover:bg-amber-50"
            >
              <Link to="/vendors">Marketplace</Link>
            </Button>

            <Button
              asChild
              className="h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
            >
              <Link to="/">Logout</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-700">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-white">
                <div className="mt-8 flex flex-col gap-5 text-base font-medium text-slate-700">
                  <Link to="/vendor-admin" className="hover:text-amber-500">Dashboard</Link>
                  <Link to="/vendor-leads" className="hover:text-amber-500">Leads</Link>
                  <Link to="/vendor-profile/new" className="hover:text-amber-500">Profile</Link>
                  <Link to="/vendor-quotes" className="hover:text-amber-500">Quotes</Link>
                  <Link to="/vendor-payments" className="hover:text-amber-500">Payments</Link>
                  <Link to="/vendor-inquiries" className="hover:text-amber-500">Inquiries</Link>

                  <Button asChild className="mt-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                    <Link to="/">Logout</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default VendorNavbar;
