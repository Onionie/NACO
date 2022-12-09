import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SelectBgSection from './SelectBgSection';
import FeaturesSect from './FeaturesSect';
import styles from './EscribanoPage.module.css';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

// Images
import butterfly from '../../assets/images/Escribano/esc_butterfly_screen.png';
import escVideo from '../../assets/images/Escribano/escribano_vid.mp4';
import escLogo from '../../assets/images/Escribano/esc_logo.png';

const EscribanoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: 'true' }, []);
  });
  return (
    <section className={styles.section_escribano}>
      <div className={styles.hero_section}>
        <video src={escVideo} muted loop autoPlay></video>
        <div className={styles.hero_overlay}></div>
      </div>

      <div className={styles.main_features}>
        {/* Escribano Header */}
        <div className={styles.esc_header_section}>
          <div
            className={styles.esc_header_logo}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={escLogo} alt="escribano_logo" />
          </div>
          <div
            className={styles.esc_header_primary}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Escribano
          </div>
          <div
            className={styles.esc_header_secondary}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Evolving The World of Education
          </div>
        </div>

        {/* Patricia Section */}
        <div className={styles.patricia_section}>
          <div className={styles.patricia_header_section}>
            <div
              className={styles.patricia_header}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Reinventing School Technology With Patricia. Our Educational
              Virtual Assistant!
            </div>
            <Link
              to="/patricia"
              className={styles.patricia_button}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Meet Patricia
            </Link>
          </div>
          <div
            className={styles.patricia_description}
            data-aos="fade-left"
            data-aos-delay="1500"
          >
            Escribano is an intelligent board that comes integrated with an
            Educational virtual assistant. Our system allows the user to easily
            manage a face-to-face or virtual presentation using a simple
            interface with voice recognition technology. Allowing them to teach
            a hands-free class.
          </div>
        </div>

        {/* Butterfly Menu */}
        <div className={styles.butterfly_section}>
          <div className={styles.butterfly_body}>
            <div>
              <div
                className={styles.butterfly_body_title}
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Meet The Butterfly Menu
              </div>
              <div
                className={styles.butterfly_body_description}
                data-aos="fade-right"
                data-aos-delay="700"
              >
                Our butterfly menu gives you access to all the tools you need to
                use Escribano and our displayed color pallet makes it easy to
                select the color pen you need.
              </div>
            </div>
            <div
              className={styles.butterfly_image_div}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <img src={butterfly} alt="escribano_butterfly_screen" />
            </div>
          </div>
          <FeaturesSect />
        </div>

        {/* Select Background Section */}
        <SelectBgSection />
      </div>
    </section>
  );
};

export default EscribanoPage;
