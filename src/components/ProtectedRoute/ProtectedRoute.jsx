import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext.jsx'; // Importa el contexto de autenticación
import PropTypes from 'prop-types';
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth(); // Verifica si el usuario está autenticado

  return (
    <Route
        {...rest}
        render={props =>
            user ? (
                <Component {...props} />
            ) : (
                <Navigate to="/" />
            )
        }
    />
);
};

ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired, // 'component' debe ser un componente de React y es requerido
  };

export default ProtectedRoute;
