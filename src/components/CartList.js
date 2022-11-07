import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import Header from "./Header";
import Footer from "./Footer";
function CartList(props) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(props.cart);
  }, [props.cart]);

  
   console.log("re-redeeed")
  return (
    <>
      <Header />
      <div className={classes.cart}>

        {CART?.map((cartItem, cartindex) => {
          return (
            <div>
              <img src={cartItem.url} width={40} alt="color" />
              <span> {cartItem.title} </span>
              <button
                onClick={() => {
                  console.log("BEFORE",CART);
                  console.log(cartindex)
                  if(CART[cartindex].quantity===1)
                  {
                   let arr= CART.filter((item,idx)=> idx!==cartindex)
                   setCART(arr);
                    return;
                  }
                  

                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span> {cartItem.quantity} </span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
              <span> Rs. {cartItem.price * cartItem.quantity} </span>
              <button onClick={() => {
                  console.log("BEFORE",CART);
                  console.log(cartindex)
                  
                   let arr= CART.filter((item,idx)=> idx!==cartindex)
                   console.log(arr)
                   setCART(arr);
                    return;
                  
              }}
              
              
              style={{marginLeft:"40px",color:'white',background:'red', padding:"2px 5px"}}>X</button>
            </div>
          );
        })}
          
        <p>
          {" "}
          Total <span></span>
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </p>
        <div>
          <Link to="/STORE">
            <button>Close</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartList;
