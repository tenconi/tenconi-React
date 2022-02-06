import './App.css';
import React, {useState} from 'react';
//componentes
import { ItemList } from './components/NavBar/ItemListContainer/ItemList';
import NavBar from './components/NavBar/NavBar.jsx';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import Spinner from './components/Spinner/Spinner.jsx'

// reac router dom
import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom';
//views - pages
import Home from './views/Home.jsx'
import ItemDetail from './views/ItemDetail';
//carousel
/* import Carousel from './components/Carousel/Carousel.jsx'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; */


function App() {
  
  //const onAdd = []; // Dejo la variable vacía para pasarla como prop, sinó me arroja error (¿?)

  return (    
    <Browser>
      <div className="App">
      <ItemList name="Daniel Tenconi"/>{/* paso prop para levantarla desde ItemList*/}
      <NavBar/>
      
      
      <div>


      {/*
      // Lo dejo para dejar constancia ya que tengo pensado implementarlo de alguna manera 
      <Carousel/>
      <ItemListContainer/>
        
        <Cards stock={3} initial="0" onAdd={onAdd} name="Zapas Adidas" cardImg="https://contents.mediadecathlon.com/p1959434/k$670da77ff8a3240facacc0392bd93684/sq/8659260.jpg?format=auto&f=800x0"/>

        <Cards stock={4} initial="0" onAdd={onAdd} name="Zapas Dos" cardImg="https://e00-telva.uecdn.es/assets/multimedia/imagenes/2021/03/19/16161931772406.jpg"/>

        <Cards stock={7} initial="0" onAdd={onAdd} name="Zapas Merrell" cardImg="https://zffjz3yb.tinifycdn.com/41575-home_default/zapatillas-merrell-rubato-negro-mujer-ss22.jpg"/>

        <Cards stock={3} initial="0" onAdd={onAdd} cardImg="https://http2.mlstatic.com/D_NQ_NP_769463-MLM32272443325_092019-O.jpg"/> */}
        
      </div>


      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/itemDetail" element={<ItemDetail/>} />
      </Routes>
    </Browser>
  );
  
}

export default App;
