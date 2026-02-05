import {create} from "zustand";
export const useCartStore=create((set)=>({
    cart:[],
    addToCart: (product) =>
        set((state) => {
          const exists = state.cart.some(
            (item) => item.id === product.id
          );
      
          if (exists) {
            console.log("tekrarsız:", product);
            return { cart: state.cart };
          }
      
          console.log("Sepete eklendi:", product); 
      
          return {
            cart: [...state.cart, product],
          };
        }),
      
          removeFromCart:(id)=>
            set((state)=>({
                cart:state.cart.filter(p=>p.id !==id)
            }))
}))