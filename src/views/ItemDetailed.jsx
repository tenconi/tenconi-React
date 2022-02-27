import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Styles.css'
//component
import ItemCounter from '../components/ItemCounter/ItemCounter.jsx'
//firebase
import {db} from './../FireBase/FireConfig.js'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";



const ItemDetail=()=> {

  //const info = useContext(CartContext);
  //console.log('INFO ID: ' + CartContext.id)

  /**/
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

              <Link to=""></Link>
              <img src={item.img} alt="" className="item__img"/>
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