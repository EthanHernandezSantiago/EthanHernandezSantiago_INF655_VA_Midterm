import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ProductInfo({ p }) {
  // used to set url for navLink
  const url = "/product/" + p.id;

  return (
    <div>
      <img className='productImg' src={p.img} alt={"Image of " + p.name} />
        <div className="productInfo">
          <p>{p.name}</p>
          <p>${Number.parseFloat(p.price).toFixed(2)}</p>
          <button><NavLink className="navLink" to={url}>Product Details</NavLink></button>
        </div>
    </div> 
)}
