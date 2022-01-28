import {Children, useEffect, useState} from 'react';

const ItemCount = (props) => {

  const [initial, setInitial] = useState(0);
  //console.log(props) 

  function onAdd() {
    const name = document.querySelector('.card__detail--tit').innerHTML;

      if (initial > 0) {
        alert(`👍 Gracias! compraste ${initial} unidades de ${props.name}`); // VER arroja 1er resultado
      } else {
        alert(`No compraste nada! 😭`);
      }
  }

  const handleIncrement = () => {
    
    if ((initial => 0) && (initial < props.stock)){
      setInitial(initial + 1);
      }         
  }

  const handleDecrement = () => {
    if(initial > 0){
      setInitial(initial - 1);
    }
  };

  return <>
      <div className='card__counter'>
        
          <button onClick={handleDecrement}><i className='icon-arrow-down'></i></button>
          <p>{initial}</p>
          <button onClick={handleIncrement}><i className='icon-arrow-up'></i></button>
        </div>
        <br/>
        <button className='card__buy' onClick={onAdd}> comprar </button>
  </>;
};

export default ItemCount;
