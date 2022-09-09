import React from 'react';
import SliderContent from '../../../components/ProductsPage/SliderContent';

import mb from '../../../assets/images/VisualBoards/MB.jpg';

const TackwallSystemPage = () => {
  const tackwallSystems = [
    {
      id: 1,
      product: 'Forbo Directly to Wall (FDW)',
      imageSrc: mb,
      category: 'visual',
      item: 'markerboard',
    },
    {
      id: 1,
      product: 'Forbo',
      imageSrc: mb,
      category: 'visual',
      item: 'markerboard',
    },
    {
      id: 1,
      product: 'Forbo',
      imageSrc: mb,
      category: 'visual',
      item: 'markerboard',
    },
    {
      id: 1,
      product: 'Forbo',
      imageSrc: mb,
      category: 'visual',
      item: 'markerboard',
    },
  ];

  return (
    <SliderContent
      header="Tackwall Systems"
      products={tackwallSystems}
      slidesNum={3}
    />
  );
};

export default TackwallSystemPage;
