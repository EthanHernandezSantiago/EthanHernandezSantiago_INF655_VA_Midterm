import React, { useContext } from 'react'
import ProductInfo from './ProductInfo'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductContext from '../context/ProductContext'

export default function Cart({ id }) {

  const { addOneToCart, removeOneFromCart, removeFromCart, products } = useContext(ProductContext);
  let p = products.at(products.findIndex(p => p.id === id))

  return (
    <div className="productCard">
        <ProductInfo p={p} />
        <p className='prodMsg'>Amount in Cart: {p.inCart}
          <button onClick={e => {e.stopPropagation(); addOneToCart(p.id)}}>+</button>  
          <button onClick={e => {e.stopPropagation(); removeOneFromCart(p.id);}}>-</button>
        </p>
        <button className="cartButton" onClick={ e => {e.stopPropagation(); removeFromCart(id)}}>Remove from Cart<AiOutlineShoppingCart /></button>
    </div>
  )
}
