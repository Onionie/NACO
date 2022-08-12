import React from 'react';
import ProductSection from '../../../components/SpecificProduct/ProductSection';
import HeroProduct from '../../../components/SpecificProduct/HeroProduct';
import HeroBody from '../../../components/SpecificProduct/HeroBody';

import vs1 from '../../../assets/images/VisualBoards/VerticalSlider/vertical_slider1.jpg';
import vs2 from '../../../assets/images/VisualBoards/VerticalSlider/vertical_slider2.jpg';
import vs3 from '../../../assets/images/VisualBoards/VerticalSlider/vertical_sliders3.jpg';

const VerticalSliders = () => {
  const title = 'Vertical Sliders';

  const mainImages = [
    {
      id: 1,
      image: vs1,
      alt: 'vertical_slider1',
    },
    {
      id: 2,
      image: vs2,
      alt: 'vertical_slider2',
    },
    // {
    //   id: 3,
    //   image: vs3,
    //   alt: 'vertical_slider3',
    // },
  ];

  return (
    <>
      <ProductSection>
        <HeroProduct mainImages={mainImages} indicators={false} controls={true}>
          <HeroBody title="Vertical Sliders">
            <li>
              Allows you to have multiple panels and help with rooms with
              limited space.
            </li>
            <li>
              Consist of e3 porcelain on 1/2" fiberboard with .015 moisture
              barrier backer.
            </li>
            <li> Add functionality to teaching and communication centers.</li>
            <li>
              Custom made to any dimension, configuration or specification.
            </li>
            <li>
              Combines an aluminum housing wall space with a selection of
              sliding markerboards, chalkboards and tackboards with optional
              fixed back panel.
            </li>
            <li>
              The custom designs maximize display space and increase writing
              surface.
            </li>
            <li>
              They are suited for new construction and renovation projects.
            </li>
          </HeroBody>
        </HeroProduct>
      </ProductSection>
    </>
  );
};

export default VerticalSliders;
