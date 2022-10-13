import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites", // this is the name of the slice
  initialState: {
    // this is the initial state of the slice
    ids: [],
  },
  reducers: {
    // this is the reducer object that will be passed to the components that will use the reducer
    addFavorite(state, action) {
      state.ids.push(action.payload);
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
