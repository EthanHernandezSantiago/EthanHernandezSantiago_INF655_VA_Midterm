import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage"
import SearchPage from "./pages/SearchPage";
import { ProductProvider } from "./context/ProductContext";
import ThankYouPage from "./pages/ThankYouPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CheckoutProvider } from "./context/CheckoutContext";

function App() {
  return (
    <CheckoutProvider>
      <ProductProvider>
        <div className="container">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/thankyou" element={<ThankYouPage />} />
              </Routes>
            </BrowserRouter>
        </div>
      </ProductProvider>
    </CheckoutProvider>
  );
}

export default App;
