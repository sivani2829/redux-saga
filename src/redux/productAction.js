import { FETCH_PRODUCT, PRODUCT_LIST,PRODUCT_SEARCH} from "./constants";

export const productList=()=>{
    // let data='helo'
    // console.warn('product list called',data)
    return {type:PRODUCT_LIST}
}

export const productSearch=(q)=>{
    return {type:PRODUCT_SEARCH,q}
}

export const fetchProduct=(productId)=>{
    return {type:FETCH_PRODUCT,payload:productId}
}