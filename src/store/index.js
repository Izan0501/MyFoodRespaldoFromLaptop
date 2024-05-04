import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import shopReducer from "../features/Products/productsSlice";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useGetCategoriesQuery } from "../services/shopServices";

 const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch);

export default store