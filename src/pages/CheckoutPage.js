import React, { useContext } from 'react'
import Header from './Header'
import Checkout from '../components/Checkout'
import ProductContext from '../context/ProductContext'
import ProductSummary from '../components/PoductSummary'

// page used to checkout
export default function CheckoutPage() {

  // ProductContext is used to get product list and total
  const { products, total } = useContext(ProductContext);

  return (
    <div>      
        <h1 className='title'>Checkout</h1>
        <Header />
        <h2 className='subtitle'>Please Make Sure Order Is Correct</h2>
        <table id="thankYouTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount In Cart</th>
              <th>Total Price</th>
            </tr>
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
        <h2 className='subtitle'>Please Enter Your Credit Card and Shipping Info</h2>
        <Checkout />
    </div>
  )
}
