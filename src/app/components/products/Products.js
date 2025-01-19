import Image from 'next/image';
import React, { Suspense } from 'react';
import styles from './products.module.css'; // Import the CSS module
import ProductsList from './ProductList';


const Products = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsList />
    </Suspense>
  );
};

export default Products;
