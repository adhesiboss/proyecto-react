export default function ButtonComponent({ nombre, callback }) {
  return (
    <>

        <button onClick={callback}>{nombre}</button>
    </>
  );
}