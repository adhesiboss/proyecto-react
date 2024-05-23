import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemsByCategory, fetchAllItems } from './asyncMocks';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let itemsData;
      if (categoryId) {
        itemsData = await fetchItemsByCategory(categoryId);
      } else {
        itemsData = await fetchAllItems();
      }
      setItems(itemsData);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
