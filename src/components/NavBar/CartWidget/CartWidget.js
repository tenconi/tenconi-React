import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/cartContext';

 

function CartWidget() {

  const cartContext = useContext(CartContext);
  const {cart} = cartContext;

  return <div>
    <Link to="/userCart" className="userCart">
      <p className="basketCart"><i className="icon-basket"></i><span> {cart.length} </span></p>
    </Link>
  </div>;
}

export default CartWidget;
