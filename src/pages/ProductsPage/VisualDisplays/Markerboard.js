import React from 'react';
import styles from './Markerboard.module.css';
import Carousel from 'react-bootstrap/Carousel';

import markerboard from '../../../assets/images/VisualBoards/MB.jpg';
import standard from '../../../assets/images/VisualBoards/Markerboards/standard.jpg';
import box from '../../../assets/images/VisualBoards/Markerboards/box.jpg';
import maprail from '../../../assets/images/VisualBoards/Markerboards/maprail.jpg';
import maprail2 from '../../../assets/images/VisualBoards/Markerboards/maprail_2.jpg';
import c4trim from '../../../assets/images/VisualBoards/Markerboards/c4_trim.jpg';
import c18trim from '../../../assets/images/VisualBoards/Markerboards/c18_trim.jpg';
import flagholder from '../../../assets/images/VisualBoards/Markerboards/flag_holder.jpg';
import rollerbracket from '../../../assets/images/VisualBoards/Markerboards/roller_bracket.jpg';
import maphook from '../../../assets/images/VisualBoards/Markerboards/map_hook.jpg';
import combination from '../../../assets/images/VisualBoards/Markerboards/combination.jpg';

const Markerboard = () => {
  return (
    <section className={styles.section_markerboard}>
      <div className={styles.markerboard_box}>
        <div className={styles.markerboard_image_box}>
          <img src={markerboard} alt="markerboard" />
          {/* <Carousel className={styles.markerboard_carousel} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={chalkboard}
                alt="First slide"
              />
            </Carousel.Item> */}
          {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item> */}
          {/* </Carousel> */}
        </div>
        <div className={styles.markerboard_body_box}>
          <div className={styles.markerboard_body_title}>Markerboards</div>
          <div className={styles.markerboard_body_description}>
            <ul>
              <li>
                Porcelain enamel steel writing surface with aluminum trim.
              </li>
              <li>
                1/2" particleboard with optional .005 or .015 moisture barrier
                backer.
              </li>
              <li>
                Standard satin clear anodized aluminum that include 2ea: C-4 or
                C-18 side trim, standard CR-4 blade tray with radius edges.
              </li>
              <li>
                Optional 1" or 2" map-rail with various insert options: natural
                cork, Forbo or vinyl covered natural cork insert at additional
                cost.
              </li>
              <li>
                All aluminum is 6063-T5 alloy that comes in satin standard clear
                anodized color.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className={styles.product_specifications}>
        <div className={styles.product_specifications_title}>
          Product Information
        </div>
        <div className={styles.markerboard_sizes_box}>
          <div className={styles.markerboard_sizes_title}>
            Sizes Available (HxW):
          </div>
          <ul className={styles.markerboard_sizes_list}>
            <li>3' x 4'</li>
            <li>4' x 4'</li>
            <li>4' x 6'</li>
            <li>4' x 7'</li>
            <li>4' x 8'</li>
            <li>4' x 9'</li>
            <li>4' x 10'</li>
            <li>4' x 11'</li>
            <li>4' x 12'</li>
            <li>4' x 13'</li>
            <li>4' x 14'</li>
            <li>4' x 15'</li>
            <li>4' x 16'</li>
          </ul>
        </div>
        <div className={styles.customize_boards_box}>
          <div className={styles.customize_box_1}>
            <div className={styles.customize_options}>
              <div className={styles.customize_options_title}>Tray Options</div>
              <div className={styles.customize_images}>
                <div>
                  <img src={standard} alt="standard_tray" />
                  <div>Standard</div>
                </div>
                <div>
                  <img src={box} alt="box_tray" />
                  <div>box</div>
                </div>
              </div>
            </div>
            <div className={styles.customize_options}>
              <div className={styles.customize_options_title}>Map Rail</div>
              <div className={styles.customize_images}>
                <div>
                  <img src={maprail} alt="maprail" />
                  <div>1" Maprail</div>
                </div>
                <div>
                  <img src={maprail2} alt="maprail" />
                  <div>2" Maprail</div>
                </div>
              </div>
            </div>
            <div className={styles.customize_options}>
              <div className={styles.customize_options_title}>
                Aluminum Trim
              </div>
              <div className={styles.customize_images}>
                <div>
                  <img src={c4trim} alt="c4_trim" />
                  <div>c4-Aluminum Trim</div>
                </div>
                <div>
                  <img src={c18trim} alt="c18_trim" />
                  <div>c18-Aluminum Trim</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.customize_box_2}>
            <div>
              <div className={styles.customize_options_title}>Accessories</div>
              <div className={styles.customize_accessories_options}>
                <div className={styles.customize_accessories_image}>
                  <img src={flagholder} alt="flag_holder" />
                  <div>Flag Holder</div>
                </div>
                <div className={styles.customize_accessories_image}>
                  <img src={rollerbracket} alt="roller_bracket" />
                  <div>Roller Bracket</div>
                </div>
                <div className={styles.customize_accessories_image}>
                  <img src={maphook} alt="map_hook" />
                  <div>Map Hook</div>
                </div>
              </div>
            </div>

            <div className={styles.combination_boards}>
              <div className={styles.customize_options_title}>
                Typical Combination Boards
                <br />
                (Also Available with Sliding Boards)
                <br />
                <br />
              </div>
              <img src={combination} alt="combination_boards" />
              <div className={styles.akronym_info}>
                <ul>
                  <li>MB = Markerboard</li>
                  <li>CB = Chalkboard</li>
                  <li>TB = Tackboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markerboard;
