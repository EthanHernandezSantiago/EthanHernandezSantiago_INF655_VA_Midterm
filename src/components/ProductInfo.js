import React from 'react'
import { NavLink } from 'react-router-dom';


export default function ProductInfo({ id, name, price, inCart}) {
  const url = "/product/" + id;

  return (
    <div>
        <div className="placeholderIMG"></div>
        <div className="productInfo">
          <p>{name}</p>
          <p>${Number.parseFloat(price).toFixed(2)}</p>
          <p>In Cart: {inCart}</p>
          <button><NavLink className="navLink" to={url}>Product Details</NavLink></button>
        </div>
    </div> 
)}
