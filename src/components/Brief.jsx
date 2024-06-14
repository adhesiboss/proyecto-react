
const Brief = ({ cart }) => {
  return (
    <div>
      <h3>Order Summary</h3>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Brief;
