import React, { useContext } from 'react'
import Header from './Header'
import ProductContext from '../context/ProductContext'
import Product from '../components/Product'

// page to search for product
export default function SearchPage() {
  // ProductContext is used to get functio to find searched product
  const { searchProductText, searchProduct, setSearchProductText, findSearchProduct } = useContext(ProductContext);

  return (
    <div>
      <h1 className='title'>Search</h1>
      <Header />
      <h2 className='subtitle'>Enter Product to Search for</h2>
      <form id="searchBarForm" onSubmit={e => {e.preventDefault(); findSearchProduct();}}>
        <input id="searchBar" type='text' vaule={searchProductText} onChange={e => setSearchProductText(e.target.value)} 
         placeholder='Enter Porduct Name Here'></input>
         <input type='submit' />
         {searchProduct.id === -1 ? <h3>No Product Found</h3> :
          <div id="searchProduct">
            <Product id={searchProduct.id} />
          </div>}
      </form>
    </div>
  )
}
