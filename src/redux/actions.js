import { ADD_TO_CART,EMPTY_CART,REMOVE_TO_CART } from "./constants"

export const addTocart=(data)=>{
    
    return {type:ADD_TO_CART,data}
}

export const removeTocart=(data)=>{
    // console.log('remove data',data)
    return {type:REMOVE_TO_CART,data}
}

export const emptyCart=()=>{
    console.log('empty cart')
    return {type:EMPTY_CART}
}