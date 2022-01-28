import './Cards.css';
import zapa1 from '../../img/zapas-1.jpg'
import ItemCount from './ItemCount';

const Cards = (props) => {    
  

  return <div className='card'>
    <div className='card__porta-img'>
      <img src={props.cardImg} alt="" />     

    </div>

    <div className="card__detail">
      <span>STOCK: <strong>{props.stock}</strong></span>
      <h3 className='card__detail--tit'>{props.name}</h3>

        <ItemCount stock={props.stock} name={props.name}/> 
    </div>

  </div>;    
};
    // props.name por Default
    Cards.defaultProps = {  
      name: 'Zapas Default',
    }
    
export default Cards;