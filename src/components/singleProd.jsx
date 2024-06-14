import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { db } from './firebase';
import './SingleProd.css';
import plan1Image from '../assets/plan1.jpg';
import plan2Image from '../assets/plan2.jpg';
import plan3Image from '../assets/plan3.jpg';

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

  let image;
  if (item?.imageKey === 'plan1') {
    image = plan1Image;
  } else if (item?.imageKey === 'plan2') {
    image = plan2Image;
  } else if (item?.imageKey === 'plan3') {
    image = plan3Image;
  } else {
    image = ''; 
  }

  return (
    <div className="product-detail">
      {item ? (
        <div className="card">
          <h1 className="product-title">Detalles del Producto</h1>
          <h2>{item.name}</h2>
          <img src={image} alt={item.name} /> 
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
