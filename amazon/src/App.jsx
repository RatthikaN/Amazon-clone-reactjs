
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import SignIn from "./Registration/SignIn";
import Order from "./Components/Order/Order";
import Home from "./Home";
import { Cart } from "./Components/Cart/Cart";
import {Products}  from "./Components/Products/Products";



function App() {
  return (
    <>
      <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
     </Router>
          </>
  );
}

export default App;
