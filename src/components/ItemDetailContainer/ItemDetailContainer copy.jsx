import React, {useState, useEffect} from 'react';
//import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailContainer=()=> {
    const [items, setItems] = useState([])
    

    useEffect(()=>{
        fetch('https://breakingbadapi.com/api/characters')
        .then((Response) => Response.json())
        //.then((json) => console.log(json));
        .then((json) => setItems(json))
    },[])

    return <div className='itemcard__cont'>
        
        {items.map((items, idx) =>
            <div key={idx + 1}>
                <ItemDetail items={items}/>
            </div>
        )}
        

    </div>;
}

export default ItemDetailContainer;
