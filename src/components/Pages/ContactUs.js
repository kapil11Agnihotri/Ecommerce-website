import React,{useRef} from "react";
import Footer from "../Footer";
import Header from "../Header";

import classes from './ContactUs.module.css'

const ContactUs = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const Details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };

    props.onAddDetails(Details);
  }

  return (
    <>
      <Header />
      <div className={classes.box}><h1>Contact Us</h1></div>
      <div className={classes.box}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" id="phoneNumber" ref={phoneNumberRef} />
        </div>
        <button>Submit Details</button>
      </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
