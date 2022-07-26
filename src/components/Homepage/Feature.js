import React from 'react';
import TwoGrid from './TwoGrid';
import FeatureSlides from './FeatureSlides';
import FeatureBody from './FeatureBody';
import styles from './Feature.module.css';

const Feature = () => {
  return (
    <section className={styles.section}>
      <TwoGrid>
        <FeatureSlides
          image1="./images/products/blackboard.jpg"
          alt1="blackboard"
          image2="./images/products/markerboard.jpg"
          alt2="blackboard"
          image3="./images/products/Tackboard.jpg"
          alt3="blackboard"
        />
        <FeatureBody
          title="Visual Display Boards"
          description="Nelson Adams Naco is a leading company with competetitive pricing."
        >
          <div className={styles.dropdown_box}>
            <div className={styles.dropdown_button}>Dropdown Here</div>
            {/* <ul className={styles.dropdown_list}>
              <li>HOME</li>
              <li>Products</li>
              <li>Architect Corner</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul> */}
          </div>
        </FeatureBody>
      </TwoGrid>

      {/* Tables and Benches */}
      <TwoGrid>
        <FeatureBody
          title="Tables and Benches"
          description="Our Tables and Benches are our leading products with competetitive pricing."
        />
        <FeatureSlides
          image1="./images/tableAndBenches/tnb1.jpg"
          alt1="table1"
          image2="./images/tableAndBenches/tnb2.jpg"
          alt2="table2"
          image3="./images/tableAndBenches/tnb3.jpg"
          alt3="table3"
        />
      </TwoGrid>
      <TwoGrid>
        <FeatureSlides
          image1="./images/products/blackboard.jpg"
          alt1="blackboard"
          image2="./images/products/markerboard.jpg"
          alt2="blackboard"
          image3="./images/products/Tackboard.jpg"
          alt3="blackboard"
        />
        <FeatureBody
          title="Our Vendors"
          description="Nelson Adams Naco is proud to be partners with Koroseal, Forbo, parlumber, Guilford mane."
        />
      </TwoGrid>
    </section>
  );
};

export default Feature;
