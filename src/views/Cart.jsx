import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';

const Cart =({initial})=> {
const{cart, useCart}= useContext(CartContext)//desestructuro context

console.log(`cart: ${cart}`)

  return <div className="altura">

    <div className='item__cont'>
      <div>
        <h1>Carrito</h1>
        <div>
        
          {cart.map((PR)=>{
            
            return(<>
            <div>

              <table border="1">
                <thead>
                  <th>PRODUCTO</th>
                  <th>CATEGORIAS</th>
                  <th>CANT.</th>
                  <th>PRECIO</th>
                </thead>

                <tr>
                  <td><strong>{PR.prod}</strong></td>
                  <td>{PR.cat}</td>
                  <td>initial: ${PR.initial}</td>
                  <td>$ {PR.price}</td>
                </tr>

                <tr>
                  <td>{PR.prod}</td>
                  <td></td>
                  <td></td>
                  <td>$  {PR.price}</td>
                </tr>
                
              </table>
            </div>
              
              </>
            )
          })}
        </div>
    </div>
  </div>;
  </div>
}

export default Cart;
