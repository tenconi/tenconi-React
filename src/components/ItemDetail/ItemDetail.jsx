import React from 'react';
import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter.jsx'
//Links Route-React-Dome
import {Link} from 'react-router-dom'

const ItemDetail=({items, idx})=> {

  //console.log(`Item y data: ${items} `)

  return <div className='itemCard' key={idx + 1}>

    <Link to="./ItemDetail" className='Linked'>
      <div className="itemCard__img">
        <img src={items.image} alt="producto" />
      </div>
      <div className="itemCard__detail">
          <h3 className="itemCard__detail--tit">{items.character}</h3>
          <p className="itemCard__detail--descr">{items.quote}</p>
          <h4 className="itemCard__detail--price">$ 680</h4>
      </div>
      </Link>

      <ItemCounter />

  </div>;
}

export default ItemDetail;
