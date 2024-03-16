import React, { useContext } from 'react'
import CheckoutContext from '../context/CheckoutContext';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Checkout() {

  // CheckoutContext is used to get functions to edit checkout information
  const { ccNum, setccNum, address, setAddress, townAndState, setTownAndState, zipcode, setZipcode } = useContext(CheckoutContext);
  
  // navigate is used to redirect the user to a different page after form is submitted
  const navigate = useNavigate();

  return (
    <form id="checkoutForm" onSubmit={e => {e.stopPropagation(); navigate("/thankyou")}}>
      <fieldset>
      <legend>Credit Card and Shipping Information</legend>
        <label htmlFor="ccNum">Creidt Card Number: </label>
        <input name="ccNum" type="text" value={ccNum} onChange={e => setccNum(e.target.value)} required placeholder='Credit Card Number' />
        <br />
        <label htmlFor="address">Address: </label>
        <input name="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required placeholder='1234 Main St' />
        <br />
        <label htmlFor="townAndState">Town and State: </label>
        <input name="townAndState" type="text" value={townAndState} onChange={e => setTownAndState(e.target.value)} required placeholder='Town, State' />
        <br />
        <label htmlFor="zipcode">Zipcode: </label>
        <input name="zipcode" type="text" value={zipcode} onChange={e => setZipcode(e.target.value)} required placeholder='12345' />
        <br />
        <button><NavLink to="/thankyou" className="navLink">Submit</NavLink></button>
      </fieldset>
    </form>
  )
}
