import {useState, useContext} from 'react';
import { CartContext } from '../../context/cartContext.jsx';
import './ItemCounter.css'
import {Link} from 'react-router-dom'


const ItemCount = ({item, onAdd}) => {
  
  const {addItem} = useContext(CartContext);  
  const [initial, setInitial] = useState(0);
  
  const handleIncrement = () => {
      if ((initial => 0) && (initial < item.stock)){ 
        setInitial(initial + 1);        
      }         
  }

  const handleDecrement = () => {
    if(initial > 0){
      setInitial(initial - 1);
    }
  };

  return <div className='itemCounter'>
    
      <div className='card__counter'>
        <button onClick={handleDecrement}><i className='icon-arrow-down'></i></button>
        <p>{initial}</p>
        <button onClick={handleIncrement}><i className='icon-arrow-up'></i></button>
      </div>

    <br/>
      
      <div className="botonera">
        <button className='card__buy' onClick={()=>{addItem(item, initial)}}> Agregar <i className="icon-basket-loaded"></i></button>
        
         <button className='card__fin'><Link to="../userCart" className='card__fin--link'>Finalizar</Link></button> 
         
      </div>
  </div>;
};

export default ItemCount;