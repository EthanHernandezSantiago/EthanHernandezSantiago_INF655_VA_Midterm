import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductInfo from './ProductInfo'
import ProductContext from '../context/ProductContext';

export default function Product({ id }) {

    const { addToCart, products } = useContext(ProductContext);
    let p = products.at(products.findIndex(p => p.id === id))

    return (
        <div className="productCard">
            <ProductInfo p={p} />
            {p.inCart === 0 ? 
            <button className='cartButton' onClick={e => {e.stopPropagation(); addToCart(id)}}>Add To Cart <AiOutlineShoppingCart /></button> 
            : <p className="prodMsg">IN CART</p> }
        </div>
  )
}
