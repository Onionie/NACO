import React from 'react';
import styles from './EscribanoPage.module.css';

import ReactPlayer from 'react-player/youtube';

const EscribanoPage = () => {
  return (
    <section className={styles.section_escribano}>
      <div className={styles.header_box}>
        <div className={styles.header_title}>Escribano</div>
        <div className={styles.header_subtitle}>
          A fun and interactive board that is evolving the world of Education.
        </div>
      </div>
      <div className={styles.player_wrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ne5OEKFoLm8"
          className={styles.react_player}
          playing
          width="60%"
          height="60%"
          controls={true}
          volume={1}
          muted={true}
        />
      </div>

      <div className={styles.feature_box}>
        <div className={styles.feature_item}>
          <div className={styles.feature_title}>Megameetings</div>
          <div className={styles.feature_description}>
            A virtual conference system that allows the student to participate
            in a face-to-face virtual class. Students can answer from their
            tablets or computer, and the answer will be displayed on the
            whiteboard! Students will always feel part of the class whether they
            are in person or at home.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscribanoPage;
