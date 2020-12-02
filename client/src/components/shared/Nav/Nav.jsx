import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'
import Logo from '../../../assets/logo3.png'

function Nav(props) {
  const { currentUser, handleLogout } = props
  
  return (
    <div className='nav-bar'>
      <div className='nav-contents'>
        <Link to='/'>
        <img className='nav-logo' src={Logo} alt='webpage logo'/>
        </Link>
        <div className='nav-button-div'>
          {currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout} className='nav-button'>Logout</button>
            </>
            : <>
              <Link to='/Login' style={{margin: '2%'}}>
              <button className='nav-button'>Login</button>
              </Link>
              <Link to='/Register' style={{margin: '2%'}}>
                <button className='nav-button'>Register</button>
              </Link>
              </>
          }
        </div>
      </div>
    </div>
  );
}

export default Nav;