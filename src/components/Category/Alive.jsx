import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Item from '../Item/Item.jsx'

function Alive() {
    const [items, setItems]=useState([])

    useEffect(
        axios('https://breakingbadapi.com/api/characters/')
        .then((Response) => console.log(res.data))
    )


  return (
    <div>

        <Item items={items}/>

    </div>
  )
}

export default Alive