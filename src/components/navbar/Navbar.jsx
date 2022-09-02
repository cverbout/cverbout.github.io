import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logoA from '../../assets/logoA.png';
import './navbar.css';

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
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='mw__navbar'>
      <div className='mw__navbar-links'>
        <div className='mw__navbar-links_logo'>
          <img src={logoA} alt="logo"/>
        </div>
        <div className='mw__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='mw__navbar-menu'>
        {toggleMenu
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
        <div className='mw__navbar-menu_container'>
          <div className='mw__navbar-menu_container-links'>
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar