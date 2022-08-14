import React from 'react';
import styles from './PorcelainSection.module.css';

// Images
import grid from '../../assets/images/VisualBoards/Finishes/grid_grid.jpg';
import polarGrid from '../../assets/images/VisualBoards/Finishes/grid_polar_grid.jpg';
import staffLines from '../../assets/images/VisualBoards/Finishes/grid_staff_lines.jpg';

const PorcelainSection = (props) => {
  return (
    <div className={styles.section_customize_porcelain} data-aos="slide-up">
      <div className={styles.customize_porcelain_title}>Porcelain Finishes</div>
      <div className={styles.porcelain_finishes_box}>
        {/* Porcelain */}
        <div className={styles.porcelain_finishes_options}>
          <div className={styles.porcelain_finishes_colors}>
            <div className={styles.porcelain_colors_available_box}>
              <div className={styles.porcelain_options_title}>
                Available Colors:
              </div>
              <div className={styles.finishes_colors}>
                {props.colors.map((color) => {
                  return (
                    <div
                      key={color.id}
                      className={styles.customize_porcelain_image}
                    >
                      <img src={color.imgSrc} alt="whiteboard_white" />
                      <div>{color.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.porcelain_finishes_available_box}>
              <div className={styles.porcelain_options_title}>
                Available Finishes:
              </div>
              <ul className={styles.porcelain_finishes_available}>
                {props.finishes.map((finish) => {
                  return <li key={finish.id}>{finish.text}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.porcelain_grid_options}>
          <div className={styles.porcelain_options_title}>Available Grids:</div>
          <div className={styles.porcelain_grid_box}>
            <div className={styles.customize_porcelain_image}>
              <img src={staffLines} alt="staff_lines" />
              <div>Staff Lines</div>
            </div>
            <div className={styles.customize_porcelain_image}>
              <img src={grid} alt="grid" />
              <div>Grid</div>
            </div>
            <div className={styles.customize_porcelain_image}>
              <img src={polarGrid} alt="polar_grid" />
              <div>Polar Grid</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorcelainSection;
