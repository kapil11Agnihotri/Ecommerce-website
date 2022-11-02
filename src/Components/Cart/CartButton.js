import React, { Fragment } from "react";
import './CartButton.css'

const CartButton=()=>{
    return <Fragment>
        <a href="#cart" className="cart-holder">
            cart
            <span className="cart-number">0</span>
        </a>
    </Fragment>
}

export default CartButton;