import React from 'react';
import './ItemDetail.css'
import ItemCounter from '../components/ItemCounter/ItemCounter.jsx'

const ItemDetail=()=> {
  return <div>
    <div className='item__cont'>

      <div className="item__img">
        <img src="https://cdn.pixabay.com/photo/2021/04/20/19/54/shoes-6194739_1280.png" alt="" />
      </div>

      <div className="item__detail">
        <h2 className="itemCard__detail--tit">Titulo de producto</h2>
        <p className="itemCard__detail--descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum aliquam nisi ac scelerisque. Praesent efficitur et diam in dapibus. Pellentesque pretium odio id venenatis tincidunt. Suspendisse et nibh vel lacus mollis blandit. Vivamus lobortis eros quis lacus scelerisque commodo vitae id elit.</p>
        <h4 className="itemCard__detail--price">$700</h4>

        <ItemCounter/>
      </div>

      </div>
      

  </div>;
}

export default ItemDetail;
