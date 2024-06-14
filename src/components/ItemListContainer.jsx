import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import Item from './Item';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const itemsCollection = collection(db, 'items');
      let itemsQuery;

      if (categoryId) {
        itemsQuery = query(itemsCollection, where('category', '==', categoryId));
      } else {
        itemsQuery = itemsCollection;
      }

      const querySnapshot = await getDocs(itemsQuery);
      const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1 className="greeting-text">{greeting}</h1>
      <div className="item-list">
        {items.map(item => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            category={item.category}
            description={item.description} 
            imageKey={item.imageKey} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
