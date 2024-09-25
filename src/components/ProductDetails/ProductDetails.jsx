import { useParams } from 'react-router-dom'; // Para capturar el ID de la URL
import styles from '../ProductDetails/ProductDetails.module.css'

const products = [
  { id: '1', name: 'Computadora', description: 'Descripción de la computadora', price: '$1000' },
  { id: '2', name: 'Celular', description: 'Descripción de la celular', price: '$600' },
  { id: '3', name: 'Auriculares', description: 'Descripción de la auriculares', price: '$200' }
];

const ProductDetails = () => {
  const { id } = useParams(); // Captura el parámetro id  de la URL
  const product = products.find((prod) => prod.id === id); // Busca el producto con el ID

  // Si el producto no existe, muestra un mensaje de error
  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className={styles.container}>
      <h2>Detalles del Producto</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );

};

export default ProductDetails;
