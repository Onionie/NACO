import React from 'react';
import styles from './WallSystemPage.module.css';
import { Link } from 'react-router-dom';
import SliderContent from '../../../components/ProductsPage/SliderContent';

import fdw_main from '../../../assets/images/TackwallSystems/FDW/fdw_main.png';
import twp_main from '../../../assets/images/TackwallSystems/TWP/twp_main.png';
import mw_main from '../../../assets/images/TackwallSystems/MarkerWall/mw_main.png';

{
  /* <Link to={`/${prod.category}/${prod.item}`}>
  <div className="slide_title_box">
    <div className="slide_title">{prod.product}</div>
  </div>
</Link>; */
}
const TackwallSystemPage = () => {
  return (
    <div className={styles.wall_systems}>
      <div className={styles.systems_row}>
        <div className={styles.systems_card}>
          <img src={fdw_main} alt="forbo_directy_to_wall" />
          <Link
            to="/wall-systems/forbo-directly-to-wall"
            className={styles.system_title}
          >
            Forbo Directly to Wall
          </Link>
        </div>

        <div className={styles.systems_card}>
          <img src={twp_main} alt="tackwall_panel" />
          <Link
            to="/wall-systems/tackwall-panels"
            className={styles.system_title}
          >
            Tackwall Panel
          </Link>
        </div>

        <div className={styles.systems_card}>
          <img src={mw_main} alt="marker_wall" />
          <Link to="/wall-systems/marker-wall" className={styles.system_title}>
            Marker Wall
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TackwallSystemPage;
