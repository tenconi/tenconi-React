import './App.css';
import React from 'react';
//componentes
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer';
//views - pages
import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom';
import Home from './views/Home.jsx'
import ItemDetailed from './views/ItemDetailed.jsx';
import Marcas from './views/Marcas.jsx';
import Ofertas from './views/Ofertas.jsx';
import Cart from './views/Cart.jsx'
import Productos from './views/Productos.jsx';
import Confirm from './views/Confirm.jsx';

// context
import {CartProvider} from './context/cartContext.jsx'


function App() {

  return (
    <CartProvider>

    <Browser>
      <div className="App">
        <NavBar/>  

      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/itemDetailed/:id" element={<ItemDetailed/>} />             
        <Route path="/productos/:prod" element={<Productos/>} />   

        <Route path="/marcas" element={<Marcas/>} />
        <Route path="/ofertas" element={<Ofertas/>} />
        <Route path="/userCart" element={<Cart/>} />

        <Route path="/confirm" element={<Confirm/>} />       
      </Routes>
      
      <Footer/>

    </Browser>

    

    </CartProvider>   
  );
  
}

export default App;
