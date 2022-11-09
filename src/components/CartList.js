import { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";
import AuthContext from "../store/auth-context";


function CartList(props) {
  console.log(props)

 const ctx = useContext(AuthContext);
  
  console.log(ctx.product)
  // useEffect(() => {
  //  setCART(props.cart);
  //}, [props.cart]);

  console.log("re-redeeed");
  return (
    <>
    <Header/>
    <h1 style={{textAlign:'center',padding:'10px'}}>Shopping Cart</h1>
    {ctx.product.map((item)=>{
      return <Cart id={item._id} key={item.key} title={item.title} image={item.image} price={item.price} quantity={item.quantity}/>
    })}
    <br/>
    <div><h2>Total Amaount={ctx.TotalAmount}</h2></div>
    <br/>
      <Link to="/STORE">
        <button style={{height:'40px',width:'60px',color:'red'}}>CLOSE</button>
      </Link>
      
    </>
  );
}

export default CartList;
