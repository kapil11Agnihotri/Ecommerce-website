import { useEffect, useState } from "react";
import "../App.css";
import {Link} from 'react-router-dom'
import classes from './Cart.module.css'
import { Home } from "./Store";
function CartList(props) {


  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(props.cart);
  }, [props.cart]);

  return (
    <div className={classes.cart}>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div>
            <img src={cartItem.url} width={40} alt="color" />
            <span> {cartItem.title} </span>
            <button
              onClick={() => {
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
      <Link to="/"> <button className="button" onClick={() => props.handleShow(false)}>Close</button></Link>
        
      </div>
    </div>
  );
}

export default CartList;
