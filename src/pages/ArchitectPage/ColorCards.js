import React from 'react';
import styles from './ColorCards.module.css';

import { colorCards } from './links';

const ColorCards = () => {
  return (
    <section className={styles.colorCards_section}>
      <div className={styles.colorCards_title}>Color Cards</div>

      <div className={styles.colorCards_list_box}>
        <ul className={styles.colorCards_list}>
          {colorCards.map((color) => (
            <li key={color.id}>
              <a target="_blank" rel="noopener noreferrer" href={color.link}>
                <b>{color.series}</b> {color.product}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorCards;
