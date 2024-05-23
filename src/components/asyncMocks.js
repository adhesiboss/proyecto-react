const products = [
  { id: 1, name: 'Producto 1', category: 'motherboards' },
  { id: 2, name: 'Producto 2', category: 'motherboards' },
  { id: 3, name: 'Producto 3', category: 'micros' },
  { id: 4, name: 'Producto 4', category: 'micros' },
  { id: 5, name: 'Producto 5', category: 'gabinetes' },
  { id: 6, name: 'Producto 6', category: 'gabinetes' },
];

export const fetchItemsByCategory = async (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 1000);
  });
};


export const fetchAllItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const fetchItemById = async (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(itemId));
      resolve(product);
    }, 1000);
  });
};
