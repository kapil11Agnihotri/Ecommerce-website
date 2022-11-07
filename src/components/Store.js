import React,{useState} from 'react'
import Header from './Header';
import ProductList from './ProductList';


import Footer from "./Footer";
function isPresent(cart,data){
  let productId=data.key;
  for(let i=0;i<cart.length;i++){
    if(cart[i].key===productId)
    return {
      present:true,
      kahPeMila:i,
    }
  }
  return {
    present:false,
  };
}
export const Store = (props) => {
    let {setCart,cart}=props;
  
    const addToCart = (data) => {
      console.log("data",data);
      console.log(("cart",cart))

      let obj=isPresent(cart,data);
      if(obj.present){
        cart[obj.kahPeMila].quantity+=1;
        setCart(cart);
      }

       else{
          setCart([...cart, { ...data, quantity: 1 }]);
        }
        
      };

    const [product, setProduct] = useState([
        {
          key:1,
          title: "Colors",
          price: 100,
          url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
          key:2,
          title: "Black and white Colors",
          price: 50,
          url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
          key:3,
          title: "Yellow and Black Colors",
          price: 70,
          url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
          key:4,
          title: "Blue Color",
          price: 100,
          url: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ]);



  return (
    <>
    
    <Header  cart={props.count} handleShow={props.handleShow}/>
    
    <ProductList  product={product} addToCart={addToCart}/>
    
    <Footer/>
    </>
  )
}
