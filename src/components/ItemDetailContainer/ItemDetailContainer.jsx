import React, {useState, useEffect} from 'react';
//import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
//import Spinner from '../Spinner/Spinner.jsx'

const ItemDetailContainer=()=> {
    const [items, setItems] = useState([])
    //const [isLoading, setIsLoading] = useState (true)

    useEffect(()=>{
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=8')
        .then((Response) => Response.json())
        //.then((json) => console.log(json));
        .then((json) => setItems(json))

        /* setTimeout(()=>{//lo utilizao para demorar el cambio de valor de mi booleano
            setIsLoading(false)//aca modifico el valor de mi state
          }, 2500) */
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
