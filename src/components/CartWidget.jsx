import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  if (totalItems === 0) return null;

  return (
    <div>
      <Link to="/cart">
      <button>
        <span>🛒</span>
        <span>{totalItems}</span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
