import FormatCurrency from '../utils/FomartCurrency'
import './CartItem.css'
import {BsFillCartXFill} from 'react-icons/bs'
import PropTypes from 'prop-types'

import { useContext } from 'react'
import { ProductsContext } from '../Contexts/ProductsProvider'

function CartItem({data}){

    const {id, thumbnail, title, price} = data

    const {cartItem, setCartItem} = useContext(ProductsContext)

    function removeItem(){
        const updatedItems = cartItem.filter((items) => items.id != id) //Filtra para todos os itens com id diferente do id do item que clicamos para remover
        setCartItem(updatedItems)
    }

    return(
        <div className='CartItem'>
            <img src={thumbnail} alt="Imagem do Produto" className='cart-item-img'/>
            <div className='cart-item-info'>
                <h3 className='cart-item-title'>{title}</h3>
                <h3 className='cart-item-price'>{FormatCurrency(price)}</h3>
                <button type='button' className='cart-item-remove' onClick={removeItem}>
                    <BsFillCartXFill />
                </button>
            </div>
        </div>
    )
}

CartItem.propTypes = { //Props validação
    data: PropTypes.object
}

export default CartItem

