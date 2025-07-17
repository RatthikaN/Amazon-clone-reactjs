import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Registration/SignIn";
import Orders from "./Components/Order/Order";
import Home from "./Home";
import { Footer } from "./Footer";


function App() {
  return (
    <>
      <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer/>
          </>
  );
}

export default App;
