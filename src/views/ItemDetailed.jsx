import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Styles.css'
//component
import ItemCounter from '../components/ItemCounter/ItemCounter.jsx'
import giphy from '../img/giphythunder.gif'
//firebase
import {db} from './../FireBase/FireConfig.js'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";


const ItemDetail=()=> {
  
  const [wait, setWait] = useState(true)
  setTimeout(()=>{
    setWait(false)
  }, 1100)

  const [item, setItem] = useState([])
  const {id} = useParams() //desestructuro

  useEffect(() => {
    let unmounted = false;
		const getProd = async () => {
			const q = query(collection(db, 'sport') , where(documentId(), "==", id) );
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});     
      if(!unmounted){
			setItem(docs)     } 
		};
		getProd();
	}, []);


  return <div className="altura">
    <>
    
      <p className='back'><Link to="../" className='backLink'><i className='icon-control-rewind'></i> Volver</Link></p>
      
      {item.map((item)=>{
        return(
          <div key={item.id} className="item__cont">

            <div>
              {(item.off === true) ? <Link to={`/ofertas`}><div className='itemCard__detail--off'>Oferta</div></Link> : null}

              <img src={wait ? giphy : item.img} alt={item.prod} className="item__img"/>
            </div> 

            <div className="item__detail">
              <h4 className="itemCard__detail--cat-open">{item.cat}</h4>
              <h2 className="itemCard__detail--prod-open">{item.prod}</h2>
              <p className="itemCard__detail--extra">{item.det}</p>
              <p className="itemCard__detail--stock">Stock: {item.stock}</p>

              <h4 className="itemCard__detail--price"><span>Precio:</span> $ {item.price}</h4>               

              <ItemCounter stock={item.stock} item={item} />
            </div>
          </div>
        )
      })}

      </>    
      

  </div>;
}

export default ItemDetail;