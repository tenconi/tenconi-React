import './App.css';
//componentes
import { ItemList } from './components/NavBar/ItemListContainer/ItemList';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (    
    <div className="App">
    <ItemList name="Daniel Tenconi"/>{/* paso prop para levantarla desde ItemList*/}
    <NavBar/>


    </div>
  );
  
}

export default App;
