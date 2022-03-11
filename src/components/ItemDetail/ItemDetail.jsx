import React, {useState} from 'react';
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import giphy from '../../img/giphythunder.gif'

const ItemDetail=({items})=> {

  const [wait, setWait] = useState(true)
  setTimeout(()=>{
    setWait(false)
  }, 500)

  return <div>
    <div className='itemCard'>    
    {(items.off === true) ? <Link to={`/ofertas`} ><div className='itemCard__detail--off'>Oferta</div></Link> : null}

    <Link to={`../ItemDetailed/${items.id}`} className='Linked'>      
      <img src={wait ? giphy : items.img} alt="producto" className="itemCard__img"/>  

      <div className="itemCard__detail">        
          <h3 className="itemCard__detail--prod">{items.prod}</h3>
          <h4 className="itemCard__detail--price">$ {items.price}</h4>          
      </div>
    </Link>
    </div>

  </div>;
}

export default ItemDetail;
