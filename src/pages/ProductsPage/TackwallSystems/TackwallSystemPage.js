import React from 'react';
import SliderContent from '../../../components/ProductsPage/SliderContent';

import mb from '../../../assets/images/VisualBoards/MB.jpg';
import fdw_main from '../../../assets/images/TackwallSystems/FDW/fdw_main.png';

const TackwallSystemPage = () => {
  const tackwallSystems = [
    {
      id: 1,
      product: 'Forbo Directly to Wall (FDW)',
      imageSrc: fdw_main,
      category: 'tackwall-systems',
      item: 'forbo-directly-to-wall',
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
