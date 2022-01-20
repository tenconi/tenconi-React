import React from 'react';
import './Header.css'
import Logo from '../../img/logo-thunder-w.png'


const Header = () => {
  return <div className='jeder'>
    <div className='container'>
      <h1 className='logo'><img src={Logo} alt="Thunder" /></h1>
    </div>
  </div>;
};

export default Header;
