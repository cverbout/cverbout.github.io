import React from 'react';
import './cta.css';
import resume from '../../assets/resume.pdf';

const CTA = () => {
  return (
    <div className='mw__cta' id='res/cm'>
      <div className='mw__cta-resume'>
        <a href={resume} target="_blank">
          Resume
        </a>
      </div>
      <div className='mw__cta-cm'>
        <a href="mailto: cverbout@pdx.edu">
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default CTA