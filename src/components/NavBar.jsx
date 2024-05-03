import CartWidget from './CartWidget';
import  './NavBar.css';

export default function NavBar() {
  return (
    <>
    <h1>Mi Ecommers</h1>
    <nav className="navbar">
      {/* <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Productos</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Carrito</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contacto</a>
        </li>
      </ul> */}
    </nav>
    <CartWidget/>
    </>
  );
}