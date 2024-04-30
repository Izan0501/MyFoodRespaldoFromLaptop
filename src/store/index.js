import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice"

 export default configureStore({
    reducer: {
        counterReducer
    }
 })