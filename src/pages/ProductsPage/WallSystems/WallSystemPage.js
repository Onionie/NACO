import React from 'react';
import styles from './WallSystemPage.module.css';
import { Link } from 'react-router-dom';
import SliderContent from '../../../components/ProductsPage/SliderContent';

import mb from '../../../assets/images/VisualBoards/MB.jpg';
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
    <SliderContent
      header="Wall Systems"
      products={tackwallSystems}
      slidesNum={2}
    />
  );
};

export default TackwallSystemPage;
