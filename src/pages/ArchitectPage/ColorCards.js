import React from 'react';
import Libraries from '../../components/ArchitectsCorner/Libraries';

import { colorCards } from './links';

const ColorCards = () => {
  return (
    <Libraries title={'Color Cards'}>
      {colorCards.map((color) => (
        <li key={color.id}>
          <a target="_blank" rel="noopener noreferrer" href={color.link}>
            <b>{color.series}</b> {color.product}
          </a>
        </li>
      ))}
    </Libraries>
  );
};

export default ColorCards;
