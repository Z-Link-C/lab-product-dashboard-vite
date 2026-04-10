import React from 'react';
import ProductList from './components/ProductList';
import db from '../db.json';
const App = () => {
  const [products, setProducts] = React.useState(db.products);
  
  const [filter, setFilter] = React.useState('all'); // State to manage the current filter
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // For 'all', return all products
  });
 
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
      </div>
      <ProductList products={filteredProducts} />
    </div>
  )
};

export default App;
