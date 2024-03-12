import React, { useContext } from 'react'
import Header from './Header'
import ProductContext from '../context/ProductContext'
import ProductSummary from '../components/PoductSummary'
import { NavLink } from 'react-router-dom';

export default function ThankYouPage() {

  const { products, total, thankYouPageCartClear, ccNum, address, townAndState, zipcode } = useContext(ProductContext);
  
  return (
    <div>
        <h1 className='title'>Thank You</h1>
        <Header />
        <h2 className='subtitle'>Thank you for your order!</h2>
        <h3 className='subtitle'>Summary of your order:</h3>
        <table id="thankYouTable">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Amount In Cart</th>
            <th>Total Price</th>
          </thead>
          <tbody>
            {products.filter(p => p.inCart > 0).map(p => {
              return (
                <ProductSummary id={p.id} />
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} id="finalPrice">Final Price</td>
              <td>${Number.parseFloat(total).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table> 
        <h3 className='subtitle'>Summary of Credit Card and Shipping Information</h3>
        <div id="thankYouSummary">
          <p>Credit Card Number - {ccNum}</p>
          <p>Address - {address}</p>
          <p>Town and State - {townAndState}</p>
          <p>Zipcode - {zipcode}</p>
        </div>
        <button onClick={e => {e.stopPropagation(); thankYouPageCartClear()}}><NavLink className="navLink" to="/">Return Home</NavLink></button>
    </div>
  )
}
