import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';

const Cart =(initial)=> {
const{cart, useCart}= useContext(CartContext)//desestructuro context  

console.log(`initial: ${initial}`)

  return <div className="altura">

    <div className='item__cont'>
      <div>
        <h1>Carrito</h1>
        <div>
        
          {cart.map((PR, initial)=>{
            
            return(<>
            <div>

              <table border="0" cellSpacing={10}>
                <thead>
                  <th>img</th>
                  <th>PRODUCTO</th>
                  <th>CATEGORIAS</th>
                  <th>CANT.</th>
                  <th>PRECIO</th>
                </thead>

                <tr>
                  <td><img src={PR.img} /></td>
                  <td><strong>{PR.prod}</strong></td>
                  <td>{PR.cat}</td>
                  <td>initial: {PR.cantidad}</td>
                  <td>$ {PR.price}</td>
                </tr>

                <tr>
                  <td>Total:</td>
                  <td></td>
                  <td></td>
                  <td>$  {PR.price * PR.cantidad}</td>
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
