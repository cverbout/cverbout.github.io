import React from 'react';
import "./whoChaseV.css";
import chase_sitting from '../../assets/chase_sitting_cropped.png';
import chase_cropped from '../../assets/chase_cropped.png';
import chase_cat from '../../assets/chase_cat.png';
import chase from '../../assets/chase.JPG';

const WhoChaseV = () => {
  return (
    <div className='mw__wcv' id='wcv'>
      <div className='mw__wcv-content'>
        <div className='mw__wcv-img_container'>
          <img src={chase_cat}/>
        </div>
        <div className='mw__wcv-text'>
          <div className='mw__wcv-text_border'>
            <div className='mw__wcv-title'>
              <h1 className='gradient__text2'>Who is Chase V?</h1>
            </div>
            <div className='mw__wcv-bio_container'>
              <p>
                I am largely focused on becoming a software engineer and captivated 
                by the potential future applications of AR/VR. I am motivated by my passion to be a part of an incredible process that is what I 
                consider to be, the creation of new worlds for the benefit, enjoyment, and exploration of users. I am largely focused on becoming a software engineer and captivated 
                by the potential future applications of AR/VR. I am motivate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoChaseV