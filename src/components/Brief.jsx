
const Brief = ({ cart }) => {
  return (
    <div>
      <h3>Order Summary</h3>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          {/* Agrega más detalles del producto según sea necesario */}
        </div>
      ))}
    </div>
  );
};

export default Brief;
