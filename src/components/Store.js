import React,{useState} from 'react'
import Header from './Header';
import ProductList from './ProductList';


import Footer from "./Footer";
export const Store = (props) => {
    let {setCart,cart}=props;
  
    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }]);
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
