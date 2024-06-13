import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        🛒
        <span>{totalItems}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
