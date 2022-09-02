import React from 'react';
import './blog.css';
import chaseMtBach from '../../assets/chaseMtBach.jpg';
import france from '../../assets/france.JPG';
import blazers from '../../assets/blazers.jpg';
import icebar from '../../assets/icebar.jpg';


const Blog = () => {
  return (
    <div className='mw__mam' id='mam'>
      <div className='mw__mam-header'>
        <h1>More About Me</h1>
      </div>
      <div className='mw__mam-content'>
        <div className='mw__mam-content_imgbox'>
          <div className='mw__mam-content_imgbox_top'>
            <img src={chaseMtBach}/>
            <img src={icebar}/>
          </div>
          <div className='mw__mam-content_imgbox_bot'>
            <img src={france}/>
            <img src={blazers}/>
          </div>
        </div>
        <div className='mw__mam-content_infobox'>
          <ul>
            <li>I enjoy hiking, traveling, gaming</li>
            <li>The Trail Blazers and Seahawks are my teams</li>
            <li>I DM for my friends we are currently running the LMOP campaign</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
