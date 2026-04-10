import React from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Laptop', price: 10.99, inStock: true },
    { id: 2, name: 'Phone', price: 20.99, inStock: false },
    { id: 3, name: 'Tablet', price: 15.99, inStock: true },
  ]);
  const [filter, setFilter] = React.useState('all'); // State to manage the current filter
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // For 'all', return all products
  });
  const removeButton = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  // for some reason "outOfStockClass" isnt applying as quoted but as _outOfStockClass_c43253 in the tests but works in browser, 
  // not sure how to fix but its showing the correct output in browser
  // removeButton also works but tests arent recognizing it, not sure why since it removes the first product in the list from dashboard on click
  return(
    <div>
      <h1>Product Dashboard</h1>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
        <button onClick={() => removeButton(products[0].id)}>Remove</button>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  )
};

export default App;
