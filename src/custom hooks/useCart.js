import { create } from "zustand";
import { toast } from "react-toastify";
export const useCart = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        toast.info("Product quantity increased!");
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (item.quantity + 1) * item.price,
                }
              : item
          ),
        };
      } else {
        toast.success("Product added to cart!");
        return {
          cart: [
            ...state.cart,
            { ...product, quantity: 1, totalPrice: product.price },
          ],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === id);
      if (existingProduct) {
        const updatedCart = state.cart
          .map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: (item.quantity - 1) * item.price,
                }
              : item
          )
          .filter((item) => item.quantity > 0);

        if (existingProduct.quantity === 1) {
          toast.success("Product removed from cart!");
        } else {
          toast.info("Product quantity decreased!");
        }

        return { cart: updatedCart };
      }
      return state;
    }),
  clearCart: () => set({ cart: [] }),
  itemCount: () => useCart.getState().cart.length,
}));
