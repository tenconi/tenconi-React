import React, {useState, useContext} from 'react';
import { CartContext } from '../context/cartContext';
import BuyConfirm from '../components/BuyConfirm/BuyConfirm.jsx'
import './Styles.css'
// imagenes tarjeta
import Visa from '../img/visa.svg';
import Master from '../img/mastercard.svg';
import Amex from '../img/amex.svg';
import Discover from '../img/discover.svg';
// firebase
import {db} from './../FireBase/FireConfig.js'
import { collection, addDoc } from "firebase/firestore"; 

const initialState = {
  form__tc: '',
  form__nya:'',
  form__exp:'',
  form__seg:'',
  form__dni:'',
}

const Confirm = () => {
  const{cart, setCart, useCart}= useContext(CartContext);

  const [values, setValues] = useState(initialState);
  const onChange = (e) =>{
    const {value, name} = e.target;
    setValues({...values, [name]: value})
  }
  const onSubmit = async (e) =>{
    e.preventDefault();
    const docRef = await addDoc(collection(db, "compra"), {
      values
    });
    console.log("Document written with ID: ", docRef.id);
    setCompraID(docRef.id)
    setCart([])
    setValues(initialState);    
  }

  //estado ID
  const [compraID, setCompraID] = useState('');

  //Monto total
  let montoF = 0;
  cart.forEach(e => montoF += (e.price * e.cantidad));  

  return (
    <div className='altura'>
      <div className='contenedor ticket'>
        <div>
        <h3 className='ticketAsk'>Confirma compra por: <span className='itemCard__detail--price'>$ {montoF}</span></h3>

        <ul className='ticketDetail'>
          {cart.map((x)=>{return(
            <li key={x.id}>
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

        <form action="" className='form' onSubmit={onSubmit}>
          <input type="number" name="form__tc" placeholder='número tarjeta' value={values.form__tc} onChange={onChange}/>

          <input type="text" name="form__nya" placeholder='nombre y apellido' value={values.form__nya} onChange={onChange}/>

          <div className='formDouble'>
            <input type="month" name="form__exp" placeholder='Fecha de Expiracion' pattern='[0-9]{4}-[0-9]{2}'value={values.form__exp} onChange={onChange}/>

            <input type="number" name="form__seg" placeholder='Codigo de Seguridad' value={values.form__seg} onChange={onChange}/>
          </div>

          <input type="number" name="form__dni" placeholder='DNI Titular'value={values.form__dni} onChange={onChange}/>

          <button type="submit" className='btn__confirm'>Confirmar compra <i className='icon-energy'></i></button>

          {compraID && <BuyConfirm compraID={compraID}/>}
        </form>
      </div>

      </div>
    </div>
  )
}
export default Confirm;