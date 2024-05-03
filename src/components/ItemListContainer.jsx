import  './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
  return (
    <>
        <h2 className='item-list-container'>{greeting}</h2>

    </>
  );
}