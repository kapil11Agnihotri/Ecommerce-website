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
        <Link to="/">HOME</Link>

        {isLoggedIn ? (
          <Link to="/Store"> STORE</Link>
        ) : (
          <Link to="/Auth"> STORE</Link>
        )}

        {isLoggedIn ? (
          <Link to="/About"> ABOUT</Link>
        ) : (
          <Link to="/Auth"> ABOUT</Link>
        )}
        <Link to="/Auth">
          {""}
          Login
        </Link>
        {isLoggedIn ? (
          <Link to="/Contact-Us"> Contact Us</Link>
        ) : (
          <Link to="/Auth"> Contact Us</Link>
        )}
        {isLoggedIn ? (
          <Link to="/cartList">
            CART
            <sup> {props.count} </sup>
          </Link>
        ) : (
          <Link to="/Auth">
            CART
            <sup> {props.count} </sup>
          </Link>
        )}
      </div>
      <div className="generics">The Generics</div>
    </div>
  );
}

export default Header;
