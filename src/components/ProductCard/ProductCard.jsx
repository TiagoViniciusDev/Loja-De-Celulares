import './ProductCard.css'
import FormatCurrency from '../utils/FomartCurrency'

import {BsFillCartPlusFill} from 'react-icons/bs'
import PropTypes from 'prop-types'

import { useContext } from 'react'
import { ProductsContext } from '../Contexts/ProductsProvider'

function ProductCard({data}){

    const {title, thumbnail, price} = data //Desestruturação

    const {cartItem, setCartItem} = useContext(ProductsContext)

    //const [addButton, setAddButton] = useState(true)

    function AddToCart(){
        setCartItem([...cartItem, data])
        //setAddButton(false)
    }

    return(
        <section className='productCard'>
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="Imagem Do Produto" className='cardImg'/> {/*Trocando a ultima letra antes do ".jpg" por "W" idenpendente de qual letra seja // Necessario trocar a letra para melhor qualidade da imagem*/}
            <div className='cardInfo'>
                <h2 className='cardPrice'>{FormatCurrency(price)}</h2>
                <h2 className='cardTitle'>{title}</h2>
            </div>
            <button className='buttonAddCart' onClick={AddToCart}>
                <BsFillCartPlusFill />
            </button>
        </section>
    )
}

ProductCard.propTypes = { //Validação do Prop
    data: PropTypes.object
}

export default ProductCard