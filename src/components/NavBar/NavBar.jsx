import React from 'react';
import './NavBar.css'
import Logo from '../../img/thunder.svg'
import { ItemList } from './ItemListContainer/ItemList.jsx';
import {Link} from 'react-router-dom'

const NavBar = ({status}) => {
  return <div className='nav'>
      <div className='container'>
      
        <h1><Link to="/"><img src={Logo} alt="thunder sport" className='logo'/></Link></h1> 

        <div className="container__mid">
          <div className="searcher-group">
            <i className="icon-magnifier"></i>
            <input type="search" placeholder="buscar" className='searcher'/>
          </div>

          <ul className='Navigation'>
              <li><Link to="/calzado" className="linkNav">Calzado</Link></li>
              <li><Link to="/indumentaria" className="linkNav">Indumentaria</Link></li>
              <li><Link to="/marcas" className="linkNav">Marcas</Link></li>
              <li><Link to="/outlet" className="linkNav">Outlet</Link></li>
              <li className="linkNav">
                Status
                <ul>
                  <li><Link to={`/status/Alive`}  className="linkNav">Vivo</Link></li>
                  <li><Link to={`/status/Deceased`}  className="linkNav">Muerto</Link></li>
                  <li><Link to={`/status/Unknow`} className="linkNav">Desconocido</Link></li>
                </ul>
              </li>
          </ul>
        </div>
        
        <ItemList name="Daniel Tenconi"/>


      </div>

  </div>;
};

export default NavBar;
