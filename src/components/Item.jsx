import { Link } from 'react-router-dom';

const Item = ({ id, name }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default Item;
