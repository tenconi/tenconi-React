import React, {useState} from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import Spinner from '../components/Spinner/Spinner.jsx';

const Home=()=> {

  const [isLoading, setIsLoading] = useState (true)
    setTimeout(()=>{//lo utilizao para demorar el cambio de valor de mi booleano
    setIsLoading(false)//aca modifico el valor de mi state
  }, 1500)

  return <div className='altura'>
    
      {isLoading ? <Spinner className="Spinner"/> : <ItemDetailContainer/>} 
      
      
  </div>;
}

export default Home;