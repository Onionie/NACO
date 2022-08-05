import React from 'react';
import styles from './ProductsPage.module.css';
import SliderContent from '../components/ProductsPage/SliderContent';

// import Visual Display Images
import chalkboard from '../assets/images/VisualBoards/chalkboard.jpg';
import bulletinBoard from '../assets/images/VisualBoards/enclosedBulletinBoard.jpg';
import fTackBoard from '../assets/images/VisualBoards/forboBlueTackBoard.jpg';
import hingeDoor from '../assets/images/VisualBoards/hingedDoorDisplay.jpg';
import markerBoard from '../assets/images/VisualBoards/markerBoardHorizontal.jpg';
import mb from '../assets/images/VisualBoards/MB.jpg';
import mobileMb from '../assets/images/VisualBoards/mobileMb.jpg';
import tackBoard from '../assets/images/VisualBoards/tackboard.jpg';
import vertical from '../assets/images/VisualBoards/verticalSliders.jpg';

// import Tables and Benches Images
import ctb from '../assets/images/TablesAndBenches/ctb.JPG';
import inWall from '../assets/images/TablesAndBenches/inWall.JPG';
import logoTable from '../assets/images/TablesAndBenches/logoTable.jpg';
import mobileTable from '../assets/images/TablesAndBenches/mobileTable.JPG';
import surfaceMount from '../assets/images/TablesAndBenches/surfaceMount.jpg';

const ProductsPage = () => {
  const slider1 = [
    {
      id: 1,
      product: 'Chalkboard',
      imageSrc: chalkboard,
    },
    {
      id: 2,
      product: 'Bulletin Board Natural Cork',
      imageSrc: bulletinBoard,
    },
    {
      id: 3,
      product: 'Forbo Blue TackBoard',
      imageSrc: fTackBoard,
    },
    {
      id: 4,
      product: 'Bulletin Board Forbo',
      imageSrc: hingeDoor,
    },
    {
      id: 5,
      product: 'Horizontal Sliders',
      imageSrc: markerBoard,
    },
    {
      id: 6,
      product: 'Markerboards',
      imageSrc: mb,
    },
    {
      id: 7,
      product: 'Mobile Markerboard',
      imageSrc: mobileMb,
    },
    {
      id: 8,
      product: 'Tackboard Natural Board',
      imageSrc: tackBoard,
    },
    {
      id: 9,
      product: 'Vertical Sliders',
      imageSrc: vertical,
    },
  ];

  const slider2 = [
    {
      id: 1,
      product: 'Convertible Table',
      imageSrc: ctb,
    },
    {
      id: 2,
      product: 'In Wall Tables & Benches',
      imageSrc: inWall,
    },
    {
      id: 3,
      product: 'Round Tables',
      imageSrc: logoTable,
    },
    {
      id: 4,
      product: 'Rectangular Mobile Table',
      imageSrc: mobileTable,
    },
    {
      id: 5,
      product: 'Surface Wall Tables',
      imageSrc: surfaceMount,
    },
  ];
  return (
    <section className={styles.section}>
      <SliderContent
        header="Visual Display Board"
        images={slider1}
        slidesNum={5}
      />
      <SliderContent header="TablesAndBenches" images={slider2} slidesNum={4} />
    </section>
  );
};

export default ProductsPage;
