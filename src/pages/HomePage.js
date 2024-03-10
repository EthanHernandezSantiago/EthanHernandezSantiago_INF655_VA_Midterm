import React, { useContext } from 'react'
import Header from './Header'
import NotInCartProduct from '../components/NotInCartProduct'
import ProductContext from '../context/ProductContext'

export default function HomePage() {

  const { products }= useContext(ProductContext);

  return (
    <div>
      <h1 className='title'>Home</h1>
      <Header />
      <div id='productGrid'>
        {products.map(product => {
          return (
            <NotInCartProduct key={product.id} id={product.id} name={product.name} price={product.price} inCart={product.inCart}/>
        )})} 
      </div>     
    </div>
  )
}
