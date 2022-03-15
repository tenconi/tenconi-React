import React,{useState, useEffect} from 'react';
/*--*/
import ItemDetail from '../components/ItemDetail/ItemDetail';
//firebase
import {db} from '../FireBase/FireConfig.js'
import { collection, query, where, getDocs} from "firebase/firestore";

const Ofertas =()=> {
  const[offer, setOffer] = useState([]);

  useEffect(() => {
		const getOffer = async () => {
			const q = query(collection(db, 'sport') , where('off', "==", true) );
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});     
			setOffer(docs)      
		};
		getOffer();
	}, [offer]);


  return <div className='altura'>
    <div className="container itemcard__cont">      

      {offer.map((items)=>{
        return(
          <ItemDetail items={items} key={items.id}/>
        )
      })}

    </div>
  </div>;
}

export default Ofertas;
