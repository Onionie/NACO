import React from 'react';
import styles from './CombinationBoards.module.css';

import combination from '../../assets/images/VisualBoards/Markerboards/combination.jpg';

const CombinationBoards = () => {
  return (
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
  );
};

export default CombinationBoards;
