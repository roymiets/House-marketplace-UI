import MainLayout from "@/components/layout/MainLayout";
import { materials } from "@/data/materials";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useCartDispatch } from "@/context/CartContext";

function MaterialDetails() {
  const { id } = useParams();
  const item = materials.find((m) => String(m.id) === String(id));
  const [qty, setQty] = useState(1);
  const dispatch = useCartDispatch();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    dispatch({ type: "add", payload: { item, qty } });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1100);
  }

  if (!item) {
    return (
      <MainLayout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold">Material not found</h2>
          <p className="mt-4 text-slate-600">This material may have been removed.</p>
          <Link to="/materials" className="mt-6 inline-block text-amber-600 hover:underline">Back to materials</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <img src={item.image} alt={item.name} className="w-full rounded-2xl object-cover" />
            <div className="mt-6 rounded-[1.25rem] border border-amber-100 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
              <h1 className="text-2xl font-bold text-slate-900">{item.name}</h1>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          </div>

          <aside className="rounded-[1.25rem] border border-amber-100 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{item.category}</span>
              <span className="flex items-center gap-1 text-sm text-slate-600">
                <Star className="h-4 w-4 text-amber-400" /> {item.rating}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Price</p>
              <p className="text-3xl font-bold text-slate-900">₹{item.price}</p>
              <p className="text-sm text-slate-500">{item.unit}</p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="rounded-full border px-3 py-1">-</button>
                <div className="px-3">{qty}</div>
                <button onClick={() => setQty(qty + 1)} className="rounded-full border px-3 py-1">+</button>
              </div>
              <div className="text-sm text-slate-500">{item.stock}</div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button onClick={handleAdd} className={
                "rounded-full text-white " + (added
                  ? "bg-emerald-500 scale-105 shadow-[0_8px_20px_rgba(16,185,129,0.18)]"
                  : "bg-gradient-to-r from-amber-500 to-orange-500")
              }>{added ? "Added" : "Add to cart"}</Button>
              <Button asChild variant="outline" className="rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                <Link to="/materials">Request quote</Link>
              </Button>
            </div>

            <div className="mt-6 border-t pt-4 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" /> {item.delivery}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}

export default MaterialDetails;
