import React,{useState} from 'react'
import Header from './Header';
import ProductList from './ProductList';


import Footer from "./Footer";
export const Store = (props) => {
    let {setCart,cart}=props;
    console.log(props);
    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }]);
      };

    const [product, setProduct] = useState([
        {
          title: "Colors",
          price: 100,
          url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
          title: "Black and white Colors",
          price: 50,
          url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
          title: "Yellow and Black Colors",
          price: 70,
          url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
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
