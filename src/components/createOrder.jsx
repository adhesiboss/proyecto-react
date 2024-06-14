import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

const createOrder = async (buyer, cartItems) => {
  const order = {
    buyer,
    items: cartItems.map(item => ({
      id: item.id,
      title: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    date: Timestamp.fromDate(new Date()),
    total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
  };

  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef.id;
};

export default createOrder;
