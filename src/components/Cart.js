import React, { useContext } from "react";
import AuthContext from "../store/auth-context";


import './Cart.css'
const Cart = (props) => {
  const ctx = useContext(AuthContext);

  const addToCart = () => {
    const object = {
      title:props.title,
      price: props.price,
      startingPrice:Number(props.price),
      image: props.image,
     //quantity:props.quantity,

    };
    //ctx.totalAmountHandler()
    //console.log(ctx.totalAmountHandler())
    ctx.addToCart(object);
  };
 

  const removeFromCart = async () => {
    const response = await fetch(`https://crudcrud.com/api/2ce0a8dbf8e44814996eec57231c21a8/${ctx.email}/${props.id}`, {
      method: "DELETE",
    });

    for (let i = 0; i < ctx.product.length; i++) {
      if (ctx.product[i]._id === props.id) {
        const index = ctx.product.indexOf(ctx.product[i]);
        ctx.product.splice(index, 1);
      }
    }

    //ctx.fetchOnLoading();
    ctx.totalAmountHandler();
    console.log(props.id);
  };

  return (
    <div className="cart">
      <img src={props.image} alt="" className="image"/>
      <h3 className="title">{props.title}</h3>
      <button onClick={removeFromCart} className="button" style={{color:'red'}}>-</button>
      <h4 className="quantity">{props.quantity}</h4>
      <button onClick={addToCart} className="button" style={{color:'green'}}>+</button>
      <h4 className="price">{props.price}</h4>
    </div>
  );
};

export default Cart;