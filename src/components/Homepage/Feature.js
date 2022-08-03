import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import styles from './Feature.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {
  useEffect(() => {
    Aos.init({ delay: 50, duration: 1500 });
  }, []);
  return (
    <section className={styles.features}>
      <div className={styles.features_box}>
        {/* Feature 1 */}
        <div className={styles.feature_1}>
          <div className={styles.feature_image_box}>
            <div className={styles.main_image}>
              <img
                src="./images/products/whiteboard_big.jpg"
                alt="whiteboard"
              />
            </div>
            <div className={styles.sub_images}>
              <div>
                <img
                  src="./images/products/blackboard_small.jpg"
                  alt="whiteboard"
                />
              </div>
              <div>
                <img
                  src="./images/products/whiteboard_small.jpg"
                  alt="whiteboard"
                />
              </div>
              <div>
                <img
                  src="./images/products/whiteboard_small1.jpg"
                  alt="whiteboard"
                />
              </div>
            </div>
          </div>

          {/* Feature-1 Text Box */}
        </div>
      </div>
    </section>
  );
};

export default Feature;
