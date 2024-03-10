import React, { useContext } from 'react'
import ProductInfo from './ProductInfo'
import ProductContext from '../context/ProductContext'

export default function InCartProduct({ id, name, price, inCart}) {

  const { removeFromCart } = useContext(ProductContext);

  return (
    <div className="productCard">
        <ProductInfo id={id} name={name} price={price} inCart={inCart}/>
        <button className="cartButton" onClick={ e => {e.stopPropagation(); removeFromCart(id)}}>Remove from Cart</button>
    </div>
  )
}
