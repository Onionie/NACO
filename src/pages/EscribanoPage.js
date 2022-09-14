import React from 'react';
import styles from './EscribanoPage.module.css';

import ReactPlayer from 'react-player/youtube';

import iconMm from '../assets/images/Escribano/icons/megaMeetings.png';
import iconWww from '../assets/images/Escribano/icons/www.png';
import iconVr from '../assets/images/Escribano/icons/voiceRecognition.png';

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
          <div className={styles.feature_icon}>
            <img src={iconMm} alt="icon_megameetings" />
          </div>
          <div className={styles.feature_title}>MegaMeetings</div>
          <p className={styles.feature_description}>
            A virtual conference system that allows the student to participate
            in a face-to-face virtual class. <br /> Students can answer from
            their tablets or computer, and the answer will be displayed on the
            whiteboard! And they will always feel part of the class whether they
            are in person or at home.
          </p>
        </div>
        <div className={styles.feature_item}>
          <div className={styles.feature_icon}>
            <img src={iconWww} alt="icon_internet" />
          </div>
          <div className={styles.feature_title}>MegaMeetings</div>
          <p className={styles.feature_description}>
            Navigate the web with our easy to access app! Set your favorite
            search engine and browse the Internet to search for complementary
            information and images.
          </p>
        </div>
        <div className={styles.feature_item}>
          <div className={styles.feature_icon}>
            <img src={iconVr} alt="icon_voice_recognition" />
          </div>
          <div className={styles.feature_title}>MegaMeetings</div>
          <p className={styles.feature_description}>
            <b>Patricia</b> will always be available when the user wants to
            quickly open an application, navigate between pages, active a tool
            or use any other functions! The voice recognition assistant will
            help in dictations, web search and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EscribanoPage;
