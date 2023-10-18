
import './index.css'

import { addTocart,emptyCart,removeTocart } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../redux/productAction';
import { useEffect } from 'react';
import Cart from '../Cart';


function Home() {
  let dispatch=useDispatch()
  let data=useSelector((state)=>state.productData)
  console.log(data)
  // console.log([data.productData.products])
  // const productsData=data.productData.products?[data.productData.products]:[];
  // console.log(productsData)s
  
  useEffect(()=>{
    dispatch(productList())

  },[])
  return (
    <div className='d-flex flex-column mt-3 main-container'>
    
    <button onClick={()=>dispatch(emptyCart())}  className="mt-3">Empty cart</button>
    <div>
    {/* <button onClick={()=>dispatch(productList())}  className="mt-3">product list</button> */}

    </div>
     <div className="d-flex flex-row justify-content-between main-product">{
      data.map(e=>
      <div className="d-flex flex-row justify-content-between">
        <div className='card mt-3 d-flex flex-column justify-content-center m-2'>
        <div className='m-2'>
        <img src={e.thumbnail} className='image-size'/>
        <p><b>Brand:</b>{e.brand}</p>
        <p><b>category:</b>{e.category}</p>
        <p><b>Price:</b>{e.price}</p>
        <p><b>Title:</b>{e.title}</p>
        <p><b>Rating:</b>{e.rating}</p>
        </div>
        <div>
    <button onClick={()=>dispatch(addTocart(e))} className="mt-3 btn btn-primary m-2">Add to cart</button>
    <button onClick={()=>dispatch(removeTocart(e))}  className="mt-3 btn btn-primary m-2">Remove From Cart</button>
        </div>
      </div>
      </div>)
     }</div>

      {/* <Cart/> */}
    {/* <div className="products-list">
      {productsData.map(each=> <div>
        <img src={each.thumbnail}/>
        
      </div>)}
    </div> */}
    
    </div>
  );
}

export default Home;
