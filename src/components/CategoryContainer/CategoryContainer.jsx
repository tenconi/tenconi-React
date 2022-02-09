import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const CategoryContainer=()=> {

    const [estado, setEstado] = useState([])

    useEffect(()=>{
        fetch(`https://breakingbadapi.com/api/characters/${staus.alive}`)
        .then((Response) => Response.json())
        .then((json) => setEstado(json))
    },[])

  return (
    <div>
        {estado.map((status) =>
        <div key={status.char_id}>
            <Link to={`./ItemDetailed/${items.char_id}`} className='Linked'> 
                {/* aqui Genero dinamico ':id' para el Link */}
                    <ItemDetail items={items}/>
            </Link>
        </div>
        )}
        <ItemDetail/>

    </div>
  )
}

export default CategoryContainer