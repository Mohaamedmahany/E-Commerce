import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./CartSlice"
 export const Store = configureStore (
    {
        reducer : {
            cart : cartreducer
        }
    }

)