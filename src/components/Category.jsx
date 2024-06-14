import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryName } = useParams();
  
  return (
    <div>
      <h1>{categoryName}</h1>
      <p>Productos de la categoría {categoryName}...</p>
    </div>
  );
};

export default Category;
