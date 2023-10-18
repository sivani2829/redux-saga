// import {takeEvery,put} from 'redux-saga/effects'
// import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constants'

// function* getproducts(){
//     // console.warn('grtproducts called')
//     let data=yield fetch('https://dummyjson.com/products/')
//     data= yield data.json()
//     console.log(data)
//     yield put(SET_PRODUCT_LIST,data)

// }

// function* productSaga(){ //generator function-which is used to perform async operations

// yield takeEvery(PRODUCT_LIST,getproducts)

// }
// export default productSaga

import { takeEvery, put, call, race } from "redux-saga/effects"; //takeEvery method is used to take an action from the productaction and it do some saga operations then it send to productreducer via put() method with the help of SET_PRODUCT_LIST
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constants";

function* getproducts() {
  try {
    const response = yield call(fetch, "https://dummyjson.com/products/");
    const data = yield response.json();
    yield put({ type: SET_PRODUCT_LIST, data }); // Dispatch action with data
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function* getproductsSearch(data) {
  try {
    const res = yield call(
      fetch,
      `https://dummyjson.com/products/?q=${data.q}`
    );
    // const res = yield call(fetch, `https://dummyjson.com/products/${data.q}`);
    const resu = yield res.json();
    yield put({ type: SET_PRODUCT_LIST, data: resu }); // Dispatch action with data
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getproducts);
  yield takeEvery(PRODUCT_SEARCH, getproductsSearch);
}

export default productSaga;
