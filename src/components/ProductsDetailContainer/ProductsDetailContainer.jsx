import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
//firebase
import {db} from '../../FireBase/FireConfig'
import { collection, query, where, getDocs } from "firebase/firestore";

const ProductsDetailContainer = () => {

    
    //console.log(prod)
    
    const [items, setItems] = useState([])
    const {prod}=useParams();

    useEffect(() => {
		const getProds = async () => {
			const q = query(collection(db, 'sport'), where ('cat', '==', prod));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setItems(docs);
		};
		getProds();
	}, []);


  return (
    <div className='itemcard__cont'>

            {items.map((items)=>{
                return(
                    <>
                   {/*  <Link to={`/ItemDetailed/${items.id}`} className='Linked'> */}
                        <ItemDetail item={items} />
                    {/* </Link>  */}                       
                    </>
                )
            })}

    </div>
  )
}

export default ProductsDetailContainer