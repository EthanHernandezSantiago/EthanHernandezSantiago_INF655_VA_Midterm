import React from 'react'
import Header from './Header'
import products from '../components/Products/ProductsList'
import Product from '../components/Products/Product'

export default function CartPage() {

  let productsInCart = products.filter(p => p.inCart > 0);

  return (
    <div>
      <h1 className='title'>Cart</h1>
      <Header />
      <h2>Products currently in your cart</h2>
      <div id="productGrid">
        {productsInCart.length === 0 ? <h3>Your cart is empty</h3> :
          productsInCart.map(product => {
            return (
              <Product key={product.id} id={product.id} name={product.name} price={product.price} />
        )})} 
        </div>
    </div>
  )
}
