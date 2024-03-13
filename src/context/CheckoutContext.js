import { createContext, useState } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {

    let [ ccNum, setccNum ] = useState(0);
    let [ address, setAddress ] = useState('');
    let [ townAndState, setTownAndState ] = useState('')
    let [ zipcode, setZipcode ] = useState(0);

    return (
        <CheckoutContext.Provider value={{ ccNum, address, townAndState, zipcode,
            setccNum, setAddress, setTownAndState, setZipcode }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;