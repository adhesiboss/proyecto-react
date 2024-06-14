import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
  return (
    <header className='allnav'>
      <h1><Link to="/">Yoga Videos</Link></h1>

      <nav className="barra">
        <Link to="/category/plan1">
          <ButtonComponent nombre='Plan 1: Básico Semanal' />
        </Link>
        <Link to="/category/plan2">
          <ButtonComponent nombre='Plan 2: Intermedio Trimestral' />
        </Link>
        <Link to="/category/plan3">
          <ButtonComponent nombre='Plan 3: Avanzado Semestral' />
        </Link>
      </nav>
      <CartWidget />
    </header>
  );
}
