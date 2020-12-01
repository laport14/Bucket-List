import React from 'react';
import Layout from '../../components/shared/Layout/Layout'

function Landing(props) {
  return (
    <Layout>
      <div className='content-container'>
        <p>Achieve your dreams before the call of the grave</p>
        <button className='global-button'>Join Today</button>
      </div>
    </Layout>
  );
}

export default Landing;