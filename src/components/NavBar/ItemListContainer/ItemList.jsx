import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './ItemList.css'
import { Link } from 'react-router-dom';

export const ItemList = (props) => {
  return <div>
      <div className="itemList">

        <Link to="" className="userProf">
          <p><i className="icon-user"></i> <strong>{props.name}</strong></p>
        </Link>

          <CartWidget/>
      </div>
  </div>;
};


