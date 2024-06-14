import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js'; 
const items = [
  {
    id: 1,
    name: 'Plan 1: Básico Semanal',
    category: 'plan1',
    description: 'Acceso a videos de yoga por una semana.',
  },
  {
    id: 2,
    name: 'Plan 2: Intermedio Trimestral',
    category: 'plan2',
    description: 'Acceso a videos de yoga por tres meses.',
  },
  {
    id: 3,
    name: 'Plan 3: Avanzado Semestral',
    category: 'plan3',
    description: 'Acceso a videos de yoga por seis meses.',
  },
];

const addItemsToFirestore = async () => {
  const itemsCollection = collection(db, 'items');

  for (const item of items) {
    try {
      await addDoc(itemsCollection, item);
      console.log(`Item ${item.name} added successfully`);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
};

addItemsToFirestore();
