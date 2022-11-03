import "../App.css";


import {Link} from 'react-router-dom'
function Header(props) {
  return (
    <div>
      <div className="flex shopping-card">
        <div>HOME</div>
      <Link to="/Store">  <div onClick={() => props.handleShow(false)}>STORE</div></Link>
        
       
        <Link to="/About"> <div>ABOUT</div></Link>
        <Link to="/cartList">  <div onClick={() => props.handleShow(true)}>
          {" "}
          CART
          <sup> {props.count} </sup>
        </div></Link>
       
      </div>
      <div className="generics">The Generics</div>
    </div>
  );
}

export default Header;
