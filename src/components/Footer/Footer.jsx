import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import brandFoot from '../../img/thunder-light.svg'

const Footer = () => {
  return (
    <div className='foot'>
      <div className='container'>
        <Link to="/">
          <img src={brandFoot} alt="brand" className='brandFoot'/>
        </Link>

        <ul className='foot__tree'>
          <li><Link to="../" className='foot_link'>home</Link></li>
          <li><Link to={`/productos/${'calzado'}`} className='foot_link'>calzado</Link></li>
          <li><Link to={`/productos/${'camiseta'}`} className='foot_link'>indumentaria</Link></li>
          <li><Link to={`/productos/${'balon'}`} className='foot_link'>balones</Link></li>
          <li><Link to="/ofertas" className='foot_link'>ofertas</Link></li>
          <li><Link to="/userCart" className='foot_link'>cart</Link></li>
        </ul>
      </div>

      <div className='footCopy'>
        <p>Trabajo realizado para CoderHouse - Comisión 24915 - Autor: Daniel Tenconi</p>
      </div>
    </div>
  )
}

export default Footer