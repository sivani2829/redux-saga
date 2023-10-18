
import { useSelector } from 'react-redux'
import { productSearch } from '../../redux/productAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'

const Header=()=>{
    const res=useSelector((state)=>state.cartData)
    console.log('in header data',res)
    let dispatch=useDispatch()

    return(
    
        <div className='header bg-info'>
            <Link to='/'><h1 className="logo">E-commerce</h1></Link>
            <div className='input-text'>
                <input type='text' placeholder='search product' onChange={(e)=>dispatch(productSearch(e.target.value))}/>
            </div>
            <Link to='/cart'>
            <div className='cart'>
                <span>{res.length}</span>
                <img src="https://www.nicepng.com/png/detail/261-2611207_cart-add-to-cart-icon-png.png" className='w-20'/>
            </div>
            </Link>

        </div>

    )
}
export default Header