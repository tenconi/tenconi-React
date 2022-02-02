import React from 'react';
import './NavBar.css'
import Logo from '../../img/thunder.svg'

const NavBar = () => {
  return <div className='nav'>
      <div className='container'>
        <h1><img src={Logo} alt="thunder sport" className='logo'/></h1>

        <ul>
            <li><a href="">Niños</a></li>
            <li><a href="">Mujeres</a></li>
            <li><a href="">Hombres</a></li>
            <li><a href="">Deportes</a></li>
            <li><a href="">Marcas</a></li>
            <li><a href="">Oulets</a></li>
        </ul>
      </div>

  </div>;
};

export default NavBar;
