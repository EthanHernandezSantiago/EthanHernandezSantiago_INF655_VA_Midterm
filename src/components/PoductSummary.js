import React from 'react'
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

// PoductSummary is used to display product info in a table
export default function PoductSummary({ id }) {

  // ProductContext is used to get the list of products
  const { products } = useContext(ProductContext);
  // p is set as the product with the props id
  let p = products.at(products.findIndex(p => p.id === id))

  return (
    <tr className='productSummary'>
        <td>{p.name}</td>
        {/* Number.parseFloat(num).toFixed(2) makes it so 2 decimals places are shown*/}
        <td>${Number.parseFloat(p.price).toFixed(2)}</td>
        <td>{p.inCart}</td>
        <td>${Number.parseFloat(p.price * p.inCart).toFixed(2)}</td>
    </tr>
  )
}
