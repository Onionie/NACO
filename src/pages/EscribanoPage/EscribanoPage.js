import React, { useEffect } from 'react';
import styles from './EscribanoPage.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import ReactPlayer from 'react-player/youtube';
import { Parallax, Background } from 'react-parallax';

import FeaturesSect from './FeaturesSect';

import Aos from 'aos';
import 'aos/dist/aos.css';

import deskBg from '../../assets/images/esc_bg_1.jpg';
import deskBg2 from '../../assets/images/esc_bg_7.png';
import featBackground from '../../assets/images/Escribano/features_bg.png';

import educators from '../../assets/images/Escribano/escribano_1.png';
import butterfly from '../../assets/images/Escribano/butterfly.png';
import escVideo from '../../assets/images/Escribano/escribano_vid.mp4';
import escLogo from '../../assets/images/Escribano/esc_logo.png';

import iconMm from '../../assets/images/Escribano/icons/megaMeetings.png';
import iconWww from '../../assets/images/Escribano/icons/www.png';
import iconVr from '../../assets/images/Escribano/icons/voiceRecognition.png';

// import bg_1 from '../../assets/images/Escribano/background/bg_1.png';
// import bg_2 from '../../assets/images/Escribano/background/bg_2.png';
// import bg_3 from '../../assets/images/Escribano/background/bg_3.png';
// import bg_4 from '../../assets/images/Escribano/background/bg_4.png';
// import bg_5 from '../../assets/images/Escribano/background/bg_5.png';
// import bg_6 from '../../assets/images/Escribano/background/bg_6.png';
// import bg_7 from '../../assets/images/Escribano/background/bg_7.png';
// import bg_8 from '../../assets/images/Escribano/background/bg_8.png';
// import bg_9 from '../../assets/images/Escribano/background/bg_9.png';
// import bg_10 from '../../assets/images/Escribano/background/bg_10.png';
// import bg_11 from '../../assets/images/Escribano/background/bg_11.png';
// import bg_12 from '../../assets/images/Escribano/background/bg_12.png';

const EscribanoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true }, []);
  });
  return (
    <section className={styles.section_escribano}>
      <div className={styles.hero_box}>
        <video src={escVideo} muted loop autoPlay></video>

        {/* <div className={styles.header_box}>
          <div className={styles.header_title}>Escribano</div>
          <div className={styles.header_subtitle}>
            A fun and interactive board that is evolving the world of Education.
          </div>
          <div className={styles.header_desc}>
            Escribano is an intelligent board system which allows the user to
            easily manage a face to face or virtual presentation using a simple
            interface with voice recognition technology. Allowing them to teach
            a hands-free class.
          </div>

          <div className={styles.btn_inquire}>Learn More</div>
        </div> */}
        <div className={styles.hero_overlay}></div>
      </div>

      <div className={styles.main_features}>
        {/* Features Section - Component */}
        {/* <FeaturesSect /> */}

        {/* Escribano Header */}
        <div className={styles.esc_header_box}>
          <div className={styles.esc_header_logo}>
            <img src={escLogo} alt="escribano_logo" />
          </div>
          <div className={styles.esc_header_primary}>Escribano</div>
          <div className={styles.esc_header_secondary}>
            Evolving The World of Education
          </div>
        </div>

        {/* Patricia Section */}
        <div className={styles.patricia_box}>
          <div className={styles.patricia_header_box}>
            <div className={styles.patricia_header}>
              Reinventing School Technology With Patricia. Our Educational
              Virtual Assistant!
            </div>
            <Link to="/patricia" className={styles.patricia_button}>
              Meet Patricia
            </Link>
          </div>
          <div className={styles.patricia_description}>
            Escribano is an intelligent board that comes integrated with an
            Educational virtual assistant. Our system allows the user to easily
            manage a face-to-face or virtual presentation using a simple
            interface with voice recognition technology. Allowing them to teach
            a hands-free class.
          </div>
        </div>

        {/* 4 Main Features */}
        <div className={styles.feature_box}>
          <div className={styles.feature_items}>
            <div className={styles.feature_item}>
              <div className={styles.feature_icon}>
                <img src={iconMm} alt="icon_megameetings" />
              </div>
              <div className={styles.feature_title}>MegaMeetings</div>
              <p className={styles.feature_description}>
                A virtual conference system that allows the student to
                participate in a face-to-face virtual class. <br /> Students can
                answer from their tablets or computer, and the answer will be
                displayed on the whiteboard! And they will always feel part of
                the class whether they are in person or at home.
              </p>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_icon}>
                <img src={iconWww} alt="icon_internet" />
              </div>
              <div className={styles.feature_title}>Web Application</div>
              <p className={styles.feature_description}>
                Navigate the web with our easy to access app! Set your favorite
                search engine and browse the Internet to search for
                complementary information and images.
              </p>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_icon}>
                <img src={iconVr} alt="icon_voice_recognition" />
              </div>
              <div className={styles.feature_title}>
                Voice Recognition Assistant
              </div>
              <p className={styles.feature_description}>
                <b>Patricia</b> will always be available when the user wants to
                quickly open an application, navigate between pages, active a
                tool or use any other functions! The voice recognition assistant
                will help in dictations, web search and more.
              </p>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_icon}>
                <img src={iconVr} alt="icon_voice_recognition" />
              </div>
              <div className={styles.feature_title}>Mail Applications</div>
              <p className={styles.feature_description}>
                Send out emails or slides created during class and make use of
                several helper tools like our easy to use calculator and clock.
              </p>
            </div>
          </div>
        </div>

        {/* Educators Section */}

        <div className={styles.educators_menu_box}>
          <div
            className={styles.educators_menu_body}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <div className={styles.educators_menu_title}>
              Helping Educators and Teachers
            </div>
            <p className={styles.educators_menu_description}>
              {/* Escribano is an intelligent board that comes with an educational
              virtual assistant to help teachers navigate Escribano. Allowing
              them to teach a hands-free class.
              <br />
              <br /> */}
              Educators can access the internet, download multimedia, documents
              and store them locally. Additionally, ESCRIBANO has proprietary
              applications for writing text, making presentations, and
              calculations with spreadsheets that can be saved in PDF or
              ESCRIBANO proprietary format. <br />
              Educators can easily retrieve saved files and use external storage
              devices to enhance their daily work while saving and sharing all
              their work through email or Megameetings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscribanoPage;
