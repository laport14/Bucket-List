import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function Layout(props) {
  return (
    <div className='layout'>
      <Nav
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;