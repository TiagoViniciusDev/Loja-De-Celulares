import './SearchBar.css'
import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'
import ApiProducts from '../../api/ApiProducts'

import { useContext } from 'react'
import { ProductsContext } from '../Contexts/ProductsProvider'

function SearchBar(){

    const [searchValue, setSearchValue] = useState('')
    const {setProducts, setLoading} = useContext(ProductsContext)

    async function search(e){
      e.preventDefault()
      setLoading(true) //Exibindo loading
      const searchProducts = await ApiProducts(searchValue)
      setProducts(searchProducts) //Passando nova pesquisa com valor da barra de pesquisa
      setLoading(false) //Exibindo produtos
      setSearchValue('')
    }

    return(
        <form className='searchBar' onSubmit={search}>
          <input 
            className='search__input'
            type="search"
            value={searchValue}
            placeholder='Buscar produtos'
            onChange={e => setSearchValue(e.target.value)}
            required
          />
          <button className='search__button' type='submit'>
            <BsSearch />
          </button>
        </form>
    )
}

export default SearchBar

