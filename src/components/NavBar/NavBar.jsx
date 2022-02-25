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
              <li className="linkNav">Productos
              <ul>
                <li className="linkNav"><Link to={`/productos/${'calzado'}`} className="linkNav">Calzado</Link></li>
                <li className="linkNav"><Link to={`/productos/${'camiseta'}`} className="linkNav">Camisetas</Link></li>
                <li className="linkNav"><Link to={`/productos/${'balon'}`} className="linkNav">Balones</Link></li>
              </ul>
              
              </li>
              <li><Link to="/marcas" className="linkNav">Marcas</Link></li>
              <li><Link to="/ofertas" className="linkNav">Ofertas</Link></li>

              {/* <li className="linkNav">
                Status
                <ul>
                  <li><Link to={`/status/${'Alive'}`}  className="linkNav">Alive</Link></li>
                  <li><Link to={`/status/${'Deceased'}`}  className="linkNav">Deceased</Link></li>
                  <li><Link to={`/status/${'Presumed dead'}`} className="linkNav">Presumed dead</Link></li>
                </ul>
              </li> */}

          </ul>
        </div>
        
        <ItemList name="Daniel Tenconi"/>


      </div>

  </div>;
};

export default NavBar;
