import './App.css';


//componentes
import Header from './components/Jeder/Header';

/*
const name = 'Daniel Tenconi';

const style ={
  title:{
    color:'orangered',
    backgroundColor: 'lime',
    padding: '20px', 
  },
}
*/
const orangeColor = "orangered";
const blueColor = "blue";
const greenColor = "green";

function App() {
  return (    
    <div className="App">

<Header/>

    
      {/*
      <NavBar color={orangeColor}/>    // esto e suna Prop  
      <NavBar color={blueColor}/>    // esto e suna Prop
      <NavBar color={greenColor}/>    // esto e suna Prop
      */}

      
      {/* //Ejemplo de estilos
      <header className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={style.title}>{name}</h1>
        <p>
         Hola, mi nombre es Daniel Tenconi, de momento no tengo definida con exactitud el tema de mi app; pero imagino hacer una página de <em>servicios</em> (trabajos) donde pueda tener variedad de <strong>opciones</strong> y <strong>sub-opciones</strong> y <strong>regiones</strong>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>*/}



    </div>
  );
  
}

export default App;
