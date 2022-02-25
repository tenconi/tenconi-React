import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
//components


import Spinner from '../components/Spinner/Spinner'

//firebase
import {db} from '../FireBase/FireConfig.js'
import { collection, query, where, getDocs} from "firebase/firestore";
import ItemDetail from '../components/ItemDetail/ItemDetail';


    


const Productos = () => {
  const[categoria, setCategoria] = useState([]);

  

  const {prod} = useParams()

  //console.log(prod, categoria)

  useEffect(() => {
		const getCategory = async () => {
			const q = query(collection(db, 'sport') , where('cat', "==", prod) );
			const docs = [];
			const querySnapshot = await getDocs(q);
      //console.log('DATA:', querySnapshot.docs);
			querySnapshot.forEach((doc) => {
        //console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });//empujo data e id al array docs
			});     
			setCategoria(docs)      
		};
		getCategory();
	}, [prod]);

    

  return (
    <div className='altura'>
        <div className='container itemcard__cont'>

          {categoria.map((items)=>{
            return(
              <>
              <ItemDetail items={items}/>
              </>
            )
          })
          }

        </div>
    </div>
  )
}

export default Productos