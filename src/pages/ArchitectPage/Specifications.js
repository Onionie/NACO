import React from 'react';
import Libraries from '../../components/ArchitectsCorner/Libraries';

import { specifications } from './links';

const ProductData = () => {
  return (
    <Libraries title={'Specifications'}>
      {specifications.map((spec) => (
        <li key={spec.id}>
          <a target="_blank" rel="noopener noreferrer" href={spec.link}>
            <b>{spec.series}</b> {spec.product}
          </a>
        </li>
      ))}
    </Libraries>
  );
};

export default ProductData;
