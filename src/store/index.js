import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import shopReducer from "../features/Products/productsSlice";
import { shopApi } from "../services/shopServices";
import authReducer from '../features/Users/userSlice'

import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";


const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(shopApi.middleware)
            .concat(authApi.middleware)
})

setupListeners(store.dispatch);

export default store