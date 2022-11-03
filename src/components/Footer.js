import React from 'react';

import classes from './Footer.module.css';
import ImageY from './img/youtube.png'
import ImageS from './img/spotify.png'
import ImageF from './img/facebook.png'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>The Generics</span>
      <div>
        <a rel='noreferrer' href='https://www.youtube.com' target='_blank'>
          <img src={ImageY} alt='YouTube'/>
        </a>
        <a rel='noreferrer' href='https://www.spotify.com' target='_blank'>
          <img src={ImageS} alt='Spotify' />
        </a>
        <a rel='noreferrer' href='https://www.facebook.com' target='_blank'>
          <img src={ImageF} alt='Facebook' />
        </a>
      </div>
    </footer>
  );
};
export default Footer;