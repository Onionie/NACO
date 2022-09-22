import React from 'react';
import styles from './InstallationInstructions.module.css';

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
      <div className={styles.instruction_list_box}></div>
    </section>
  );
};

export default InstallationInstructions;
