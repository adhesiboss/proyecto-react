import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from './asyncMocks';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import './SingleProd.css';

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

  const handleAddToCart = (quantity) => {
    if (item) {
      addToCart({ ...item, quantity });
    }
  };

  return (
    <div className="product-detail">
      {item ? (
        <div className="card">
          <h1>Detalle del Producto</h1>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default SingleProd;
