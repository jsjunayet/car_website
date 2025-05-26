import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  category: string;
  brand: string;
  model: string;
  price: number;
  images: string[];
}

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlistItem: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (exists) {
        // Remove from wishlist
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        // Add to wishlist
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
