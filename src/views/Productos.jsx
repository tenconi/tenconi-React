import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//components
import ItemDetail from '../components/ItemDetail/ItemDetail';
//firebase
import {db} from '../FireBase/FireConfig.js'
import { collection, query, where, getDocs} from "firebase/firestore";

const Productos = () => {
  const[categoria, setCategoria] = useState([]);
  const {prod} = useParams()

  useEffect(() => {
		const getCategory = async () => {
			const q = query(collection(db, 'sport') , where('cat', "==", prod) );
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
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
              <div key={items.id}>
                  <ItemDetail items={items}/>
              </div>
            )
          })
          }

        </div>
    </div>
  )
}

export default Productos