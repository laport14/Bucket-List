import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'
import Logo from '../../../assets/logo3.png'

function Nav(props) {
  return (
    <div className='nav-bar'>
      <div className='nav-contents'>
        <Link to='/'>
        <img className='nav-logo' src={Logo} alt='webpage logo'/>
        </Link>
        <div className='nav-button-div'>
          <Link to='/Login' style={{margin: '2%'}}>
          <button className='nav-button'>Login</button>
          </Link>
          <Link to='/Register' style={{margin: '2%'}}>
            <button className='nav-button'>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;