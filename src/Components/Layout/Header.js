import React,{Fragment} from "react";
import classes from './Header.module.css'
import CartButton from "../Cart/CartButton";

const Header = (props) => {
    return (
      <Fragment>
        <header className={classes.header} >
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
               <li onClick={props.onShowCart}><CartButton/></li>
            </ul>
          <h1>The Generics</h1>
        </header>
      </Fragment>
    )
  };
  
  export default Header;