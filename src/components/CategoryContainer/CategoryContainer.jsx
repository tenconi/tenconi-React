import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const CategoryContainer=()=> {

    const [estado, setEstado] = useState([])
    //hacer filter: 

    const {Category} = useParams()
    console.log(estado)

    useEffect(()=>{
        fetch('https://breakingbadapi.com/api/characters/')
        .then((Response) => Response.json())
        .then((json) => setEstado(json.filter((character)=>character.status === Category)))
    },[])



  return (
    <div>
        {estado.map((status) =>
        <div key={status.char_id}>
                {/* aqui Genero dinamico ':id' para el Link */}
                    <ItemDetail />
        </div>
        )}
        <ItemDetail/>

    </div>
  )
}

export default CategoryContainer