import React from 'react'
import Header from './Header'
import Cart from '../components/Cart';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { NavLink } from 'react-router-dom';

// page used to display all products user has in cart
export default function CartPage() {

  // ProductContext is used for product list and total
  const { products, total } = useContext(ProductContext);

  // productsInCart is an array of all products user has in thier cart
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

        {/* Products is outputed or, if empty, user is told cart is empty */}
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
            <button className='alignButton'><NavLink className="navLink" to="/checkout">CHECKOUT</NavLink></button>
            </div>
        }

    </div>
  )
}
