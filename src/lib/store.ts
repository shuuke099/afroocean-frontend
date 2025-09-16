import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import locationReducer from "./slices/locationSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
