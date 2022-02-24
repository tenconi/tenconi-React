import {useState, useContext} from 'react';
import { CartProvider } from '../../context/cartContext';
import './ItemCounter.css'
//import {Link} from 'react-router-dom'




const ItemCount = ({data, onAdd, addItem}) => {

  const cartProvider = useContext(CartProvider)
  
  const [initial, setInitial] = useState(0);
  var stock = 10; // lo genero para esta entrega ya que se pasará por prop  

  //const [buy, setBuy] = useState([]) // Guardo en un Array ¿?¿?

  /* function onAdd() {
    
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
      {initial || alert(`No compraste nada! 😭`)}


      // Guardo en una nuevo estado ¿¿Cómo??



      // Reseteo Contador ↓ 
      setInitial(0) 
  } */

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
          <button className='card__buy' onClick={()=>{addItem(initial)}}> Agregar </button>

          {/* <Link to="/userCart" className='finish'> */}
            <button className='card__fin'> Finalizar </button>
          {/* </Link> */}
        </div>
  </div>;
};

export default ItemCount;


/* 
//PROYECTO WEB

const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [qty, setQty] = useState(initial);
  const [showButton, setshowButton] = useState(false);

  let history = useHistory();

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>

        <span className="count-container__qty">{qty}</span>

        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => {
          onAdd(qty);
          setshowButton(true);
        }}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>

      {showButton && history.location.pathname.includes('/detail') && (
        <button
          onClick={() => {
            history.push('/cart');
          }}
          className="button-primary button-finalizar-compra"
        >
          Finalizar compra
        </button>
      )}
    </div>
  );
};

*/
