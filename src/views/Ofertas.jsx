import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
/*--*/
import ItemDetail from '../components/ItemDetail/ItemDetail';
import Spinner from '../components/Spinner/Spinner.jsx'
//firebase
import {db} from '../FireBase/FireConfig.js'
import { collection, query, where, getDocs} from "firebase/firestore";

const Ofertas =()=> {
  const[offer, setOffer] = useState([]);
  //const[isLoading, setIsLoading] = useState(true)

  //const {offTrue} = useParams()

  useEffect(() => {
		const getOffer = async () => {
			const q = query(collection(db, 'sport') , where('off', "==", true) );
			const docs = [];
			const querySnapshot = await getDocs(q);
      //console.log('DATA:', querySnapshot.docs);
			querySnapshot.forEach((doc) => {
        //console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });//empujo data e id al array docs
			});     
			setOffer(docs)      
		};
		getOffer();
	}, [offer]);


  return <div className='altura'>


    <div className="container itemcard__cont">
      

      {offer.map((items)=>{
        return(
          <ItemDetail items={items}/>
        )
      })}

    

    </div>
  </div>;
}

export default Ofertas;
