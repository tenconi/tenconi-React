import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';
//import Cart from './Cart';
import './Styles.css'
// imagenes tarjeta
import Visa from '../img/visa.svg';
import Master from '../img/mastercard.svg';
import Amex from '../img/amex.svg';
import Discover from '../img/discover.svg';

const Confirm = () => {
  const{cart, useCart}= useContext(CartContext);

  let montoF = 0;
  cart.forEach(e => montoF += (e.price * e.cantidad));

  //console.log(montoF)


  return (
    <div className='altura'>
      <div className='contenedor ticket'>

        <div>
        <h3 className='ticketAsk'>Confirma compra por: <span className='itemCard__detail--price'>$ {montoF}</span></h3>

        <ul className='ticketDetail'>
          {cart.map((x)=>{return(
            <li>
              <p>{x.prod}</p>
              <p>{x.cantidad} x {x.price}</p>
            </li>
          )})}
        </ul>
      </div>    

      <div>
        <div className='portaImg__card'>
          <img src={Visa} alt="visa" />
          <img src={Master} alt="mastercard" />
          <img src={Amex} alt="american express" />
          <img src={Discover} alt="discover" />

        </div>

        <form action="" className='form'>
          <input type="number" placeholder='número tarjeta'/>
          <input type="text" placeholder='nombre y apellido' />
          <div className='formDouble'>
            <input type="month" placeholder='Fecha de Expiracion' defaultValue="2022-07" pattern='[0-9]{4}-[0-9]{2}'/>
            <input type="number" placeholder='Codigo de Seguridad'/>
          </div>
          <input type="number" placeholder='DNI Titular'/>
          <button type="submit" className='btn__confirm'>Confirmar compra</button>
        </form>
      </div>

      </div>
    </div>
  )
}
export default Confirm;