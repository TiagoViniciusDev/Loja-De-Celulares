import { createContext, useState } from "react"
import {PropTypes} from 'prop-types'

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [cartItem, setCartItem] = useState([])
    const [isCartVisible, setIsCartVisible] = useState(false)

    const value = {
        products, 
        setProducts, 
        loading, 
        setLoading,
        cartItem, 
        setCartItem,
        isCartVisible, 
        setIsCartVisible
    }

    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}

ProductsProvider.propTypes = {
    children: PropTypes.any
}

