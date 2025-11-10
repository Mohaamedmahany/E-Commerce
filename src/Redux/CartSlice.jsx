import { createSlice } from "@reduxjs/toolkit";
const savecart= JSON.parse(localStorage.getItem("cartItems")) || [];
const initialState ={

    items : savecart
    , 
    totalproduct : savecart.reduce((sum , item)=>sum+item.plus ,0)
}

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {

      addtocart : (state , action) =>{
         const item = action.payload
         const exist = state.items.find((product)=>product.id ===item.id)
          
         if(exist) {
            exist.plus+=1
         } else{
            state.items.push({...item , plus : 1})

         }
         
         state.totalproduct=state.items.reduce(
            (sum , num)=> sum +num.plus , 0
         )
         localStorage.setItem("cartItems" , JSON.stringify(state.items))
      }


, 
removecart : (state , action)=>{

    const item2 = action.payload
    const exist2 = state.items.find((product)=>product.id ===item2.id) 
 
     if(exist2){
        if(exist2.plus>1){
            exist2.plus-=1
        }
        else{
            state.items= state.items.filter((produuct)=>produuct.id !==item2.id)
        }
     }
     state.totalproduct=state.items.reduce(
        (sum , num)=>sum+num.plus , 0
     )
     localStorage.setItem("cartItems" , JSON.stringify(state.items))
}



    }

    

})
export const {addtocart , removecart} = CartSlice.actions
export default CartSlice.reducer