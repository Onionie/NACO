import React from 'react';
import SliderContent from '../../../components/ProductsPage/SliderContent';

// import Visual Display Images
import chalkboard from '../../../assets/images/VisualBoards/chalkboard_black.jpg';
import fTackBoard from '../../../assets/images/VisualBoards/ForboTackboard/forboBlueTackBoard_main.jpg';
import hingeDoor from '../../../assets/images/VisualBoards/hingedDoorDisplay.jpg';
import horizontalSliders from '../../../assets/images/VisualBoards/HorizontalSlider/horizontal_slider.jpg';
import markerBoards from '../../../assets/images/VisualBoards/Markerboards/MB.jpg';
import revMobMB from '../../../assets/images/VisualBoards/reversible_mobileMB.jpg';
import tTypeMB from '../../../assets/images/VisualBoards/mobileMb_T.jpg';
import tackBoard from '../../../assets/images/VisualBoards/tackboard.jpg';
import vertical from '../../../assets/images/VisualBoards/VerticalSlider/verticalSliders.jpg';

const ProductsPage = () => {
  const visualDisplayBoards = [
    {
      id: 1,
      product: 'Markerboards',
      imageSrc: markerBoards,
      category: 'visual',
      item: 'markerboard',
    },
    {
      id: 2,
      product: 'Vertical Sliders',
      imageSrc: vertical,
      category: 'visual',
      item: 'vertical-sliders',
    },
    {
      id: 3,
      product: 'Horizontal Sliders',
      imageSrc: horizontalSliders,
      category: 'visual',
      item: 'horizontal-sliders',
    },
    {
      id: 4,
      product: 'Chalkboard',
      imageSrc: chalkboard,
      category: 'visual',
      item: 'chalkboard',
    },
    {
      id: 5,
      product: 'Tackboard',
      imageSrc: tackBoard,
      category: 'visual',
      item: 'tackboard',
    },
    {
      id: 6,
      product: 'Forbo TackBoard',
      imageSrc: fTackBoard,
      category: 'visual',
      item: 'tackboard-forbo',
    },
    {
      id: 7,
      product: 'Enclosed Bulletin Board',
      imageSrc: hingeDoor,
      category: 'visual',
      item: 'enclosed-bulletin-board',
    },
    {
      id: 8,
      product: 'Reversible Mobile Markerboard',
      imageSrc: revMobMB,
      category: 'visual',
      item: 'mobile-markerboard-reversible',
    },
    {
      id: 9,
      product: 'Mobile Markerboard T Type',
      imageSrc: tTypeMB,
      category: 'visual',
      item: 'mobile-markerboard-t-type',
    },
  ];

  return (
    <SliderContent
      header="Visual Display Boards"
      products={visualDisplayBoards}
      slidesNum={5}
    />
  );
};

export default ProductsPage;
