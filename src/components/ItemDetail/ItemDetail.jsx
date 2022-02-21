import React from 'react';
import './ItemDetail.css'
import {Link} from 'react-router-dom'


const ItemDetail=({items})=> {

  return <div className='itemCard'>

    {/* <Link to={"./ItemDetail"} className='Linked'> */}
    <Link to={`./Status/${items.status}`}>
      <div className='itemCard__detail--status'>{items.status}</div>
    </Link>
      <div className="itemCard__img">
        <img src={items.img} alt="producto" />
      </div>
      
      <div className="itemCard__detail">
          <h3 className="itemCard__detail--tit">{items.nickname}</h3>
          <p className="itemCard__detail--descr">{items.name}</p>
          <p className="itemCard__detail--ocup">{items.occupation}</p>
          <h4 className="itemCard__detail--price">$ 680</h4>
      </div>

  </div>;
}

export default ItemDetail;
