import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const navItemClass = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
    isActive
      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.18)]"
      : "text-slate-600 hover:bg-amber-50 hover:text-amber-700 hover:shadow-sm ring-1 ring-transparent hover:ring-amber-100",
  ].join(" ");

function Navbar() {
  const cart = useCart();
  const count = cart ? cart.reduce((s, i) => s + (i.qty || 0), 0) : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/80 shadow-[0_8px_30px_rgba(251,146,60,0.06)] backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-18 items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)]">
              <Building2 className="h-4 w-4" />
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              BuildNest
            </span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-amber-100 bg-white/80 p-1.5 shadow-sm md:flex">
            <NavLink to="/" className={navItemClass}>Home</NavLink>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
            <NavLink to="/contact" className={navItemClass}>Contact Us</NavLink>
            <NavLink to="/services" className={navItemClass}>Services</NavLink>
            <NavLink to="/materials" className={navItemClass}>Materials</NavLink>
            <NavLink to="/cart" className={navItemClass}>
              <span className="inline-flex items-center gap-2">
                <span>Cart</span>
                {count > 0 ? (
                  <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-600 px-2 text-xs font-semibold text-white">
                    {count}
                  </span>
                ) : null}
              </span>
            </NavLink>
            <NavLink to="/wishlist" className={navItemClass}>Wishlist</NavLink>
            <NavLink to="/compare" className={navItemClass}>Compare</NavLink>
            <NavLink to="/dashboard" className={navItemClass}>Dashboard</NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-amber-200 bg-white px-5 text-amber-700 shadow-sm hover:bg-amber-50"
            >
              <Link to="/login">Login</Link>
            </Button>

            <Button
              asChild
              className="h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
            >
              <Link to="/register">Register</Link>
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
                  <Link to="/" className="hover:text-amber-600">Home</Link>
                  <Link to="/services" className="hover:text-amber-600">Services</Link>
                  <Link to="/materials" className="hover:text-amber-600">Materials</Link>
                  <Link to="/cart" className="hover:text-amber-600">Cart {count > 0 ? `(${count})` : ""}</Link>
                  <Link to="/about" className="hover:text-amber-600">About</Link>
                  <Link to="/contact" className="hover:text-amber-600">Contact Us</Link>

                  <Button asChild className="mt-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                    <Link to="/login">Login</Link>
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

export default Navbar;