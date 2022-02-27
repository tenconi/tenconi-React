import React, {useContext, useState} from 'react';
import { CartContext } from '../context/cartContext';
import './Styles.css'


const Cart =(initial)=> {
const{cart, useCart}= useContext(CartContext)


  return <div className="altura">
      <div className='contenedor'> 

            {cart.map((PR, initial)=>{            
              return(
                <>
                  <div className="cartProduct">                
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
                  </div>
                </>
              )
            })}

      </div>
    </div>
}

export default Cart;
