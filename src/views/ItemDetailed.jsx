import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';/* importo el Hook de Parametros para poder levantar los datos*/
import axios from 'axios'
import './ItemDetailed.css'
import ItemCounter from '../components/ItemCounter/ItemCounter.jsx'

const ItemDetail=()=> {
  const [coso, setCoso] = useState([])

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
          <h2 className="itemCard__detail--tit">{item.nickname}</h2>
          <h4 className="itemCard__detail--">{item.name}</h4>
          <p className="itemCard__detail--descr">{item.birthday}</p>
          <p className="itemCard__detail--descr">{item.occupation}</p>
          <p className="itemCard__detail--descr">Status: {item.status}</p>
          <h4 className="itemCard__detail--price">$ {item.char_id}</h4>

          <ItemCounter/>
          </div>
          </>
        )
      })}


      

      </div>
      

  </div>;
}

export default ItemDetail;
