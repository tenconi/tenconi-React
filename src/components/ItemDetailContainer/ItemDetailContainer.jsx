import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import {Link} from 'react-router-dom'
//firebase
import {db} from '../../FireBase/FireConfig'
import { collection, query, getDocs } from "firebase/firestore";


const ItemDetailContainer=()=> {
    const [items, setItems] = useState([])
    

    useEffect(() => {
		const getProds = async () => {
			const q = query(collection(db, 'sport'));
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

    return <div className='itemcard__cont'>
        
        {items.map((items) =>
            <div key={items.id}>
                {/* <Link to={`./ItemDetailed/${items.id}`} className='Linked'> */} 
                    <ItemDetail items={items} />
                {/* </Link> */}
            </div>
        )}
        

    </div>;
}

export default ItemDetailContainer;

// ORIGINAL
/* const ItemDetailContainer=()=> {
    const [items, setItems] = useState([])
    

    useEffect(()=>{
        fetch('https://breakingbadapi.com/api/characters')
        .then((Response) => Response.json())
        //.then((json) => console.log(json));
        .then((json) => setItems(json))
    },[])

    return <div className='itemcard__cont'>
        
        {items.map((items) =>
            <div key={items.char_id}>
                <Link to={`./ItemDetailed/${items.char_id}`} className='Linked'> 
                    <ItemDetail items={items}/>
                </Link>
            </div>
        )}
        

    </div>;
}

export default ItemDetailContainer;
 */