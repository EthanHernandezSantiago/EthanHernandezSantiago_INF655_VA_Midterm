import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import { NavLink, redirect } from 'react-router-dom';


export default function Checkout() {
  let { ccNum, setccNum, address, setAddress, townAndState, setTownAndState, zipcode, setZipcode } = useContext(ProductContext);
  
  return (
    <form id="checkoutForm" onSubmit={() => {return redirect('/thankyou')}}>
      <fieldset>
      <legend>Credit Card and Shipping Information</legend>
        <lablel for="ccNum">Creidt Card Number: </lablel>
        <input name="ccNum" type="text" value={ccNum} onChange={e => setccNum(e.target.value)} required placeholder='Credit Card Number' />
        <br />
        <lablel for="address">Address: </lablel>
        <input name="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required placeholder='1234 Main St' />
        <br />
        <lablel for="townAndState">Town and State: </lablel>
        <input name="townAndState" type="text" value={townAndState} onChange={e => setTownAndState(e.target.value)} required placeholder='Town, State' />
        <br />
        <lablel for="zipcode">Zipcode: </lablel>
        <input name="zipcode" type="text" value={zipcode} onChange={e => setZipcode(e.target.value)} required placeholder='12345' />
        <br />
        <button><NavLink to="/thankyou" className="navLink">Submit</NavLink></button>
      </fieldset>
    </form>
  )
}
