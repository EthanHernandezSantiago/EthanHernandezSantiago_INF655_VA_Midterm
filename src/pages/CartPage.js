import React from 'react'
import Header from './Header'
import Cart from '../components/Cart';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { NavLink } from 'react-router-dom';

export default function CartPage() {

  const { products, total } = useContext(ProductContext);

  let productsInCart = products.filter(p => p.inCart > 0);

  return (
    <div className='innerContainer'>
      <h1 className='title'>Cart</h1>
      <Header />
      <h2 className='subtitle'>Products in your cart</h2>
      {total === 0 ? null : 
        <div>
          <h3 id="total"><strong>Current Total: ${Number.parseFloat(total).toFixed(2)}</strong></h3>
          <p id="cartMSG">To checkout click on SUBMIT ORDER button below</p>
        </div>}
        {productsInCart.length === 0 ? <h3 id="cartEmpty">CART CURRENTLY EMPTY</h3> :
        <div id="productGrid">
          {productsInCart.map(product => {
            return (
              <Cart key={product.id} id={product.id} />
            )})}
        </div>
        }
        {productsInCart.length === 0 ? null : 
          <div>
            <button className='alignButton'><NavLink className="navLink" to="/thankyou">SUBMIT ORDER</NavLink></button>
            </div>
        }

    </div>
  )
}
