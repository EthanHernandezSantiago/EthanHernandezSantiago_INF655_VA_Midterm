import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import products from '../components/Products/ProductsList';


export default function ProductDetailPage() {
  
  const{ id } = useParams();
  let product = products.at(products.findIndex(p => p.id === Number(id)));
  return (
    <div>
      <h1 className='title'>Product Detail</h1>
      <Header />
      <h2>{product.name}</h2>

    </div>
  )
}
