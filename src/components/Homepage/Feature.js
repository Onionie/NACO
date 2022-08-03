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
          <div className={styles.feature_text_box}>
            <div className={styles.title}>Visual Display Boards</div>
            <div className={styles.subtitle}>
              Nelson Adams Naco is a leading company with competitive pricing.
            </div>
            <div className={styles.description}>
              Markerboards/Chalkboards substrate construction consist of e3
              porcelain on 1/2" particleboard with optional .005 or .015
              moisture barrier backer, with standard satin clear anodized
              aluminum that include 2ea: C-4 side trim, standard CR-4 blade tray
              with radius edges.
              <ul>
                <li>
                  <ion-icon name="checkmark-outline"></ion-icon>&nbsp;
                  Chalkboards
                </li>
                <li>
                  <ion-icon name="checkmark-outline"></ion-icon>&nbsp;
                  Markerboards
                </li>
                <li>
                  <ion-icon name="checkmark-outline"></ion-icon>&nbsp;
                  Tackboards
                </li>
              </ul>
            </div>
            <div className={styles.feat_button_box}>
              <div className={styles.feat_button}>Shop Products &rarr;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
