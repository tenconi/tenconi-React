import './App.css';
import React, {useState} from 'react';
//componentes
import NavBar from './components/NavBar/NavBar.jsx';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import Spinner from './components/Spinner/Spinner.jsx'

// reac router dom
import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom';
//views - pages
import Home from './views/Home.jsx'
import ItemDetailed from './views/ItemDetailed.jsx';
import Calzado from './views/Calzado.jsx';
import Indumentaria from './views/Indumentaria.jsx';
import Marcas from './views/Marcas.jsx';
import Outlet from './views/Outlet.jsx';
import Cart from './views/Cart.jsx'
import Status from './views/Status.jsx'


function App() {

  return (    
    <Browser>
      <div className="App">
        <NavBar/>  

      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/itemDetailed/:id" element={<ItemDetailed/>} />
        {/* es Fundamental hacer mención enla ruta de :id, es lo que nos va a generar el dinamismo */}
        <Route path="/calzado" element={<Calzado/>} />
        <Route path="/indumentaria" element={<Indumentaria/>} />
        <Route path="/marcas" element={<Marcas/>} />
        <Route path="/outlet" element={<Outlet/>} />
        <Route path="/userCart" element={<Cart/>} />

        {/* ------  */}
        <Route path="/status/:st" element={<Status/>} />
        
      </Routes>
    </Browser>
  );
  
}

export default App;
