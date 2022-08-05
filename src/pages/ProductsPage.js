import React from 'react';
import styles from './ProductsPage.module.css';
import SliderContent from '../components/ProductsPage/SliderContent';

// import images
import chalkboard from '../assets/images/VisualBoards/chalkboard.jpg';
import bulletinBoard from '../assets/images/VisualBoards/enclosedBulletinBoard.jpg';
import fTackBoard from '../assets/images/VisualBoards/forboBlueTackBoard.jpg';
import hingeDoor from '../assets/images/VisualBoards/hingedDoorDisplay.jpg';
import markerBoard from '../assets/images/VisualBoards/markerBoardHorizontal.jpg';
import mb from '../assets/images/VisualBoards/MB.jpg';
import mobileMb from '../assets/images/VisualBoards/mobileMb.jpg';
import tackBoard from '../assets/images/VisualBoards/tackboard.jpg';
import vertical from '../assets/images/VisualBoards/verticalSliders.jpg';

const ProductsPage = () => {
  const slider1 = [
    {
      product: 'Chalkboard',
      imageSrc: chalkboard,
    },
    {
      product: 'Bulletin Board Natural Cork',
      imageSrc: bulletinBoard,
    },
    {
      product: 'Forbo Blue TackBoard',
      imageSrc: fTackBoard,
    },
    {
      product: 'Bulletin Board Forbo',
      imageSrc: hingeDoor,
    },
    {
      product: 'Horizontal Sliders',
      imageSrc: markerBoard,
    },
    {
      product: 'Markerboards',
      imageSrc: mb,
    },
    {
      product: 'Mobile Markerboard',
      imageSrc: mobileMb,
    },
    {
      product: 'Tackboard Natural Board',
      imageSrc: tackBoard,
    },
    {
      product: 'Vertical Sliders',
      imageSrc: vertical,
    },
  ];
  return (
    <section className={styles.section}>
      <SliderContent header="Visual Display Board" images={slider1} />
    </section>
  );
};

export default ProductsPage;
