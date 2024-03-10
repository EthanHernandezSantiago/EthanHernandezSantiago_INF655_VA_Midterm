import React from 'react'
import Header from './Header'
import Product from '../components/Products/Product'
import products from '../components/Products/ProductsList'

export default function HomePage() {
  
  return (
    <div>
      <h1 className='title'>Home</h1>
      <Header />
      <div id='productGrid'>
        {products.map(product => {
          return (
            <Product key={product.id} id={product.id} name={product.name} price={product.price} />
        )})} 
      </div>     
    </div>
  )
}
