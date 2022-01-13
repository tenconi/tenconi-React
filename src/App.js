import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Daniel Tenconi</h1>
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
      </header>
    </div>
  );
}

export default App;
