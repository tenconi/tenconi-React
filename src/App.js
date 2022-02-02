import './App.css';
import Cards from './components/Cards/Cards';
//componentes
import { ItemList } from './components/NavBar/ItemListContainer/ItemList';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {

  const onAdd = []; // Dejo la variable vacía para pasarla como prop, sinó me arroja error (¿?)

  return (    
    <div className="App">
    <ItemList name="Daniel Tenconi"/>{/* paso prop para levantarla desde ItemList*/}
    <NavBar/>
    
    
    <div className='portaCard'>
      
      <Cards stock={3} initial="0" onAdd={onAdd} name="Zapas Adidas" cardImg="https://contents.mediadecathlon.com/p1959434/k$670da77ff8a3240facacc0392bd93684/sq/8659260.jpg?format=auto&f=800x0"/>

      <Cards stock={4} initial="0" onAdd={onAdd} name="Zapas Dos" cardImg="https://e00-telva.uecdn.es/assets/multimedia/imagenes/2021/03/19/16161931772406.jpg"/>

      <Cards stock={7} initial="0" onAdd={onAdd} name="Zapas Merrell" cardImg="https://zffjz3yb.tinifycdn.com/41575-home_default/zapatillas-merrell-rubato-negro-mujer-ss22.jpg"/>

      <Cards stock={3} initial="0" onAdd={onAdd} cardImg="https://http2.mlstatic.com/D_NQ_NP_769463-MLM32272443325_092019-O.jpg"/>
      
    </div>


    </div>
  );
  
}

export default App;
