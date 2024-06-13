import { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const AddItemButton = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    setCart([...cart, item]);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddItemButton;
