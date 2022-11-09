import React, { useContext} from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import AuthContext from "../store/auth-context";

export const Store = () => {
  const cartCtx = useContext(AuthContext);

  const addToCart = (data) => {
    const object = {
      id:data.key,
      title: data.title,
      quantity: 1,
      price: data.price,
      image: data.url,
      startingPrice:Number(data.price)
    };
    cartCtx.addToCart(object);

    /*let obj=isPresent(cart,data);
      if(obj.present){
        cart[obj.index].quantity+=1;
        setCart(cart);
      }

       else{
          setCart((prev)=>{
            return  [...prev, { ...data, quantity: 1 }]
          });
        }
        
      };*/
  };

  const product=[
    {
      key: 1,
      title: "Colors",
      price: 100,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      key: 2,
      title: "Black and white Colors",
      price: 50,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      key: 3,
      title: "Yellow and Black Colors",
      price: 70,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      key: 4,
      title: "Blue Color",
      price: 100,
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <Header />

      <ProductList product={product} addToCart={addToCart} />

      <Footer />
    </>
  );
};
