import React from 'react';
import styles from './InstallationInstructions.module.css';

import { instruction1, instruction2, instruction3 } from './links';

const InstallationInstructions = () => {
  return (
    <section className={styles.instruction_section}>
      <div className={styles.instruction_title}>Installation Instructions</div>

      <div className={styles.instruction_video_box}>
        <div className={styles.instruction_video_title}>
          D-SERIES TABLES & BENCHES / HANDLING, CARE AND OPERATION
        </div>
        <div className={styles.instruction_video_grid}>
          <div>
            <div className={styles.iframe_container}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/j_y-2ZXXN8M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.instruction_video_body}>
            <div className={styles.instruction_video_body_title}>
              Standard procedures and guidelines instructional video
            </div>
            <div className={styles.instruction_video_body_desc}>
              Special features of our tables & benches, locking mechanisms and
              some additional valuable tips
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instruction_list_box}>
        <div className={styles.instruction_list_title}>
          Installation Instructions in PDF
        </div>
        <div className={styles.instruction_list_grid}>
          <ul className={styles.instruction_list}>
            {instruction1.map((ins1) => (
              <li key={ins1.id}>
                <a target="_blank" rel="noopener noreferrer" href={ins1.link}>
                  <b>{ins1.series}</b> {ins1.product}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.instruction_list}>
            {instruction2.map((ins2) => (
              <li key={ins2.id}>
                <a target="_blank" rel="noopener noreferrer" href={ins2.link}>
                  <b>{ins2.series}</b> {ins2.product}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.instruction_list}>
            {instruction3.map((ins3) => (
              <li key={ins3.id}>
                <a target="_blank" rel="noopener noreferrer" href={ins3.link}>
                  <b>{ins3.series}</b> {ins3.product}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InstallationInstructions;
