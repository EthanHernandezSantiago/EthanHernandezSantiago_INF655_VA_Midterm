import React, { useContext } from 'react'
import Header from './Header'
import Product from '../components/Product'
import ProductContext from '../context/ProductContext'

// page to show all products avaible
export default function HomePage() {

  // ProductContext is used to get products
  const { products }= useContext(ProductContext);

  return (
    <div>
      <h1 className='title'>Home </h1>
      <Header />
      <div id='productGrid'>
        {products.map(product => {
          return (
            <Product key={product.id} id={product.id} />
        )})} 
      </div>     
    </div>
  )
}
