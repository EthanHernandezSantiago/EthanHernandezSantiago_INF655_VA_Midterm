import { createContext, useState } from "react";
import productList from "../components/ProductsList";

 
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    let [ products, setProducts ] = useState([...productList])
    let [ total , setTotal ] = useState(0);
    let [ searchProductText, setSearchProductText ] = useState('');
    let [ searchProduct, setSearchProduct ] = useState({id: -1, name: "Not Found", price: 0});
    let [ ccNum, setccNum ] = useState(0);
    let [ address, setAddress ] = useState('');
    let [ townAndState, setTownAndState ] = useState('')
    let [ zipcode, setZipcode ] = useState(0);

    function addToCart(id) {
       let temp = products.at(products.findIndex(p => p.id === id))
        temp.inCart++;
        setProducts([...products])
        setTotal(total + temp.price)
    }

    function addOneToCart(id) {
        let temp = products.at(products.findIndex(p => p.id === id))
        temp.inCart++;
        setProducts([...products])
        setTotal(total + temp.price)
    }

    function removeOneFromCart(id) {
        let temp = products.at(products.findIndex(p => p.id === id))
        if (temp.inCart !== 0) {
            temp.inCart--;
            setProducts([...products])
            setTotal(total - temp.price)
        }
        else {
            alert("Error: All " + temp.name + "s have been removed");
        }
    }

    function removeFromCart(id) {
        let temp = products.at(products.findIndex(p => p.id === id))
        setTotal(total - (temp.price * temp.inCart))
        temp.inCart = 0;
        setProducts([...products]);
     }

    function findSearchProduct() {
        searchProductText = searchProductText.charAt(0).toUpperCase() + searchProductText.substring(1).toLowerCase();
        setSearchProductText(searchProductText);
        let i = products.findIndex(p => p.name === searchProductText)
        if (i === -1) {
            setSearchProduct({id: -1, name: "Not Found", price: 0});
        }
        else{
            setSearchProduct(products.at(i));
        }
     }

    function thankYouPageCartClear() {
        products.map(p => {
            p.quantity = p.quantity + p.inCart;
            p.inCart = 0;
            return p;
        });
        setProducts(products);
        setccNum(0);
        setAddress('');
        setTownAndState('');
        setZipcode(0);
    }

    return (
        <ProductContext.Provider value={{ products, total, searchProductText, searchProduct, ccNum, address, zipcode,townAndState,
            setProducts, setTotal, setSearchProductText, setccNum, setAddress, setZipcode, setTownAndState,
            addToCart, addOneToCart, removeOneFromCart, removeFromCart, findSearchProduct, thankYouPageCartClear }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;