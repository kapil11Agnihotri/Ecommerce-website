import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  addToCart: () => {},
  TotalAmount: 0,
  product: [],
  totalAmountHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const crudCrudUrl =
    "https://crudcrud.com/api/5c87b0af40954fa68366c59ecdc11b9e";
  const initialToken = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [Products, setProducts] = useState([]);
  const [TotalAmount, setTotalAmount] = useState(0);
  const [loginEmail, setLoginEmail] = useState(userEmail);

  const userIsLoggedIn = !!token;

  const totalAmountHandler = () => {
    let total = 0;
    for (let i = 0; i < Products.length; i++) {
      total = Number(total) + Number(Products[i].totalPrice);
    }
    return setTotalAmount(total);
  };
  const fetchCartItemsHandeler = async () => {
    try {
      const response = await fetch(`${crudCrudUrl}/${loginEmail}`);
      if (response.ok === false) {
        throw new Error("not found");
      }
      const data = await response.json();
      await new Promise((resolve, reject) => {
        /// v,importent thing about Promise
        for (let i = 0; i < data.length; i++) {
          Products.push(data[i]);
        }
        resolve(Products);
      });

      totalAmountHandler();
      console.log(Products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartItemsHandeler();
  }, []);

  const addToCart = async (obj) => {
    console.log(obj);
    for (let i = 0; i < Products.length; i++) {
      if (obj.title === Products[i].title) {
        Products[i].quantity++;
        Products[i].totalPrice=Products[i].price*Products[i].quantity

        console.log(Products);

        totalAmountHandler(); // it is called toggleing
        fetch(`${crudCrudUrl}/${loginEmail}/${Products[i]._id}`, {
          method: "PUT",
          body: JSON.stringify({
            title: obj.title,
            price: Products[i].price,
            totalPrice:Products[i].totalPrice,
            image: obj.image,
            quantity: Products[i].quantity,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return;
      }
    }
    console.log(loginEmail);
    const response = await fetch(
      `${crudCrudUrl}/${loginEmail}`, // v are useing this url 4 places
      {
        method: "POST",
        body: JSON.stringify({
          title: obj.title,
          price: obj.price,
          image: obj.image,
          totalPrice:obj.price,
          quantity: obj.quantity,
          id: obj.id,
          email: loginEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    // setProducts((oldArray) => {
    //   return [...oldArray, data];   // bacause it is making clouser thing!!!
    // });
    Products.push(data); // try do update manually
    totalAmountHandler();

    // console.log(Products);
  };

  // const removeFromCart = async () => {
  //   const response = await fetch(`${ctx.url}/${ctx.email}/${props._id}`, {
  //     method: "DELETE",
  //   });

  //   for (let i = 0; i < ctx.itemsArray.length; i++) {
  //     if (ctx.itemsArray[i]._id === props._id) {
  //       const index = ctx.itemsArray.indexOf(ctx.itemsArray[i]);
  //       ctx.itemsArray.splice(index, 1);
  //     }
  //   }

  //   //ctx.fetchOnLoading();
  //   ctx.totalAmount();
  //   console.log(props._id);
  // };

  const loginHandler = (token, email) => {
    const newEmail = email.replace("@", "");
    const finelEmail = newEmail.replace(".", "");
    setToken(token);
    setLoginEmail(finelEmail);
    localStorage.setItem("token", token);
    localStorage.setItem("email", finelEmail);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    addToCart: addToCart,
    TotalAmount: TotalAmount,
    product: Products,
    totalAmountHandler: totalAmountHandler,
    email:loginEmail,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
