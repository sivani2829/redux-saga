import { emptyCart } from "./actions"
import { PRODUCT_LIST, SET_PRODUCT, SET_PRODUCT_LIST} from "./constants"

export const productData=(data=[],action)=>{
    switch(action.type){
        case SET_PRODUCT_LIST:
            // return [...action.data]
            return action.data.products
            // console.warn('cartData',data)
        case  SET_PRODUCT:
            return action.payload.id
        default:
            return data

    }
    
}