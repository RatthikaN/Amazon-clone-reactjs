
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SignIn} from "./Registration/SignIn";
import { SignUp } from "./Registration/SignUp";
import Order from "./Components/Order/Order";
import Home from "./Home";
import { Cart } from "./Components/Cart/Cart";
import {Products}  from "./Components/Products/Products";
import {SingleProduct} from "./Components/Products/SingleProduct";


function App() {
  return (
    <>
      <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
      <ToastContainer/>
     </Router>
          </>
  );
}

export default App;
