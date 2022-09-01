
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Users from './Pages/Users';


function App() {
  return (
    <div className="App">
      <h1>Rutas</h1>
      <h2>Informacion importante</h2>
      <div>El usuario es....</div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/users/*' element={<Users />} />  
      </Routes>  
      {/*       <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
      </nav> */}
    </div>
  );
}

export default App;
