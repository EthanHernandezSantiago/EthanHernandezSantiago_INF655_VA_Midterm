import { createContext, useContext, useState } from "react";
import productList from "../components/ProductsList";
import CheckoutContext from "./CheckoutContext";

// ProductContext deals withs editing which product array
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    // CheckoutContext is used for thankYouPageCartClear function
    const { setccNum, setAddress, setTownAndState, setZipcode }= useContext(CheckoutContext)

    // copy of products list (so old one is not changed)
    let [ products, setProducts ] = useState([...productList])

    // total price of all items in cart
    let [ total , setTotal ] = useState(0);

    // user input for what product to search for
    let [ searchProductText, setSearchProductText ] = useState('');

    // product user search for
    let [ searchProduct, setSearchProduct ] = useState({id: -1, name: "Not Found", price: 0});

    // adds ONE of a product to users cart
    // it used to add a product to a users cart that HAS NOT been in their cart
    function addToCart(id) {
        // temp is set to product with id
        let temp = products.at(products.findIndex(p => p.id === id))
        // their inCart field is increased to show they have one more in cart
        temp.inCart++;
        // products and total is changed
        setProducts([...products])
        setTotal(total + temp.price)
    }

    // adds ONE of a product to users cart
    // this is for products in the users cart all ready
    function addOneToCart(id) {
        // temp is set to product with id
        let temp = products.at(products.findIndex(p => p.id === id))
        // inCart is increased
        temp.inCart++;
        // product and total is changed
        setProducts([...products])
        setTotal(total + temp.price)
    }

    // removed ONE of a product in users cart
    // this is for products in the users cart all ready
    function removeOneFromCart(id) {
        // temp is set to product with id
        let temp = products.at(products.findIndex(p => p.id === id))
        // inCart must be above 0 (inCart can not be 0)
        if (temp.inCart !== 0) {
            // one is decreased from inCart of temp
            temp.inCart--;
            // products and toal is changed
            setProducts([...products])
            setTotal(total - temp.price)
        }
        // if inCart == 0 the users is alerted
        else {
            alert("Error: All " + temp.name + "s have been removed");
        }
    }

    // removed an entire product from a users cart no matter how much they have
    function removeFromCart(id) {
        // temp is set to product with id
        let temp = products.at(products.findIndex(p => p.id === id))
        // total is changed
        setTotal(total - (temp.price * temp.inCart))
        // inCart is set to 0
        temp.inCart = 0;
        // products is changed
        setProducts([...products]);
     }

    // used to find a product user searched for
    function findSearchProduct() {
        // to make sure case doesn't matter, every letter is set to lowercase and the frist letter is captilzed
        searchProductText = searchProductText.charAt(0).toUpperCase() + searchProductText.substring(1).toLowerCase();
        // the text is changed to reflect those changes
        setSearchProductText(searchProductText);
        // i is set of the index of product that with the same name as searchProductText
        let i = products.findIndex(p => p.name === searchProductText)
        // findIndex returns -1 if no index is found so if searchProduct is set as dummy product
        if (i === -1) {
            setSearchProduct({id: -1, name: "Not Found", price: 0});
        }
        // else it is set at real product
        else{
            setSearchProduct(products.at(i));
        }
     }

    // resets all products. 
    //  this is ran after user hits button on thank you page
    function thankYouPageCartClear() {
        setProducts([... productList]);
        setccNum(0);
        setAddress('');
        setTownAndState('');
        setZipcode(0);
    }

    return (
        <ProductContext.Provider value={{ products, total, searchProductText, searchProduct,
            setProducts, setTotal, setSearchProductText,
            addToCart, addOneToCart, removeOneFromCart, removeFromCart, findSearchProduct, thankYouPageCartClear }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;