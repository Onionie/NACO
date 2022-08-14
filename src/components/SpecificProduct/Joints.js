import React from 'react';
import styles from './Joints.module.css';

import dividerBar from '../../assets/images/VisualBoards/Markerboards/divider_bar.jpg';
import hBar from '../../assets/images/VisualBoards/Markerboards/h_bar.jpg';
import splineJoint from '../../assets/images/VisualBoards/Markerboards/spline_joint.jpg';

const Joints = () => {
  return (
    <div className={styles.joints_box} data-aos="slide-up">
      <div className={styles.customize_joints_title}>
        Joints for boards over 16' in length
      </div>
      <div className={styles.customize_joints_options_box}>
        <div className={styles.customize_joints_image}>
          <img src={splineJoint} alt="Spline_Joint" />
          <div>Spline Joint</div>
        </div>
        <div className={styles.customize_joints_image}>
          <img src={hBar} alt="H_Bar" />
          <div>H-Bar</div>
        </div>
        <div className={styles.customize_joints_image}>
          <img src={dividerBar} alt="Divider_bar" />
          <div>Divider Bar</div>
        </div>
      </div>
    </div>
  );
};

export default Joints;
