import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from './asyncMocks';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

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
          <p>Descripción del producto...</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
