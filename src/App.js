import React, { Fragment ,useState} from "react";
import Header from "./Components/Layout/Header";
import MusicList from "./Components/Layout/MusicList";
import Cart from "./Components/Cart/Cart";

const App=()=>{

const[cartIsShown,setCartIsShown]=useState(false)

const showCartHandler=()=>{
    setCartIsShown(true)
}
const hiddenCartHandler=()=>{
 setCartIsShown(false)
}

return <Fragment>
    {cartIsShown && <Cart onClose={hiddenCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <MusicList/>
</Fragment>
}
export default App;