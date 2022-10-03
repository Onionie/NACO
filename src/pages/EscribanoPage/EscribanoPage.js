import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SelectBgSection from './SelectBgSection';
import ButterflyCarousel from './ButterflyCarousel';
import FeaturesSect from './FeaturesSect';
import styles from './EscribanoPage.module.css';

import ReactPlayer from 'react-player/youtube';
import { Parallax, Background } from 'react-parallax';

import Aos from 'aos';
import 'aos/dist/aos.css';

import educators from '../../assets/images/Escribano/escribano_1.png';
import butterfly from '../../assets/images/Escribano/esc_butterfly_screen.png';
import escVideo from '../../assets/images/Escribano/escribano_vid.mp4';
import escLogo from '../../assets/images/Escribano/esc_logo.png';

import iconMm from '../../assets/images/Escribano/icons/megaMeetings.png';
import iconWww from '../../assets/images/Escribano/icons/www.png';
import iconVr from '../../assets/images/Escribano/icons/voiceRecognition.png';
import iconMail from '../../assets/images/Escribano/icons/mail.png';

const EscribanoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true }, []);
  });
  return (
    <section className={styles.section_escribano}>
      <div className={styles.hero_section}>
        <video src={escVideo} muted loop autoPlay></video>

        {/* <div className={styles.header_section}>
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
        <div className={styles.esc_header_section}>
          <div className={styles.esc_header_logo}>
            <img src={escLogo} alt="escribano_logo" />
          </div>
          <div className={styles.esc_header_primary}>Escribano</div>
          <div className={styles.esc_header_secondary}>
            Evolving The World of Education
          </div>
        </div>

        {/* Patricia Section */}
        <div className={styles.patricia_section}>
          <div className={styles.patricia_header_section}>
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
        {/* <div className={styles.feature_section}>
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
                <img src={iconMail} alt="icon_voice_recognition" />
              </div>
              <div className={styles.feature_title}>Mail Applications</div>
              <p className={styles.feature_description}>
                Send out emails or slides created during class and make use of
                several helper tools like our easy to use calculator and clock.
              </p>
            </div>
          </div>
        </div> */}

        {/* Butterfly Menu */}
        <div className={styles.butterfly_section}>
          <div className={styles.butterfly_body}>
            <div>
              <div className={styles.butterfly_body_title}>
                Meet The Butterfly Menu
              </div>
              <div className={styles.butterfly_body_description}>
                Our butterfly menu gives you access to all the tools you need to
                use Escribano and our displayed color pallet makes it easy to
                select the color pen you need.
              </div>
            </div>
            <div className={styles.butterfly_image_div}>
              <img src={butterfly} alt="escribano_butterfly_screen" />
            </div>
          </div>
          <FeaturesSect />
          {/* <div className={styles.butterfly_gallery}>
            <ButterflyCarousel />
          </div> */}
        </div>

        {/* Select Background Section */}
        <SelectBgSection />

        {/* Educators Section */}
        {/* <div className={styles.educators_menu_section}>
          <div
            className={styles.educators_menu_body}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <div className={styles.educators_menu_title}>
              Helping Educators and Teachers
            </div>
            <p className={styles.educators_menu_description}> */}
        {/* Escribano is an intelligent board that comes with an educational
              virtual assistant to help teachers navigate Escribano. Allowing
              them to teach a hands-free class.
              <br />
              <br /> */}
        {/* Educators can access the internet, download multimedia, documents
              and store them locally. Additionally, ESCRIBANO has proprietary
              applications for writing text, making presentations, and
              calculations with spreadsheets that can be saved in PDF or
              ESCRIBANO proprietary format. <br />
              Educators can easily retrieve saved files and use external storage
              devices to enhance their daily work while saving and sharing all
              their work through email or Megameetings.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EscribanoPage;
