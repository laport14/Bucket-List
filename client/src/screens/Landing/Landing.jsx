import React from 'react';
import Layout from '../../components/shared/Layout/Layout'
import './Landing.css'

function Landing(props) {
  return (
    <Layout>
      <div className='content-container'>
        <div className='hero-container'>
        <p className='hero-text'>Achieve your dreams before the call of the grave</p>
        <button className='global-button'>Join Today</button>
        </div>
      </div>
    </Layout>
  );
}

export default Landing;