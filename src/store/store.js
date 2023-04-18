import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartSlice";
import productsSlice from "../reducers/productsSlice";


const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productsSlice,
    }
})

export default store;