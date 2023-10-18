import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='products/:productId' element={<ProductDetails/>}/>
    </Routes>
    
    </>
  );
}

export default App;
