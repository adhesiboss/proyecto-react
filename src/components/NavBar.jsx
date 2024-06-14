import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logotipo.png';

export default function NavBar() {
  return (
    <header className='allnav'>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="barra">
        <Link to="/category/Semanal">
          <ButtonComponent nombre='Planes: Básico Semanal' />
        </Link>
        <Link to="/category/Trimestral">
          <ButtonComponent nombre='Planes: Intermedio Trimestral' />
        </Link>
        <Link to="/category/Semestral">
          <ButtonComponent nombre='Planes: Avanzado Semestral' />
        </Link>
      </nav>
      <CartWidget />
    </header>
  );
}
