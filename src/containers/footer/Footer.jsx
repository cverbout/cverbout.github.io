import React from 'react';
import "./footer.css";
import logoA from '../../assets/logoA.png';

const Menu = () => (
  <React.Fragment>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wcv'>Who is Chase V?</a></p>
    <p><a href='#prj'>Projects</a></p>
    <p><a href='#qual'>Qualifications</a></p>
    <p><a href='#res/cm'>Resume</a></p>
    <p><a href='#res/cm'>Contact Me</a></p>
    <p><a href='#mam'>More about me</a></p>
  </React.Fragment>
)

const Footer = () => {
  return (
    <div className='mw__footer'>
      <div className='mw__footer-content'>
        <div className='mw__footer-name'>
          <img src={logoA} alt="logo"/>
          <h1>Chase Verbout</h1>
        </div>
        <div className='mw__footer-copyright'>
          <h3>Copyright © 2022</h3>
        </div>
        <div className='mw__footer-links'>          
          <ul>
            <Menu></Menu>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer