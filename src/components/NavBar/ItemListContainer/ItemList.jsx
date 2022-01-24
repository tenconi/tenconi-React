import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './ItemList.css'

export const ItemList = (props) => {
  return <div>
      <div className="itemList">
          
        <p>hola {props.name}</p>{/* traigo el nombre desde la props en el tag principal*/}

        <CartWidget/>
      </div>
  </div>;
};


