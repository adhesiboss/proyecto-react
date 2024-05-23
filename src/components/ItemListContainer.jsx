import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemsByCategory, fetchAllItems } from './asyncMocks';
import Item from './Item';


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
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} id={item.id} name={item.name} category={item.category} />
      ))}
    </div>
  </div>
  );
};

export default ItemListContainer;
