import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from "../../assets/logo.svg";

// BEM Block ELement Modifier
const Navbar = () => {
  return (
    <div className="gtp3__navbar"> 
      <div className='gtp3__navbar-links'>
        <div className='gtp3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar