import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import SingleProd from './components/singleProd';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos a mi tienda' />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenidos a mi tienda' />} />
          <Route path="/item/:id" element={<SingleProd />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
