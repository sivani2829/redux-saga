import { combineReducers } from "@reduxjs/toolkit"
import { cartData } from "./reducer"
import { productData } from "./productReducer"

 const root= combineReducers({
    cartData,productData
})

export default root