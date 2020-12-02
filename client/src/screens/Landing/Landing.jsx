import React from 'react';
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing(props) {
  return (
      <div className='content-container'>
        <div className='hero-container'>
          <p className='hero-text'>Achieve your dreams before the call of the grave</p>
          <Link to='/Register'>
          <button className='global-button'>Join Today</button>
          </Link>
        </div>
      </div>
  );
}

export default Landing;