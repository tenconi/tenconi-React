import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import Spinner from '../components/Spinner/Spinner.jsx';
import axios from 'axios';

const Category=()=> {
  
  const [estado, setEstado] = useState([])

    const {Category} = useParams()
    console.log(estado)

    useEffect(()=>{
        fetch('https://breakingbadapi.com/api/characters/')
        .then((Response) => Response.json())
        .then((json) => setEstado(json.filter((character)=>character.status === Category)))
    },[])



  return <div>
    
    {estado.map((status)=>{
      return(
        <>

       <ItemDetailContainer/>

        </>
      )
    })
    }
      
  </div>;
}

export default Category;