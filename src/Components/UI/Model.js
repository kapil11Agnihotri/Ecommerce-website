import React from "react";
import classes from './Model.module.css'
import ReactDOM  from "react-dom";

const ModelOverlay =(props)=>{
    return <div className={classes.model}>
        <div>{props.children}</div>
    </div>
}
const Model=(props)=>{
 return ReactDOM.createPortal(<ModelOverlay onClick={props.onClick}>{props.children}</ModelOverlay>,document.getElementById('overlay'))
}
export default Model;