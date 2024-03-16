import React, { useContext } from 'react'
import Header from './Header'
import { NavLink, useParams } from 'react-router-dom'
import ProductContext from '../context/ProductContext';

// page to show more info about a product
export default function ProductDetailPage() {
 
  // product id is gotten from params
  const{ id } = useParams();
  // ProductContext is used to get product list
  const { products } = useContext(ProductContext);
  // p is set as the product with the id in params
  let p = products.at(products.findIndex(p => p.id === Number(id)));
  return (
    <div>
      <h1 className='title'>Product Detail</h1>
      <Header />
      <div id="detailPage">
        <section id="detailIMGSection">
        <img className='productDetailImg' src={p.img} alt={"Image of " + p.name} />
        </section>
        <section id="detailTableSection">
          <table id="detailTable">
            <thead>
              <tr>
                <td colSpan={2}>Product Details</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{p.name}</td>
              </tr>
              <tr>
                <td>Id</td>
                <td>{p.id}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>${Number.parseFloat(p.price).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{p.desc}</td>
              </tr>
              <tr>
                <td>In Cart?</td>
                {p.inCart === 0 ? <td>No</td> : <td>Yes</td>}
              </tr>
              <tr>
                <td>Amount In Cart</td>
                {p.inCart === 0 ? <td>N/A</td> : <td>{p.inCart}</td>}
              </tr>
            </tbody>
          </table>
          <br />
          <button><NavLink className="navLink" to="/">Go Back</NavLink></button>
        </section>
        </div>
    </div>
  )
}
