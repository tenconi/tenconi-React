import {useState} from 'react';
import './ItemCounter.css'
import {Link} from 'react-router-dom'

const ItemCount = ({data}) => {

  const [initial, setInitial] = useState(0);
  var stock = 10; // lo genero para esta entrega ya que se pasará por prop  

  const [buy, setBuy] = useState([]) // Guardo en un Array ¿?¿?

  function onAdd() {
    
    const name = data.nickname; // Traigo dato del prop
    const cantidAdd = initial; // Levanto Valor del contador

    // Levanto datos del producto ↓
    console.log(`Cantidad:  ${cantidAdd} - Precio: $ ${data.char_id} - Producto: ${name} :: TOTAL: $`+ (data.char_id * cantidAdd)) 

    // Lo muestro de Manera MOMENTANEA en un Alert ↓
       if (initial > 0) {
        alert(`👍 Gracias! compraste ${initial} unidades de ${name}`); // VER arroja 1er resultado
      } else {
        alert(`No compraste nada! 😭`);
      }
      
      // si el valor esta en 0 aparece Alert ↓
      /* {initial || alert(`No compraste nada! 😭`)} */


      // Guardo en una nuevo estado ¿¿Cómo??



      // Reseteo Contador ↓ 
      setInitial(0) 
  }

  const handleIncrement = () => {
      if ((initial => 0) && (initial < stock)){ //modifique props.stock para esta entrega
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

          <button className='card__buy' onClick={onAdd}> comprar </button>

          <Link to="/userCart" className='finish'>
            <button className='card__fin'> Finalizar </button>
          </Link>
        </div>
  </div>;
};

export default ItemCount;
