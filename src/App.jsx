import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useAuth } from './components/AuthContext/AuthContext.jsx'; // Importa el contexto de autenticación
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard'; // Ruta protegida
import Profile from './components/Profile/Profile';     // Ruta protegida

const App = () => {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* Botones para iniciar/cerrar sesión */}
      {!isAuthenticated ? (
        <button onClick={login}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rutas protegidas */}
        <ProtectedRoute path="/dashboard" element={<Dashboard />} />
        <ProtectedRoute path="/profile" element={<Profile />} />

        {/* Puedes agregar más rutas públicas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
