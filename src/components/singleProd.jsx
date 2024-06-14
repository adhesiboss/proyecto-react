import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { db } from './firebase';
import './SingleProd.css';

const SingleProd = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log(`Fetching item with ID: ${id}`);
        const itemDoc = await getDoc(doc(db, 'items', id));
        if (itemDoc.exists()) {
          console.log('Document data:', itemDoc.data());
          setItem(itemDoc.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
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
