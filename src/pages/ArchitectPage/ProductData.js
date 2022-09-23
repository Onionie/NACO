import React from 'react';
import Libraries from '../../components/ArchitectsCorner/Libraries';

import { prodData } from './links';

const ProductData = () => {
  return (
    <Libraries title={'Product Data'}>
      {prodData.map((product) => (
        <li key={product.id}>
          <a target="_blank" rel="noopener noreferrer" href={product.link}>
            <b>{product.series}</b> {product.product}
          </a>
        </li>
      ))}
    </Libraries>
  );
};

export default ProductData;
