import React from 'react';
import SliderContent from '../../../components/ProductsPage/SliderContent';

import mb from '../../../assets/images/VisualBoards/MB.jpg';
import fdw_main from '../../../assets/images/TackwallSystems/FDW/fdw_main.png';
import twp_main from '../../../assets/images/TackwallSystems/TWP/twp_main.png';
import mw_main from '../../../assets/images/TackwallSystems/MarkerWall/mw_main.png';

const TackwallSystemPage = () => {
  const tackwallSystems = [
    {
      id: 1,
      product: 'Forbo Directly to Wall (FDW)',
      imageSrc: fdw_main,
      category: 'wall-systems',
      item: 'forbo-directly-to-wall',
    },
    {
      id: 2,
      product: 'Tackwall Panels (TWP)',
      imageSrc: twp_main,
      category: 'wall-systems',
      item: 'tackwall-panels',
    },
    {
      id: 3,
      product: 'Marker Wall',
      imageSrc: mw_main,
      category: 'wall-systems',
      item: 'marker-wall',
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
      header="Wall Systems"
      products={tackwallSystems}
      slidesNum={3}
    />
  );
};

export default TackwallSystemPage;
