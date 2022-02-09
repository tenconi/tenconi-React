import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail.jsx';

const Status =()=> {
  const [estado, setEstado] = useState()
  let status = useParams()
  //console.log(status.status)
/* 
  useEffect(()=> {
    axios(`https://breakingbadapi.com/api/characters/${status.status}`).then((res)=> setEstado(res.data))
  }, [status.status])


  return <div>
    {
      estado.map((status)=>{
        return(
          <>
          <div>
          <ItemDetail data={status}/>
          </div>
          </>
        )

      })
    }
 */
    
  </div>;
}

export default Status;
