import React from 'react';
import './ItemDetail.css'
import {Link} from 'react-router-dom'

const ItemDetail=({items})=> {

  return <div className='itemCard'>
    
    {(items.off === true) ? <Link to={`./ofertas`}><div className='itemCard__detail--off'>Oferta</div></Link> : null}
      
      <img src={items.img} alt="producto" className="itemCard__img"/>
      
      <div className="itemCard__detail">        
          <h3 className="itemCard__detail--prod">{items.prod}</h3>
          <h4 className="itemCard__detail--price">$ {items.price}</h4>          
      </div>

  </div>;
}

export default ItemDetail;
