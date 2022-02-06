import React from 'react';
import './NavBar.css'
import Logo from '../../img/thunder.svg'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return <div className='nav'>
      <div className='container'>
      
        <h1><Link to="/"><img src={Logo} alt="thunder sport" className='logo'/></Link></h1>        

        <ul>
            <li>Niños</li>
            <li>Mujeres</li>
            <li>Hombres</li>
            <li>Deportes</li>
            <li>Marcas</li>
            <li>Oulets</li>
        </ul>
      </div>

  </div>;
};

export default NavBar;
