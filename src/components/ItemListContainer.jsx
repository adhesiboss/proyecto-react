import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItems, fetchItemsByCategory } from './asyncMocks';
import Item from './Item';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryId) {
        const itemsData = await fetchItemsByCategory(categoryId);
        setItems(itemsData);
      } else {
        const itemsData = await fetchItems();
        setItems(itemsData);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="item-list">
        {items.map(item => (
          <Item key={item.id} id={item.id} name={item.name} category={item.category} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
