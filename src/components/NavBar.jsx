import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import  './NavBar.css';

export default function NavBar() {

  const clickMotherBoards = () => {
    console.log('hiciste click motherBoards')
  }

  const clickMicros = () => {
    console.log('hiciste click Micros')
  }

  const clickGabinetes = () => {
    console.log('hiciste click Gabinetes')
  }
  return (
    <header className='allnav'>
    <h1>Mi tienda</h1>

    <nav className="barra">
      <ButtonComponent nombre='MotherBoards' callback={clickMotherBoards}></ButtonComponent>
      <ButtonComponent nombre='Micros' callback={clickMicros}></ButtonComponent>
      <ButtonComponent nombre='Gabinetes' callback={clickGabinetes}></ButtonComponent>

    </nav>
    <CartWidget/>
    </header>
  );
}