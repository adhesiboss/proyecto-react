export const products = [
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

export const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const fetchItemById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(item => item.id === parseInt(id)));
    }, 500);
  });
};

export const fetchItemsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(item => item.category === category));
    }, 500);
  });
};
