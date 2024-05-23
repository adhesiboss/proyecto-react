import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
  return (
    <header className='allnav'>
      <h1>
        <Link to="/">Mi tienda</Link>
      </h1>
      <nav className="barra">
        <Link to="/category/motherboards">
          <ButtonComponent nombre='MotherBoards' />
        </Link>
        <Link to="/category/micros">
          <ButtonComponent nombre='Micros' />
        </Link>
        <Link to="/category/gabinetes">
          <ButtonComponent nombre='Gabinetes' />
        </Link>
      </nav>
      <CartWidget />
    </header>
  );
}
