import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';/* importo el Hook de Parametros para poder levantar los datos*/
import './ItemDetailed.css'
import ItemCounter from '../components/ItemCounter/ItemCounter.jsx'
import { Link } from 'react-router-dom';

//firebase
import {db} from './../FireBase/FireConfig.js'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";


const ItemDetail=()=> {
  const [item, setItem] = useState([])

  const {id} = useParams() //desestructuro
  //console.log(item)

  useEffect(() => {
		const getProd = async () => {
			const q = query(collection(db, 'sport') , where(documentId(), "==", id) );
			const docs = [];
			const querySnapshot = await getDocs(q);
      //console.log('DATA:', querySnapshot.docs);
			querySnapshot.forEach((doc) => {
        //console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });//empujo data e id al array docs
			});     
			setItem(docs)      
		};
		getProd();
	}, []);


  return <div className="altura">
    <>
    
      {item.map((item)=>{
        return(
          <div key={item.id} className="item__cont">

            <div>
              {(item.off === true) ? <Link to={`/ofertas`}><div className='itemCard__detail--off'>Oferta</div></Link> : null}

              <img src={item.img} alt="" className="item__img"/>
            </div> 

          <div className="item__detail">
          <h4 className="itemCard__detail--cat-open">{item.cat}</h4>
          <h2 className="itemCard__detail--prod-open">{item.prod}</h2>
          <p className="itemCard__detail--extra">{item.det}</p>

          <h4 className="itemCard__detail--price"><span>Precio:</span> $ {item.price}</h4> 

          <ItemCounter data={item} />
          </div>
          </div>
        )
      })}     

      </>
      

  </div>;
}

export default ItemDetail;