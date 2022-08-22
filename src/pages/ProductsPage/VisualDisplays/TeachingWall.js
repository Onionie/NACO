import React from 'react';
import styles from './TeachingWall.module.css';

import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';

import tw1 from '../../../assets/images/VisualBoards/TeachingWalls/teachingwall1.jpg';
import tw2 from '../../../assets/images/VisualBoards/TeachingWalls/teachingwall2.jpg';
import cbNmb from '../../../assets/images/VisualBoards/Finishes/cbNmb.jpg';

const TeachingWall = () => {
  const mainImages = [
    {
      id: 1,
      image: tw1,
      alt: 'teaching_wall1',
    },
    {
      id: 2,
      image: tw2,
      alt: 'teaching_wall2',
    },
  ];

  const availImages = [
    {
      id: 1,
      image: cbNmb,
      alt: 'available_finishes',
    },
  ];

  return (
    <>
      <ProductSection>
        <HeroProduct mainImages={mainImages} indicators={true} controls={true}>
          <HeroBody
            title="Teaching Walls"
            availImages={availImages}
            indicators={false}
            controls={false}
          >
            <li>
              Allows you to combine your cabinet casework with sliding boards.
            </li>
            <li>
              Instead of mounting sliding boards onto casework or walls, you can
              simplify them to create a more accessible combination.
            </li>
            <li>
              Comes in custom sizing and configurations where you can choose how
              it can accommodate your classroom setting.
            </li>
          </HeroBody>
        </HeroProduct>
      </ProductSection>
    </>
  );
};

export default TeachingWall;
