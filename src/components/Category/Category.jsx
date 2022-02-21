import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const Category=()=> {
  
  const [estado, setEstado] = useState([])

    let status = useParams()
    //console.log(status.st)

    useEffect(() => {
      fetch('https://breakingbadapi.com/api/characters/')
        .then((response) => response.json())
        .then((json) => setEstado(json.filter((item) => item.status === status.st /* 'Presumed dead' */)))
    }, [status])


  return <div>
    
    {estado.map((status)=>{
      return(      
          <>
            <ItemDetail items={status}/>
          </>
      )
    })
    }
      
  </div>;
}

export default Category;