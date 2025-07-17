
import { Routes, Route } from "react-router-dom";
import SignIn from "./Registration/SignIn";
import Orders from "./Components/Order/Order";
import Home from "./Home";
import { Cart } from "./Components/Cart/Cart";



function App() {
  return (
    <>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
     
          </>
  );
}

export default App;
