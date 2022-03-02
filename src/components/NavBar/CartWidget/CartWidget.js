import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../../../context/cartContext';

 

function CartWidget() {

  const cartContext = useContext(CartContext);
  const {cart} = cartContext;

  return <div>
    <Link to="/userCart" className="userCart">
      <p className="basketCart"><i className={cart.length ? "icon-basket-loaded" : "icon-basket"}></i>{cart.length ? <span>{cart.length}</span> :null } </p>
    </Link>
  </div>;
}

export default CartWidget;
