import React, { useContext } from 'react'
import Header from './Header'
import ProductContext from '../context/ProductContext'


export default function SearchPage() {

  const { searchProductText, searchProduct, setSearchProductText, findSearchProduct } = useContext(ProductContext);

  return (
    <div>
      <h1 className='title'>Search</h1>
      <Header />
      <h2 className='subtitle'>Enter Product to Search for</h2>
      <form id="searchBar" onSubmit={e => {e.preventDefault(); findSearchProduct();}}>
        <input type='text' vaule={searchProductText} onChange={e => setSearchProductText(e.target.value)} 
         placeholder='Enter Porduct Name Here'></input>
         <input type='submit' />
         {searchProduct.id === -1 ? <h3>No Product Found</h3> :
          <div>
            <h3>{searchProduct.name}</h3>
            <h3>${Number.parseFloat(searchProduct.price).toFixed(2)}</h3>
          </div>}
      </form>
    </div>
  )
}
