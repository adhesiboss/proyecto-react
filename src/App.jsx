import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import SingleProd from './components/SingleProd';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const greeting = (
    <div className="greeting-container">
      <h1 className="greeting-title">Bienvenidos a Aksaya Studio</h1>
      <p className="greeting-description">
        Ofrecemos una variedad de planes de video de yoga para ayudarte a explorar la eternidad a través del Vinyasa Yoga. <br />Este estilo dinámico y fluido sincroniza la respiración con movimientos suaves y continuos, creando una experiencia de flujo constante entre las posturas y fomentando la conexión mente-cuerpo. <br /> ¡Descubre nuestros planes y encuentra el que mejor se adapte a tus necesidades!
      </p>
    </div>
  );

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/item/:id" element={<SingleProd />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer />
      </Router>
    </CartProvider>
  );
}

export default App;
