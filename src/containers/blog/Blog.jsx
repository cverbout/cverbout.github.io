import React from 'react';
import './blog.css';
import chaseMtBach from '../../assets/chaseMtBach.jpg';
import france from '../../assets/france.JPG';
import blazers from '../../assets/blazers.jpg';
import icebar from '../../assets/icebar.jpg';
import { Icon } from '@iconify/react';


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
          <div className='mw__mam-content_infobox_bio'>
            
            <p>
              After graduating from the Univesity of Washington I spent my summer finishing my internship at KCM. I spent the next year acclimating further to the Computer Science program at Portland State. This January I will begin their Computer Sceince Master's Degree program.
            </p>
          </div>
          <ul className='mw__mam-content_infobox_list'>
            <h3>Hobbies</h3>
            <li>I enjoy a long uphill hike- some of my past favorites are Mt. St. Helens and Mt. Adams</li>
            <li >Huge Trail Blazers and Seahawks fan<b>#DameTime</b></li>
            <li>I DM for my friends- we are currently running the LMOP campaign</li>
            <h3>Recomendations</h3>
            <li><Icon className='mw__mam-content_icon' icon="bi:controller" width="48" height="48" />Play:&nbsp;<b>Bioshock Infinite/Shadow of the Collossus</b></li>
            <li><Icon className='mw__mam-content_icon' icon="akar-icons:book-open" width="48" height="48" />Read:&nbsp;<b>The Name of the Wind</b></li>
            <li><Icon className='mw__mam-content_icon' icon="eva:tv-outline" width="48" height="48" />Watch:&nbsp;<b>Hunter x Hunter</b></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
