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
          <li>home</li>
          <li>calzado</li>
          <li>indumentaria</li>
          <li>marcas</li>
          <li>ofertas</li>
        </ul>
      </div>

      <div className='footCopy'>
        <p>Trabajo realizado para CoderHouse - Comisión 24915 - Autor: Daniel Tenconi | <a href="https://www.tenco.com.ar/" target="_blank">tenco</a> </p>
      </div>
    </div>
  )
}

export default Footer