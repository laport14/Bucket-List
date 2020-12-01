import React from 'react';
import './Nav.css'
import Logo from '../../../assets/logo3.png'

function Nav(props) {
  return (
    <div className='nav-bar'>
      <div className='nav-contents'>
        <img className='nav-logo' src={Logo} alt='webpage logo'/>
        <div className='nav-button-div'>
          <button className='nav-button'>Login</button>
          <button className='nav-button'>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;