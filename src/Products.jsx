import React from 'react'
import cars from './Car';

function Products() {
  return (
    <ul>
     {cars.map(car => <li key={car}>{car}</li>)}
    </ul>
  );
}

export default Products;
