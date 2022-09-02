import React from 'react';
import "./header.css";
import chase_sitting from '../../assets/chase_sitting_cropped.png';
import chase_cropped from '../../assets/chase_cropped.png';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <div className='mw__header'>
      <div className='mw__header-text-content'>
        <h1 className='gradient__text'>Hey I'm Chase V</h1>
        <h3 className='gradient__text'>Software Engineer</h3>
        <p>V like in Versatile, V the first letter of Voracious, V as in the smartest dinosaur Velociraptor, but mostly V, for Verbout </p>
        <div className='mw__header-message_container'> 
          <input id='header-input' type={'text'} placeholder={"Send something out into the void"}></input>
          <button onClick={ClearFields}>Blast Off</button>
        </div>
      </div> 
      {/* <div className='mw__header-image_container'>
          <img className='mw__header-image' src={chase_cropped} />
        </div> */}
    </div>
  )
}

function ClearFields() {

  document.getElementsById("header-input").value = "";
  
  
}

export default Header