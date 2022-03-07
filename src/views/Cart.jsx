import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';
import EmptyCart from '../components/EmptyCart/EmptyCart.jsx';
import './Styles.css'


const Cart =(initial)=> {
const{cart, useCart, removeItem, clearCart}= useContext(CartContext)


  return <div className="altura">
      <div className='contenedor'> 

      {cart.length === 0 ? <EmptyCart/> : <div>
            {cart.map((PR, initial)=>{            
              return(
                  <div className="cartProduct" key={cart.id}>                
                    <img src={PR.img} className="cartProduct__img" alt={PR.prod}/>

                    <table border="0" cellSpacing={0} className="cartProduct__table" >
                      <tr>
                        <td><h2 className='itemCard__detail--prod-open'>{PR.prod}</h2></td>
                        <td className="itemCard__detail--extra">x 1</td>
                        <td><p className="itemCard__detail--extra">$ {PR.price}</p></td>
                      </tr>

                      <tr>
                        <td className="itemCard__detail--extra">Total:</td> 
                        <td className="itemCard__detail--extra">x {PR.cantidad}</td>
                        <td><h4 className="itemCard__detail--price">$  {PR.price * PR.cantidad}</h4></td>
                      </tr>                  
                    </table>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='cartProduct__close' onClick={()=> {removeItem(PR.id)}}><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    </div>
              )
            })}
            <h3>Total: </h3>
            <button className="btn__confirm">Confirmar Compra</button>
            <button onClick={()=>{clearCart(cart)}} className="btn__clear">Vaciar Carrito</button>
            
            
            </div>}

            

      </div>
    </div>
}

export default Cart;
