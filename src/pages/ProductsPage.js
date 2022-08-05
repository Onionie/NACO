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

  const slider2 = [
    {
      product: 'Convertible Table',
      imageSrc: ctb,
    },
    {
      product: 'In Wall Tables & Benches',
      imageSrc: inWall,
    },
    {
      product: 'Round Tables',
      imageSrc: logoTable,
    },
    {
      product: 'Rectangular Mobile Table',
      imageSrc: mobileTable,
    },
    {
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
