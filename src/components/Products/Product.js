import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import products from './ProductsList';


export default function Product({ id, name, price }) {
  const url = "/product/" + id;

  function addToCart() {
    let temp = products.at(products.findIndex(p => p.id === id));
    temp.inCart++;
  }

  return (
    <div className="productCard">
        <div className="placeholderIMG"></div>
        <div className="productCardText">
          <p>{name}</p>
          <p>${price}</p>
          <button><NavLink className="navLink" to={url}>Product Details</NavLink></button>
          <button onClick={addToCart}>Add To Cart <AiOutlineShoppingCart /></button>
        </div>
    </div>
  )
}
