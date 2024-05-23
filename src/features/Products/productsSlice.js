import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            categorySelected: "",//selectedCategory
            itemIdSelected: "",//Menus of the selected restaurant
        }
    },
    reducers: {
        setCategorySelected : (state, action) => {
            state.value.categorySelected = action.payload
        },
        setIdSelected : (state, action) => {
            state.value.itemIdSelected = action.payload 
        }
    },
})

export const {setCategorySelected, setIdSelected} = productsSlice.actions

export default productsSlice.reducer