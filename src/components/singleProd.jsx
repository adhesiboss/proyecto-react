import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from './asyncMocks';
import { CartContext } from '../context/CartContext';

const SingleProd = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItem = async () => {
      const itemData = await fetchItemById(id);
      setItem(itemData);
    };

    fetchItem();
  }, [id]);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>ID del Producto: {item.id}</p>
          <p>Categoría: {item.category}</p>
          <button onClick={() => addToCart(item)}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default SingleProd;
