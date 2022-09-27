import React, { useEffect } from 'react';
import styles from './EscribanoPage.module.css';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player/youtube';
import { Parallax, Background } from 'react-parallax';

import Aos from 'aos';
import 'aos/dist/aos.css';

import deskBg from '../assets/images/esc_bg_1.jpg';
import deskBg2 from '../assets/images/esc_bg_7.png';
import iconMm from '../assets/images/Escribano/icons/megaMeetings.png';
import iconWww from '../assets/images/Escribano/icons/www.png';
import iconVr from '../assets/images/Escribano/icons/voiceRecognition.png';
import educators from '../assets/images/Escribano/escribano_butterfly.png';
import butterfly from '../assets/images/Escribano/butterfly.png';
import bg_1 from '../assets/images/Escribano/background/bg_1.png';
import bg_2 from '../assets/images/Escribano/background/bg_2.png';
import bg_3 from '../assets/images/Escribano/background/bg_3.png';
import bg_4 from '../assets/images/Escribano/background/bg_4.png';
import bg_5 from '../assets/images/Escribano/background/bg_5.png';
import bg_6 from '../assets/images/Escribano/background/bg_6.png';
import bg_7 from '../assets/images/Escribano/background/bg_7.png';
import bg_8 from '../assets/images/Escribano/background/bg_8.png';
import bg_9 from '../assets/images/Escribano/background/bg_9.png';
import bg_10 from '../assets/images/Escribano/background/bg_10.png';
import bg_11 from '../assets/images/Escribano/background/bg_11.png';
import bg_12 from '../assets/images/Escribano/background/bg_12.png';

const EscribanoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true }, []);
  });
  return (
    <section className={styles.section_escribano}>
      <Parallax bgImage={deskBg} bgImageAlt="desk_office" strength={400}>
        <div className={styles.header_bg}>
          <div className={styles.header_box}>
            <div className={styles.header_title}>Escribano</div>
            <div className={styles.header_subtitle}>
              A fun and interactive board that is evolving the world of
              Education.
            </div>
            <div className={styles.header_desc}>
              Escribano is an intelligent board system which allows the user to
              easily manage a face to face or virtual presentation using a
              simple interface with voice recognition technology. Allowing them
              to teach a hands-free class.
            </div>

            <div className={styles.btn_inquire}>Talk to us</div>
          </div>

          <div className={styles.player_wrapper}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ne5OEKFoLm8"
              className={styles.react_player}
              playing
              width="100%"
              height="100%"
              controls={true}
              volume={1}
              muted={true}
            />
          </div>
        </div>
      </Parallax>

      <div className={styles.main_features}>
        {/* Main Feature - 3 cells */}

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
              whiteboard! And they will always feel part of the class whether
              they are in person or at home.
            </p>
          </div>
          <div className={styles.feature_item}>
            <div className={styles.feature_icon}>
              <img src={iconWww} alt="icon_internet" />
            </div>
            <div className={styles.feature_title}>Web Application</div>
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
            <div className={styles.feature_title}>
              Voice Recognition Assistant
            </div>
            <p className={styles.feature_description}>
              <b>Patricia</b> will always be available when the user wants to
              quickly open an application, navigate between pages, active a tool
              or use any other functions! The voice recognition assistant will
              help in dictations, web search and more.
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
              and store them locally, additionally, ESCRIBANO has proprietary
              applications for writing text, making presentations, and
              calculations with spreadsheets that can be saved in PDF or
              ESCRIBANO proprietary format. Educators can easily retrieve saved
              files and use external storage devices to enhance their daily work
              while saving and sharing all their work through email or
              Megameetings.
            </p>
          </div>
          <div
            className={styles.educators_menu_image}
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <img src={educators} alt="educators_icons" />
          </div>
        </div>

        {/* Butterfly */}
        <div className={styles.butterfly_box}>
          <div className={styles.butterfly_body}>
            <div className={styles.butterfly_title}>
              Meet The Butterfly Menu
            </div>
            <p className={styles.butterfly_description}>
              Our butterfly menu gives you access to all the tools you need to
              use Escribano and our displayed color pallet makes it easy to
              select the color pen you need.
              <br />
              <br />
              Escribano also has a keyboard button to access our virtual
              keyboard and a home button to access all of the integrated
              applications like Megameetings, internet browser, email,
              backgrounds, videos, clock, and calculator.
            </p>
          </div>
          <div
            className={styles.butterfly_image}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={butterfly} alt="butterfly_menu" />
          </div>
        </div>

        {/* Background */}
        <div
          className={styles.background_box}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Carousel
            className="background_carousel"
            indicators={true}
            controls={true}
            variant="light"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_1}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_2}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_3}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_4}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_5}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_6}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_7}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_8}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_9}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_10}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_11}
                alt="background_option"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bg_12}
                alt="background_option"
              />
            </Carousel.Item>
          </Carousel>
          <div className={styles.background_body}>
            <div className={styles.background_title}>There's More!</div>
            <p className={styles.background_description}>
              Escribano allows you to select from our 14 different backgrounds
              to start your lesson. Escribano has a background selection for
              every class like math, music and even sports!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscribanoPage;
