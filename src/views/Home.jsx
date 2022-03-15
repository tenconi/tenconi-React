import React, {useState} from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import Spinner from '../components/Spinner/Spinner.jsx';

const Home=()=> {

  const [isLoading, setIsLoading] = useState (true)
    setTimeout(()=>{
    setIsLoading(false)
  }, 1000)

  return <div className='altura'>
    
      {isLoading ? <Spinner className="Spinner"/> : <ItemDetailContainer/>} 
      
      
  </div>;
}

export default Home;