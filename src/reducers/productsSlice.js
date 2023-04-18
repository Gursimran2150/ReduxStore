import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
    IDLE:'idle',
    LOADING:'loading',
    ERROR:'error'
})

export const fetchData = createAsyncThunk('products/fetch',async()=>{
  
  
    const {data} = await axios.get('https://fakestoreapi.com/products');
   
    
  

    
    return data;
})

const productsSlice = createSlice(
    {
        name:"products",
        initialState:{
            data:[],
            status: STATUS.LOADING 
        },

        // reducers:{
        //     setProducts:(state,action)=>{
        //         state.data = action.payload;
        //     },
        //     setStatus:(state,action)=>{
        //         state.status = action.payload;
        //     }
        // },
        extraReducers:(builder)=>{
            builder.addCase(fetchData.pending,(state,action)=>{
                state.status = STATUS.LOADING;
            })
            .addCase(fetchData.fulfilled,(state,action)=>{
                state.status = STATUS.IDLE;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected,(state,action)=>{
                console.log(action.payload)
                state.status=STATUS.ERROR;
            
            })
        }

    }
)



export default productsSlice.reducer;
