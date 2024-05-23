import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartWidget;
