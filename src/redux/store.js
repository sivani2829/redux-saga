
import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from 'react-redux';


import root from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware=createSagaMiddleware()

export const store=configureStore({reducer:root,middleware:()=>[sagaMiddleware]})

sagaMiddleware.run(productSaga)

// export default store