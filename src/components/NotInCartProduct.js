import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductInfo from './ProductInfo'
import ProductContext from '../context/ProductContext';

export default function NotInCartProduct({ id, name, price, inCart}) {

    const { addToCart } = useContext(ProductContext);

    return (
        <div className="productCard">
            <ProductInfo id={id} name={name} price={price} inCart={inCart}/>
            <button className='cartButton' onClick={e => {e.stopPropagation(); addToCart(id)}}>Add To Cart <AiOutlineShoppingCart /></button> 
        </div>
  )
}
