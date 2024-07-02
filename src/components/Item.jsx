// Item.jsx
import { Link } from 'react-router-dom';
import './Item.css';
import plan1Image from '../assets/plan1.jpg';
import plan2Image from '../assets/plan2.jpg';
import plan3Image from '../assets/plan3.jpg';

const Item = ({ id, name, category, description, imageKey }) => {
  let image;
  if (imageKey === 'plan1') {
    image = plan1Image;
  } else if (imageKey === 'plan2') {
    image = plan2Image;
  } else if (imageKey === 'plan3') {
    image = plan3Image;
  } else {
    
    image = ''; 
  }

  return (
    <div className="item-card">
      <Link to={`/item/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{category}</p>
        <p className="description">{description}</p>
      </Link>
    </div>
  );
};

export default Item;
