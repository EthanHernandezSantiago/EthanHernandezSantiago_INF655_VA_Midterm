import React from 'react'
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export default function PoductSummary({ id }) {

  const { products } = useContext(ProductContext);
  let p = products.at(products.findIndex(p => p.id === id))

  return (
    <tr className='productSummary'>
        <td>{p.name}</td>
        <td>${Number.parseFloat(p.price).toFixed(2)}</td>
        <td>{p.inCart}</td>
        <td>${Number.parseFloat(p.price * p.inCart).toFixed(2)}</td>
    </tr>
  )
}
