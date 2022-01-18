import React from 'react';
import './NavBar.css';
//import Logo from '../../img/logo-thunder.png';


export const NavBar = () => {
    return (
        <nav>
            <h1>LOGO</h1>           

            <ul>
                <li><a href="">Vestimenta</a></li>
                <li><a href="">Calzado</a>
                    <ul>
                        <li><a href="">Crossfit</a></li>
                        <li><a href="">Running</a></li>
                        <li><a href="">Trekking</a></li>
                    </ul>
                </li>
                <li><a href="">Insumos</a></li>
                <li><a href="">x-treme</a></li>
            </ul>

            <ul className="acces">
                <li><a href="">login</a></li>
                <li><a href="">cart</a></li>
            </ul>
            
        </nav>
    )
}
