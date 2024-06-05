import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/reducer/apiSlice";
import authReducer from "./api/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(apiSlice.middleware),
});