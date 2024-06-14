import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import createOrder from './createOrder';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handleCheckout = async () => {
    if (buyer.email !== confirmEmail) {
      toast.error('Los correos electrónicos no coinciden', {
        autoClose: 100000,
      });
      return;
    }

    try {
      const orderId = await createOrder(buyer, cartItems);
      toast.success(`Compra realizada con éxito. Fecha: ${new Date().toLocaleString()} ID de orden: ${orderId}`, {
        autoClose: 200000,
      });
      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Error al finalizar la compra: ', error.message);
      toast.error(`Error al finalizar la compra: ${error.message}`, {
        autoClose: 10000,
      });
    }
  };

  return (
    <div className="product-detail">
      <div className="card">
        <h2>Resumen de la Compra</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.quantity} x {item.name} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={buyer.email}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirma tu correo electrónico"
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
          />
        </div>
        <button onClick={handleCheckout}>Pagar</button>
      </div>
    </div>
  );
};

export default Checkout;
