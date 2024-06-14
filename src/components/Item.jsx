import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, category, description }) => {
  return (
    <div className="card">
      <Link to={`/item/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default Item;
