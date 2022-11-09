import "./App.css";
import { Store } from "./components/Store";
import { Home } from "./components/Pages/Home";
import CartList from "./components/CartList";
import { useState,useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import About from "./components/Pages/About";
import ContactUs from "./components/Pages/ContactUs";
import ProductDetails from "./components/Pages/productDetails";
import AuthForm from "./components/Pages/Auth";
import AuthContext from "./store/auth-context";



function App(props) {
 
  const authCtx=useContext(AuthContext)
  const isLoggedIn=authCtx.isLoggedIn

  const product=[
    {
      key: 1,
      title: "Colors",
      price: 100,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      key: 2,
      title: "Black and white Colors",
      price: 50,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      key: 3,
      title: "Yellow and Black Colors",
      price: 70,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      key: 4,
      title: "Blue Color",
      price: 100,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleShow = (value) => {
    setShowCart(value);
  };

  async function contectFormHandler(Details) {
    const responce = await fetch(
      "https://my-http-request-908a9-default-rtdb.firebaseio.com/Details.json",
      {
        method: "POST",
        body: JSON.stringify(Details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await responce.json();
    console.log(data);
  }

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          isLoggedIn && <Route path="/" element={<Home />} />
         {isLoggedIn && <Route
            path="/Store"
            element={
              <Store
                count={cart.length}
                handleShow={handleShow}
                setCart={setCart}
                cart={cart}
              />
            }
          />}
          {isLoggedIn &&
          <Route
            path="/cartList"
            element={<CartList key={Math.random()} cart={cart} ProductArr={product}/>}
          />}
          {isLoggedIn &&<Route path="/About" element={<About />} />}
          {isLoggedIn && <Route
            path="/Contact-Us"
            element={<ContactUs onAddDetails={contectFormHandler} />}
          />}
          {isLoggedIn && <Route
            path="/Store/:productId"
            element={<ProductDetails product={product} />}
          />}
          <Route path="/Auth" element={<AuthForm />} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
