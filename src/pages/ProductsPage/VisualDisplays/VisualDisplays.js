import React from 'react';
import styles from './VisualDisplays.module.css';
import SliderContent from '../../../components/ProductsPage/SliderContent';

// import Visual Display Images
import chalkboard from '../../../assets/images/VisualBoards/chalkboard.jpg';
import bulletinBoard from '../../../assets/images/VisualBoards/enclosedBulletinBoard.jpg';
import fTackBoard from '../../../assets/images/VisualBoards/forboBlueTackBoard.jpg';
import hingeDoor from '../../../assets/images/VisualBoards/hingedDoorDisplay.jpg';
import markerBoard from '../../../assets/images/VisualBoards/markerBoardHorizontal.jpg';
import mb from '../../../assets/images/VisualBoards/MB.jpg';
import mobileMb from '../../../assets/images/VisualBoards/mobileMb.jpg';
import tackBoard from '../../../assets/images/VisualBoards/tackboard.jpg';
import vertical from '../../../assets/images/VisualBoards/verticalSliders.jpg';

const ProductsPage = () => {
  const visualDisplayBoards = [
    {
      id: 6,
      product: 'Markerboards',
      imageSrc: mb,
      category: 'visual',
      item: 'markerboard',
    },
    {
      id: 9,
      product: 'Vertical Sliders',
      imageSrc: vertical,
      category: 'visual',
      item: 'vertical_sliders',
    },
    {
      id: 1,
      product: 'Chalkboard',
      imageSrc: chalkboard,
      category: 'visual',
      item: 'chalkboard',
    },
    {
      id: 2,
      product: 'Bulletin Board Natural Cork',
      imageSrc: bulletinBoard,
      category: 'visual',
      item: 'bulletin_board_natural_cork',
    },
    {
      id: 3,
      product: 'Forbo Blue TackBoard',
      imageSrc: fTackBoard,
      category: 'visual',
      item: 'tackboard_forbo_blue',
    },
    {
      id: 4,
      product: 'Bulletin Board Forbo',
      imageSrc: hingeDoor,
      category: 'visual',
      item: 'bulletin_board_forbo',
    },
    {
      id: 5,
      product: 'Horizontal Sliders',
      imageSrc: markerBoard,
      category: 'visual',
      item: 'horizontal_sliders',
    },
    {
      id: 7,
      product: 'Mobile Markerboard',
      imageSrc: mobileMb,
      category: 'visual',
      item: 'markerboard_mobile',
    },
    {
      id: 8,
      product: 'Tackboard Natural Board',
      imageSrc: tackBoard,
      category: 'visual',
      item: 'tackboard_natural_board',
    },
  ];

  return (
    <section className={styles.section}>
      <SliderContent
        header="Visual Display Boards"
        products={visualDisplayBoards}
        slidesNum={5}
      />
    </section>
  );
};

export default ProductsPage;
