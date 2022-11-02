import React from "react";
import './Cart.css'
import Model from '../UI/Model'

const Cart = (props) => {
  const cartElements = <ul>{[
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ].map((item)=><li>title={item.title} price={item.price} quantity={item.quantity} </li>)}</ul>

  return (
    <Model onClick={props.onClose}>
        <div> 
        <div className="container">
        {cartElements}
        </div>
        <button onClick={props.onClose}>Remove</button>
        </div>
    </Model>
  )


};
export default Cart;
