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
          {/* <div className='mw__mam-content_infobox_bio'>
            <p>
              I have spent the past year taking courses within the Computer Science program at Portland State and working on personal projects. This January I will begin PSU's Computer Sceince Master's Degree program.
            </p>
          </div> */}
          <ul className='mw__mam-content_infobox_list'>
            <h3>Hobbies</h3>

            <li><Icon className='mw__mam-content_icon' icon="la:hiking" width="48" height="48" />Big hiker- really enjoyed Mt. St. Helens and Mt. Adams</li>
            <li><Icon className='mw__mam-content_icon' icon="carbon:basketball" width="48" height="48" />Lifelong Trail Blazers fan and a Seahawks fan #DameTime</li>
            <li><Icon className='mw__mam-content_icon' icon="la:dice-d20" width="48" height="48" />I DM for my friends- currently running the LMOP campaign</li>
            <h3>Recomendations</h3>
            <li><Icon className='mw__mam-content_icon' icon="bi:controller" width="48" height="48" />Play:&nbsp;<b>Bioshock Infinite</b></li>
            <li><Icon className='mw__mam-content_icon' icon="akar-icons:book-open" width="48" height="48" />Read:&nbsp;<b>The Name of the Wind</b></li>
            <li><Icon className='mw__mam-content_icon' icon="eva:tv-outline" width="48" height="48" />Watch:&nbsp;<b>Hunter x Hunter</b></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Blog
