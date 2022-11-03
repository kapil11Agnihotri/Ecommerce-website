import "./App.css";
import {Store} from "./components/Store";
import { Home } from "./components/Pages/Home";
import CartList from "./components/CartList";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/Pages/About";
function App() {
  const [product, setProduct] = useState([
    {
      title: "Colors",
      price: 100,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <>
    
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
        <Route path="/Store" element={<Store  count={cart.length} handleShow={handleShow}  setCart={setCart} cart={cart}/>} /> 
        <Route path="/cartList" element={<CartList cart={cart} handleShow={handleShow} />} /> 
        <Route path="/About" element={<About />} /> 
          
         
         
      
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
