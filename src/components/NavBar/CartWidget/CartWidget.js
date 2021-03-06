import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../../../context/cartContext';
 

function CartWidget() {

  const cartContext = useContext(CartContext);
  const {cart} = cartContext;

  let canTotal = 0;
  cart.forEach(e => canTotal +=  0 + e.cantidad ) 

  return <div>
    <Link to="/userCart" className="userCart">
      <p className="basketCart"><i className={cart.length ? "icon-basket-loaded" : "icon-basket"}></i>{cart.length ? <span>{canTotal}</span> :null } </p>
    </Link>
  </div>;
  
}

export default CartWidget;
