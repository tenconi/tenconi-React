import './App.css';
import React from 'react';
import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom';
//componentes
import NavBar from './components/NavBar/NavBar.jsx';
//views - pages
import Home from './views/Home.jsx'
import ItemDetailed from './views/ItemDetailed.jsx';
import Calzado from './views/Calzado.jsx';
import Indumentaria from './views/Indumentaria.jsx';
import Marcas from './views/Marcas.jsx';
import Outlet from './views/Outlet.jsx';
import Cart from './views/Cart.jsx'
import Status from './views/Status.jsx'
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
        
        <Route path="/calzado" element={<Calzado/>} />
        <Route path="/indumentaria" element={<Indumentaria/>} />
        <Route path="/marcas" element={<Marcas/>} />
        <Route path="/outlet" element={<Outlet/>} />
        <Route path="/userCart" element={<Cart/>} />
        <Route path="/status/:st" element={<Status/>} />        
      </Routes>
    </Browser>

    </CartProvider>   
  );
  
}

export default App;
