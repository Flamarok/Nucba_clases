import logo from './logo.svg';
import './App.css';
import Propiedades from './components/Propiedades';

function App() {
  return (
    <>
      <Propiedades
        cadena = "es un string"
        number={20}
        booleano={true}
        array={[hola, 256, Mundo]}
        objeto={{nombre:"Franco", apellido:"Anderson Rojas" }}
      />
    </>
  );
}

export default App;
