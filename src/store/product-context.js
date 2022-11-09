// const CartProvider = (props) => {
//     const crudCrudUrl =
//       "https://crudcrud.com/api/15f6b49bb9414208bde8d8203bc1fa40";
//     const initialToken = localStorage.getItem("E-CommerceToken");
//     const userEmail = localStorage.getItem("email");
//     const [Products, setProducts] = useState([]);
//     const [TotalAmount, setTotalAmount] = useState(0);
//     const [loginEmail, setLoginEmail] = useState(userEmail);
  
//     const [token, setToken] = useState(initialToken);
  
//     const isLogin = !!token;
//     console.log(isLogin);
  
//     const totalAmountHandler = () => {
//       let total = 0;
//       for (let i = 0; i < Products.length; i++) {
//         total = total + Products[i].price;
//       }
//       return setTotalAmount(total);
//     };
  
//     const fetchCartItemsHandeler = async () => {
//       try {
//         const response = await fetch(`${crudCrudUrl}/${loginEmail}`);
//         if (response.ok === false) {
//           throw new Error("not found");
//         }
//         const data = await response.json();
//         await new Promise((resolve, reject) => {
//           /// v,importent thing about Promise
//           for (let i = 0; i < data.length; i++) {
//             Products.push(data[i]);
//           }
//           resolve(Products);
//         });
  
//         totalAmountHandler();
//         console.log(Products);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     useEffect(() => {
//       fetchCartItemsHandeler();
//     }, []);
  
//     const AddHandeler = async (obj) => {
//       for (let i = 0; i < Products.length; i++) {
//         if (Products[i].id === obj.id) {
//           Products[i].quantity++;
//           Products[i].price = Products[i].price + obj.price;
//           console.log(Products);
  
//           totalAmountHandler(); // it is called toggleing
//           fetch(`${crudCrudUrl}/${loginEmail}/${Products[i]._id}`, {
//             method: "PUT",
//             body: JSON.stringify({
//               title: obj.title,
//               price: Products[i].price,
//               imageUrl: obj.imageUrl,
//               quantity: Products[i].quantity,
//               id: obj.id,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           return;
//         }
//       }
  
//       const response = await fetch(
//         `${crudCrudUrl}/${loginEmail}`, // v are useing this url 4 places
//         {
//           method: "POST",
//           body: JSON.stringify({
//             title: obj.title,
//             price: obj.price,
//             imageUrl: obj.imageUrl,
//             quantity: obj.quantity,
//             id: obj.id,
//             email: loginEmail,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       console.log(data);
  
//       // setProducts((oldArray) => {
//       //   return [...oldArray, data];   // bacause it is making clouser thing!!!
//       // });
//       Products.push(data); // try do update manually
//       totalAmountHandler();
//       // console.log(Products);
//     };
  
//     const contactHandler = async (NewUserContect) => {
//       const response = await fetch(
//         "https://react-http-f431c-default-rtdb.firebaseio.com/contact.json",
//         {
//           method: "POST",
//           body: JSON.stringify(NewUserContect),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response);
//     };
  
//     const loginHandler = (token, email) => {
//       setToken(token);
//       const newEmail = email.replace("@", "");
//       const finelEmail = newEmail.replace(".", "");
//       console.log(finelEmail);
//       localStorage.setItem("email", finelEmail);
//       setLoginEmail(finelEmail);
  
//       localStorage.setItem("E-CommerceToken", token);
//     };
  
//     const AllProps = {
//       itemsArray: Products,
//       Add: AddHandeler,
//       Contact: contactHandler,
//       token: token,
//       login: loginHandler,
//       userIsLogin: isLogin,
//       total: TotalAmount,
//       totalAmount: totalAmountHandler,
//       email: loginEmail,
//       url: crudCrudUrl,
//       // fetchOnLoading: fetchCartItemsHandeler,
//     };
//     console.log(AllProps);
  
//     return (
//       <CartContext.Provider value={AllProps}>
//         {props.children}
//       </CartContext.Provider>
//     );
//   };
  
//   export default CartProvider;