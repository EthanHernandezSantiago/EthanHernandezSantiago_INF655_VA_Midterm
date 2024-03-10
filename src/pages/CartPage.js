import React from 'react'
import Header from './Header'
import InCartProduct from '../components/InCartProduct';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export default function CartPage() {

  const { products, total } = useContext(ProductContext);

  let productsInCart = products.filter(p => p.inCart > 0);

  return (
    <div className='innerContainer'>
      <h1 className='title'>Cart</h1>
      <Header />
      <h2 className='subtitle'>Products in your cart</h2>
      {total === 0 ? null : <h3 id="total"><strong>Current Total: ${Number.parseFloat(total).toFixed(2)}</strong></h3>}
      <div id="productGrid">
        {productsInCart.length === 0 ? <h3 id="cartEmpty">CART CURRENTLY EMPTY</h3> :
          productsInCart.map(product => {
            return (
              <InCartProduct key={product.id} id={product.id} name={product.name} price={product.price} inCart={product.inCart} />
        )})} 
        </div>
    </div>
  )
}
