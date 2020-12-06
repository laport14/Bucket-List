import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'
import Logo from '../../../assets/logo3.png'

function Nav(props) {
  const { currentUser, handleLogout } = props

  function titleCase(str) {
    currentUser.username = str.toLowerCase().split(' ').map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join(' ')
    return str
  }

  return (
    <div className='nav-bar'>
      <div className='nav-contents'>
        <Link to='/'>
        <img className='nav-logo' src={Logo} alt='webpage logo'/>
        </Link>
        <div className='nav-button-div'>
          {currentUser ?
            <>
              <p className='welcome-user'> Welcome {titleCase(currentUser.username)}</p>
              <Link to='/activities'>
                <button className='nav-activity-button'>All Activities</button>
              </Link>
              <button onClick={handleLogout} className='nav-button'>Logout</button>
            </>
            : <>
              <Link to='/login'>
              <button className='nav-login-button'>Login</button>
              </Link>
              <Link to='/register'>
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