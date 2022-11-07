import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

function Header(props) {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      <div className="flex shopping-card">
        <Link to="/">
          <div>HOME</div>
        </Link>

        {isLoggedIn ? (
          <Link to="/Store">
            {" "}
            <div onClick={() => props.handleShow(false)}>STORE</div>
          </Link>
        ) : (
          <Link to="/Auth">
            {" "}
            <div onClick={() => props.handleShow(false)}>STORE</div>
          </Link>
        )}

        {isLoggedIn ? (
          <Link to="/About">
            {" "}
            <div>ABOUT</div>
          </Link>
        ) : (
          <Link to="/Auth">
            {" "}
            <div>ABOUT</div>
          </Link>
        )}
        <Link to="/Auth">
          {""}
          <div>Login</div>
        </Link>
        {isLoggedIn ? (
          <Link to="/Contact-Us">
            {" "}
            <div>Contact Us</div>
          </Link>
        ) : (
          <Link to="/Auth">
            {" "}
            <div>Contact Us</div>
          </Link>
        )}
        {isLoggedIn ? (
          <Link to="/cartList">
            {" "}
            <div onClick={() => props.handleShow(true)}>
              {" "}
              CART
              <sup> {props.count} </sup>
            </div>
          </Link>
        ) : (
          <Link to="/Auth">
            {" "}
            <div onClick={() => props.handleShow(true)}>
              {" "}
              CART
              <sup> {props.count} </sup>
            </div>
          </Link>
        )}
      </div>
      <div className="generics">The Generics</div>
    </div>
  );
}

export default Header;
