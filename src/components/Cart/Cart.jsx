import CartItem from '../CartItem/CartItem'
import './Cart.css'

import { ProductsContext } from '../Contexts/ProductsProvider'
import { useContext } from 'react'

import FormatCurrency from '../utils/FomartCurrency'

function Cart(){

    const {cartItem, isCartVisible} = useContext(ProductsContext)

    const totalPrice = cartItem.reduce((acc, item) => { //acc salva o valor anterior // reducer vai percorrer todo o array
        return item.price + acc //Soma o item atual com o valor de toda a soma até o momento
    }, 0) //Valor inicial do acc é zero

    

    return(
        <section className={`Cart ${isCartVisible ? 'cart-active' : ''}`}>
            <div className='cart-items'>
                {cartItem.map((cartItem) => <CartItem key={cartItem.id} 
                    data={cartItem}
                />)}
            </div>
            {cartItem.length !== 0 ?(
                <div className='cart-resume'>
                    {FormatCurrency(totalPrice)}
                </div>
            ): 
                (<div className='carrinhoVazio'>
                    <h3>Carrinho Vazio</h3>
                    <p>Adicione produtos ao seu carrinho</p>
                </div>)
            }
        </section>
    )
}

export default Cart