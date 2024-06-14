import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="product-detail">
        <div className="card">
          <p>No hay ítems en el carrito.</p>
          <Link to="/"><button>Volver al inicio</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="card">
        <h2>Carrito de Compras</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <div className="item">
                <span>{item.quantity} x {item.name}</span>
                <button className="delete-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total de ítems: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <Link to="/Checkout"><button>Terminar mi compra</button></Link>
      </div>
    </div>
  );
};

export default Cart;
