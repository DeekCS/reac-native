import { configureStore } from "@reduxjs/toolkit";

// import { reducer } from "./reducer";

import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoritesMeals: favoritesReducer,
  }, // this is the reducer object that will be passed to the components that will use the reducer
});
