import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceCard({ vendor, isSaved = false, onToggleWishlist }) {
  const saved = Boolean(isSaved);

  const handleWishlistClick = () => {
    if (onToggleWishlist) {
      onToggleWishlist(vendor.id);
    }
  };

  return (
    <Card className="group overflow-hidden rounded-[1.75rem] border border-amber-100 bg-white shadow-[0_18px_40px_rgba(251,146,60,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(251,146,60,0.12)]">
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

        <button
          type="button"
          onClick={handleWishlistClick}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-amber-500 shadow-sm ring-1 ring-amber-100 transition hover:scale-105"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
        </button>

        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-black/20 px-2.5 py-1 text-sm font-medium text-white backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          {vendor.rating}
        </div>
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{vendor.name}</h3>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-amber-500" />
              <span>{vendor.city}</span>
            </div>
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-600">{vendor.description}</p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">From</p>
            <p className="mt-1 text-xl font-bold text-slate-900">{vendor.price}</p>
          </div>

          <Button asChild className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
            <Link to={`/services/${vendor.id}`}>View details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;