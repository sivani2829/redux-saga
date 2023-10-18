import { emptyCart } from "./actions"
import {  ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART} from "./constants"

export const cartData=(data=[],action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return [action.data,...data]
            
        case REMOVE_TO_CART:
            // return data.length?data.length-1:[]
            // return data.length ? data.slice(0, -1) : [];
            console.warn('remove  cart called',action.data.id)
            const remainingItem=data.filter(e=>e.id!==action.data.id)
            return [...remainingItem]
                // return [...data]
        case EMPTY_CART:
            // data.length=0
            data=[]
                return [...data]

        default:
            return data

    }
    
}