import { useState, useRef, useContext } from "react";

import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";
import Header from "../Header";
import Footer from "../Footer";

const AuthForm = () => {
  const history = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin,setIsLogin]=useState(false)

   const authCtx = useContext(AuthContext);
  // const isLogin=authCtx.isLoggedIn


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCm5L7G1RQwkRNv8SpcRkiunQDVORXBR48";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCm5L7G1RQwkRNv8SpcRkiunQDVORXBR48";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication-Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken,data.email);
        history("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Header/>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending Request....</p>}
            <button onClick={()=>{setIsLogin((pre)=>!pre)}} type="button" className={classes.toggle}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
      <Footer/>
    </>
  );
};

export default AuthForm;
