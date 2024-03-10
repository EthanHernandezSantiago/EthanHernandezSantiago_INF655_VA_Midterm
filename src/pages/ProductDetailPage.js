import React, { useContext } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import ProductContext from '../context/ProductContext';


export default function ProductDetailPage() {
  
  const{ id } = useParams();
  const { products } = useContext(ProductContext);
  let product = products.at(products.findIndex(p => p.id === Number(id)));
  return (
    <div>
      <h1 className='title'>Product Detail</h1>
      <Header />
      <h2 className='subtitle'>{product.name}</h2>

    </div>
  )
}
