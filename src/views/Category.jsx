import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import Spinner from '../components/Spinner/Spinner.jsx';

const Category=()=> {
  

  let status = useParams();

  /* const [isLoading, setIsLoading] = useState (true)
    setTimeout(()=>{
    setIsLoading(false)
  }, 1000) */

  return <div>
      
  </div>;
}

export default Category;