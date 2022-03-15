import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';
import EmptyCart from '../components/EmptyCart/EmptyCart.jsx';
import './Styles.css'
import { Link } from 'react-router-dom';

const Cart =(initial)=> {
const{cart, useCart, removeItem, clearCart}= useContext(CartContext)

/* suma total */
let totalTotal = 0;
cart.forEach(e => totalTotal += (e.price * e.cantidad));

  return <div className="altura mar__bot">
      <div className='contenedor'> 

        {cart.length === 0 ? <EmptyCart/> : <div>
            {cart.map((PR, initial)=>{            
              return(
                <div key={cart.id}>
                  <div className="cartProduct">                
                    <img src={PR.img} className="cartProduct__img" alt={PR.prod}/>

                    <div className="cartProduct__table" >
                      <div className='cartProduct__table--gral'>
                        <div><h2 className='itemCard__detail--prod-open'>{PR.prod}</h2></div>
                        <div className="itemCard__detail--extra">x 1</div>
                        <div><p className="itemCard__detail--extra">$ {PR.price}</p></div>
                      </div>
                      
                      <div className='cartProduct__table--gral'>
                        <div className="itemCard__detail--extra">Total:</div> 
                        <div className="itemCard__detail--extra">x {PR.cantidad}</div>
                        <div><h4 className="itemCard__detail--price">$  {PR.price * PR.cantidad}</h4></div>
                      </div>                  
                    </div>                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='cartProduct__close' onClick={()=> {removeItem(PR.id)}}><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    </div>
                    </div>
              )
            })}

            <h2 className='cart__total'>Valor total: $ {totalTotal}</h2>

            <button className="btn__confirm">
              <Link to="/confirm" className='link__confirm' >
                Confirmar Compra
              </Link>
              
              </button>
            <button onClick={()=>{clearCart(cart)}} className="btn__clear">Vaciar Carrito</button>            
          </div>
        }           

      </div>
    </div>
}

export default Cart;
