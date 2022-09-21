import React from 'react';
import styles from './AutoCAD.module.css';

import { libraries, tnb } from './links';

const ArchitectCornerPage = () => {
  return (
    <div className={styles.architects_corner}>
      <div className={styles.architects_title}>AutoCAD Library</div>

      <div className={styles.ac_grid}>
        {/* Trims */}
        <div>
          <div className={styles.ac_title}>Trims, Sliders and More</div>
          <ul className={styles.library_list}>
            {libraries.map((library) => (
              <li key={library.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={library.link}
                >
                  <b>{library.series}</b> {library.product}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* TnB */}
        <div>
          <div className={styles.ac_title}>Tables and benches</div>
          <ul className={styles.library_list}>
            {tnb.map((tb) => (
              <li key={tb.id}>
                <a target="_blank" rel="noopener noreferrer" href={tb.link}>
                  <b>{tb.series}</b> {tb.product}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArchitectCornerPage;
