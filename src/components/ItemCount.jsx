import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css'; // Importa el archivo de estilos

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(quantity);
    setAdded(true);
  };

  return (
    <div>
      {added ? (
        <>
          <Link to="/cart">
            <button className="button-column">Terminar mi compra</button>
          </Link>
          <Link to="/">
            <button className="button-column">Seguir comprando</button>
          </Link>
        </>
      ) : (
        <>
          <div className="button-column">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= stock}>+</button>
          </div>
          <button className="button-column addtocart" onClick={handleAdd}>Agregar al Carrito</button>
        </>
      )}
    </div>
  );
};

export default ItemCount;
