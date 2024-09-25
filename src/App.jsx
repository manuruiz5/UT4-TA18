import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails'; 

const App = () => {
  return (
    <Router>
      <div>

          <Link to="/" className="link">Home</Link>
          <Link to="/product/1" className="link">Producto 1</Link>
          <Link to="/product/2" className="link">Producto 2</Link>
          <Link to="/product/3" className="link">Producto 3</Link>

        <Routes>
          <Route path="/" element={<h2>Bienvenido a la página de inicio</h2>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;


