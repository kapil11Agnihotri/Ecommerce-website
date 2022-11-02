import React, { Fragment } from "react";
import './MusicList.css'
import Image1 from "./img/Album 1.png"
import Image2 from "./img/Album 2.png"
import Image3 from "./img/Album 3.png"
import Image4 from "./img/Album 4.png"



const MusicList=props=>{
  return <Fragment>
    <section id='music' className='container'>
        <h2 className="section-h2">Music</h2>
        <div id="music-content" className='music-content'>
            <div id="album 1" className="music-content-div">
                <h3 className="music-content-div-h3">Album 1</h3>
                <div className="image-container">
                    <img className="prod-images" src={Image1} alt='demo'/>
                </div>
                <div className="prod-details">
                   <span>
                    $
                    <span>12.99</span>
                   </span>
                   <button className="shop-item-button" type='button'>Add To Cart</button>
                </div>
            </div>
            
            <div id="album 2" className="music-content-div">
                <h3 className="music-content-div-h3">Album 2</h3>
                <div className="image-container">
                    <img className="prod-images" src={Image2} alt='demo'/>
                </div>
                <div className="prod-details">
                   <span>
                    $
                    <span>14.99</span>
                   </span>
                   <button className="shop-item-button" type='button'>Add To Cart</button>
                </div>
            </div>
           
            <div id="album 3" className="music-content-div">
                <h3 className="music-content-div-h3">Album 3</h3>
                <div className="image-container">
                    <img className="prod-images" src={Image3} alt='demo'/>
                </div>
                <div className="prod-details">
                   <span>
                    $
                    <span>9.99</span>
                   </span>
                   <button className="shop-item-button" type='button'>Add To Cart</button>
                </div>
            </div>
            
            <div id="album 4" className="music-content-div">
                <h3 className="music-content-div-h3">Album 4</h3>
                <div className="image-container">
                    <img className="prod-images" src={Image4} alt='demo'/>
                </div>
                <div className="prod-details">
                   <span>
                    $
                    <span>19.99</span>
                   </span>
                   <button className="shop-item-button" type='button'>Add To Cart</button>
                </div>
            </div>
        </div>
    </section>
  </Fragment>
}

export default MusicList;