import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TwoGrid from './TwoGrid';
import FeatureSlides from './FeatureSlides';
import FeatureBody from './FeatureBody';
import styles from './Feature.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {
  useEffect(() => {
    Aos.init({ delay: 50, duration: 1500 });
  }, []);
  return (
    <section className={styles.section}>
      <TwoGrid>
        <FeatureSlides
          image1="./images/products/vsd1.jpg"
          alt1="big-whiteboard"
          image2="./images/products/vsd2.jpg"
          alt2="whiteboard"
          image3="./images/products/vsd3.jpg"
          alt3="tackboard"
        />
        <div data-aos="fade-left">
          <FeatureBody
            title="Visual Display Boards"
            description="Nelson Adams Naco is a leading company with competitive pricing."
          >
            <div className={styles.dropdown_box}>
              <Link to="/products">
                <div className={styles.dropdown_button}>Shop Products</div>
              </Link>
            </div>
          </FeatureBody>
        </div>
      </TwoGrid>

      {/* Tables and Benches */}

      <TwoGrid data-aos="fade-up">
        <div data-aos="fade-right">
          <FeatureBody
            data-aos="fade-up"
            title="Tables and Benches"
            description="Our Tables and Benches are our leading products with competitive pricing."
          >
            <div className={styles.dropdown_box}>
              <Link to="/tables">
                <div className={styles.dropdown_button}>
                  Shop Tables and Benches
                </div>
              </Link>
            </div>
          </FeatureBody>
        </div>
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
          image1="./images/vendors/forbo.jpg"
          alt1="blackboard"
          image2="./images/vendors/guilfordmane.jpg"
          alt2="blackboard"
          image3="./images/vendors/koroseal.jpg"
          alt3="blackboard"
        />

        <div data-aos="fade-left">
          <FeatureBody
            title="Our Vendors"
            description="Nelson Adams Naco is proud to be partners with Koroseal, Forbo, parlumber, and Guilford mane."
          >
            <div className={styles.dropdown_box}>
              <Link to="/">
                <div className={styles.dropdown_button}>Learn More</div>
              </Link>
            </div>
          </FeatureBody>
        </div>
      </TwoGrid>
    </section>
  );
};

export default Feature;
