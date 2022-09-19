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
                Hi! My name is Chase Verbout. Currently, I am a graduate student at Portland State University pursuing a Master's Degree in Computer Science. I am also a former Husky, graduating from the University of Washington in 2021 with a degree in Geography: Data Science.
                <br/>
                <br/>
                I am largely focused on becoming a well-rounded software engineer and captivated by the potential applications of AR/VR. My motivations derive from my passion to create new realities for the benefit, enjoyment, and exploration of others. 
                <br/>
                <br/>
                *This breathtaking view behind me is from the "peak" of Mt. St Helens in WA!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoChaseV