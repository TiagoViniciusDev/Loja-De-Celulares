import { useEffect } from 'react'
import './Products.css'
import ApiProducts from '../../api/ApiProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'

import { useContext } from 'react'
import { ProductsContext } from '../Contexts/ProductsProvider'


function Products(){

    const {products, setProducts, loading, setLoading} = useContext(ProductsContext)


    useEffect(() => { //Executar apenas uma vez
        ApiProducts('celular').then((response) => {
            setProducts(response) //Jogamos os valores da api em um state para salva-los e temos acesso
            setLoading(false) //Parando de exibir animação de loading //Como está no final do then a animação so para quando os dados tiverem carregado
        })
    }, [])

    return(
        (loading ? <Loading /> : 
        <section className='products'>
            {products.map((produtos) => (<ProductCard key={produtos.id} data={produtos}/>))}
        </section>)
    )
}

export default Products