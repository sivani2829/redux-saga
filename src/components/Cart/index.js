import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './index.css'


const Cart=()=>{
    const cartdata=useSelector((state)=>state.cartData)
    let dataLength=cartdata.length;
    let amount=dataLength && cartdata.map(e=>e.price).reduce((prev,next)=>prev+next)
    return (
        <>
        {dataLength>0?(
            <div className="d-flex flex-row justify-content-around">
            <div className="cart-page d-flex flex-column">
                 <div className="d-flex flex-row card mt-5">
                        <p className="ml-3 p-3"><b>Product</b></p>
                        <p className="ml-5 p-3"><b>Name</b></p>
                        <p className="ml-5 p-3"><b>Price</b></p>
                        <p className="ml-5 p-3"><b>Brand</b></p>
                        <p className="ml-5 p-3"><b>Category</b></p>
                        </div>
                <div>
                    {cartdata.map(e=>
                    <div className='d-flex flex-column'>
                       
                    <div className="d-flex flex-row card">
                        <img src={e.thumbnail} className='image m-3'/>
                        <p className="ml-5 p-3">{e.title}</p>
                        <p className="ml-5 p-3">{e.price}</p>
                        <p className="ml-5 p-3">{e.brand}</p>
                        <p className="ml-5 p-3">{e.category}</p>
                    </div>

                        </div>)}
                </div>
              

        </div>
        <div className="amount-cont d-flex flex-column  mt-5 mr-5">
            <p><span className="mr-5"><b>Amount:</b></span>{amount}</p>
            <hr/>
            <p><span className="mr-5"><b>Discount:</b></span>{amount/10}</p>
            <hr/>
            <p><span className="mr-5"><b>tax:</b></span>{10}</p>
            <hr/>
            <p><span className="mr-5"><b>Total:</b></span>{amount-(amount/10)+10}</p>
            <hr/>
        </div>
        </div>
   
        ):(
            <div className="d-flex flex-column justify-content-center mt-5">
                 <h1 className="ml-5">Cart is Empty</h1>
                 <Link to='/'> <button className="btn btn-primary ml-5">Home</button></Link>
            </div>
           
        )}
        
        </>
    )
}
export default Cart