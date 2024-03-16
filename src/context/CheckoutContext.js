import { createContext, useState } from "react";

// Checkout context only deals with checkout infomration
const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {

    // credit card number
    let [ ccNum, setccNum ] = useState(0);
    
    // address 
    let [ address, setAddress ] = useState('');

    // town and state 
    let [ townAndState, setTownAndState ] = useState('')

    // zipcode 
    let [ zipcode, setZipcode ] = useState(0);

    return (
        <CheckoutContext.Provider value={{ ccNum, address, townAndState, zipcode,
            setccNum, setAddress, setTownAndState, setZipcode }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;