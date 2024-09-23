import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //BrowserRouter: Envuelve la aplicación para manejar la navegación
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

/*
Routes: Contiene las rutas definidas.
Route: Define la ruta específica. Por ejemplo, path="/" es para la página principal y element={<Home />} es el componente que se va a renderizar cuando el usuario navegue a la ruta /
Link: Crea un enlace para la navegación interna. Por ejemplo, <Link to="/">Home</Link> permite que al hacer clic, el usuario navegue a la ruta principal sin recargar la página
*/ 

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};
export default App;

