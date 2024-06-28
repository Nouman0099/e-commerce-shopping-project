import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CheckoutPage from "./components/CheckoutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProductPage from "./components/CreateProductPage";
import FooterComponent from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <div className="font-ubuntu">
        <BrowserRouter>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cartpage" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/create" element={<CreateProductPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
