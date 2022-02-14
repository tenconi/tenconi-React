import React from 'react';
import { Link } from 'react-router-dom';

function CartWidget() {
  return <div>
    <Link to="/userCart" className="userCart">
      <p className="basketCart"><i class="icon-basket"></i><span>0</span></p>
    </Link>
  </div>;
}

export default CartWidget;
