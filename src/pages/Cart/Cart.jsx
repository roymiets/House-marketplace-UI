import MainLayout from "@/components/layout/MainLayout";
import { useCart, useCartDispatch } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

function Cart() {
  const cart = useCart();
  const dispatch = useCartDispatch();

  function updateQty(id, qty) {
    dispatch({ type: "update", payload: { id, qty } });
  }

  function remove(id) {
    dispatch({ type: "remove", payload: { id } });
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Your cart</h1>

        {cart.length === 0 ? (
          <div className="mt-8 text-slate-600">Your cart is empty.</div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-lg border p-4">
                  <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{item.name}</h3>
                      <button onClick={() => remove(item.id)} className="text-sm text-rose-600">Remove</button>
                    </div>
                    <p className="text-sm text-slate-500">₹{item.price} • {item.unit}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="rounded border px-2 py-1">-</button>
                      <div className="px-3">{item.qty}</div>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="rounded border px-2 py-1">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-lg border p-6">
              <div className="mb-4 text-sm text-slate-600">Order summary</div>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-slate-600">Subtotal</div>
                <div className="font-semibold">₹{subtotal}</div>
              </div>
              <Button className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white">Proceed to checkout</Button>
            </aside>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Cart;
