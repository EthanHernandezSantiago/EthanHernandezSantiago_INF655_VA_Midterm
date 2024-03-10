import { createContext, useState } from "react";
import productList from "../components/ProductsList";

 
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    let [ products, setProducts ] = useState([...productList])
    let [ total , setTotal ] = useState(0);
    let [ searchProductText, setSearchProductText ] = useState('');
    let [ searchProduct, setSearchProduct ] = useState({id: -1, name: "Not Found", price: 0});

    function addToCart(id) {
       let temp = products.at(products.findIndex(p => p.id === id))
       temp.inCart++;
       setProducts([...products])
       setTotal(total + temp.price)
    }

    function removeFromCart(id) {
        let temp = products.at(products.findIndex(p => p.id === id))
        temp.inCart--;
        setProducts([...products])
        setTotal(total - temp.price)
     }

     function findSearchProduct() {
        let i = products.findIndex(p => p.name === searchProductText)
        if (i === -1) {
            setSearchProduct({id: -1, name: "Not Found", price: 0});
        }
        else{
            setSearchProduct(products.at(i));
        }
     }


    return (
        <ProductContext.Provider value={{ products, total, searchProductText, searchProduct,
            setProducts, setTotal, setSearchProductText,
            addToCart, removeFromCart, findSearchProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;