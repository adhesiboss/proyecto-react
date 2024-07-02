import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import createOrder from './createOrder';
import { toast } from 'react-toastify';
import './Checkout.css';

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
    if (!buyer.name || !buyer.phone || !buyer.email || !confirmEmail) {
      toast.error('Por favor completa todos los campos', {
        autoClose: 10000,
      });
      return;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(buyer.email)) {
      toast.error('Formato de correo electrónico incorrecto', {
        autoClose: 10000,
      });
      return;
    }

    if (buyer.email !== confirmEmail) {
      toast.error('Los correos electrónicos no coinciden', {
        autoClose: 100000,
      });
      return;
    }

    if (!/^\d{9}$/.test(buyer.phone)) {
      toast.error('El teléfono debe tener 9 números', {
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
      console.error('Error al finalizar la compra: ', error.message, {
        autoClose: 10000,
      });
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
        <h3>Total a Pagar: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
        <div className="input-grid">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
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
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
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
        <button className="buttonPagar" onClick={handleCheckout}>Pagar</button>
      </div>
    </div>
  );
};

export default Checkout;
