import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';/* importo el Hook de Parametros para poder levantar los datos*/
import axios from 'axios'
import './ItemDetailed.css'
import ItemCounter from '../components/ItemCounter/ItemCounter.jsx'

import { CartContext } from '../context/cartContext';



const ItemDetail=()=> {
  const [coso, setCoso] = useState([])

  const cartContext = useContext(CartContext);
  const {cart, addItem} = cartContext;

  //console.log(addItem)
  
  const onAdd = (cantidad)=> {
     addItem(coso, cantidad);
     
  }
  //console.log(cart)

  /* ---- */
  
  

  let id = useParams()
  //console.log(id.id)

  useEffect(() => {
    axios(`https://breakingbadapi.com/api/characters/${id.id}`).then((res) => setCoso(res.data))
  
  }, [id.id]);


  return <div>
    <div className='item__cont'>
      {coso.map((item)=>{
        return(
          <>
          <div className="item__img">
            <img src={item.img} alt="" />
          </div>

          <div className="item__detail">
          <h2 className="itemCard__detail--tit-open">{item.nickname}</h2>
          <h4 className="itemCard__detail--name-open">{item.name}</h4>
          <p className="itemCard__detail--extra">{item.birthday}</p>
          <p className="itemCard__detail--extra">{item.occupation}</p>
          <p className="itemCard__detail--extra">Status: {item.status}</p>

          <h4 className="itemCard__detail--price"><span>Precio:</span> $ {item.char_id}</h4> 

          <ItemCounter data={item} ondAdd={onAdd}/>
          {/* Paso info/props al contador */}
          </div>
          </>
        )
      })}


      

      </div>
      

  </div>;
}

export default ItemDetail;
