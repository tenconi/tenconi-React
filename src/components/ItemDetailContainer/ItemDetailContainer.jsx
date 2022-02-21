import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import {Link} from 'react-router-dom'


const ItemDetailContainer=()=> {
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
