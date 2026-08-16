import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const STORAGE_KEY = "hcm_cart_v1";

function cartReducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload || [];
    case "add": {
      const { item, qty = 1 } = action.payload;
      const existing = state.find((i) => i.id === item.id);
      if (existing) {
        return state.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...state, { ...item, qty }];
    }
    case "update":
      return state.map((i) => (i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i));
    case "remove":
      return state.filter((i) => i.id !== action.payload.id);
    case "clear":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        dispatch({ type: "hydrate", payload: JSON.parse(raw) });
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }, [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCart() {
  return useContext(CartStateContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

export default CartProvider;
