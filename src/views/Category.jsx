import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';

const Category=()=> {
  
  const [estado, setEstado] = useState([])

    const {status} = useParams()
    //console.log(estado)

   /*  useEffect(()=>{
        fetch('https://breakingbadapi.com/api/characters/')
        .then((Response) => Response.json())
        .then((json) => setEstado(json.filter((item)=>item.status === status)))
    },[status]) */

    useEffect(() => {
      fetch('https://breakingbadapi.com/api/characters/')
        .then((response) => response.json())
        .then((json) => setEstado(json.filter((item) => item.status === status)))
    }, [status])



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