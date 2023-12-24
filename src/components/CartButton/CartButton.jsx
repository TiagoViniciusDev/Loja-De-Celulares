import './CartButton.css'
import { ProductsContext } from '../Contexts/ProductsProvider'
import { useContext } from 'react'

import {AiOutlineShoppingCart} from 'react-icons/ai'

function CartButton(){

    const {cartItem, isCartVisible, setIsCartVisible} = useContext(ProductsContext)

    return(
        <button className='cart__button' onClick={() => setIsCartVisible(!isCartVisible)}>
            <AiOutlineShoppingCart />
            {cartItem.length > 0 && <span className='cart_status'>{cartItem.length}</span>}
        </button>
    )
}

export default CartButton