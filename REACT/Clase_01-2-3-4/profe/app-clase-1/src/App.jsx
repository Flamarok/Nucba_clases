
import './App.css';
import ChangeColor from './componentes/ChangeColor';
import { Contador } from './componentes/ContadorOnClick';
import Propiedades from './componentes/Propiedades';
import Counter from './componentes/ContadorOnChange';

// imports de Redux
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  /*   const nombre = "Ariel";
    const id = 25
    const condicion = false */
  const cadena = 'Cadena de Texto'
  return (
    <>
      
      //Redux
      <Provider store={store}>
        // Aca envuelvo la aplicacion
        <Contador />
      </Provider>
      
      <Propiedades
        cadena={cadena}
        number={20}
        booleano={false}
        array={['Hola', 256, 'Mundo']}
        objeto={{ nombre: "Ariel", apellido: "Tecay" }}
      />
      <ChangeColor />
      <div>
        <Contador />
      </div>
      {/*       <img alt="1" />
      <img alt='2'></img>
      <input type="text" />
      <h1 id={id}>Nombre: {nombre}</h1>
      <h1 id={id}>Suma {1 + 1}</h1>
      <h1>{condicion ? <div>True</div> : ''} </h1> */}

    </>
  );
}

/* const App = () => {
  const nombre = "Ariel";
  const id = 25
  const condicion = false
  return (
    <div>
      <img alt="1" />
      <img alt='2'></img>
      <input type="text" />
      <h1 id={id}>Nombre: {nombre}</h1>
      <h1 id={id}>Suma {1 + 1}</h1>
      <h1>{condicion ? <div>True</div> : ''} </h1>

    </div>
  );
} */

/* export default class App extends React.Component {
  // constructor
  render() {
    const nombre = "Ariel";
    const id = 25
    const condicion = false
    return (<div>
      <img alt="1" />
      <img alt='2'></img>
      <input type="text" />
      <h1 id={id}>Nombre: {nombre}</h1>
      <h1 id={id}>Suma {1 + 1}</h1>
      <h1>{condicion ? <div>True</div> : ''} </h1>

    </div>)
  }
} */

// export default App;