import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';
import { IoLocationSharp } from 'react-icons/io5';

import Aos from 'aos';
import 'aos/dist/aos.css';

// Images
import lydiksen from '../assets/images/AboutUsPage/lydiken.jpg';
import tokay from '../assets/images/AboutUsPage/tokay.jpg';
import hinsdale from '../assets/images/AboutUsPage/hinsdale.jpg';
import lomaVista from '../assets/images/AboutUsPage/loma_vista.jpg';
import thurgood from '../assets/images/AboutUsPage/thurgood_marshall.jpg';
import delOro from '../assets/images/AboutUsPage/del_oro.jpg';
import rocky from '../assets/images/AboutUsPage/rocky_elementray.jpg';
import northBergen from '../assets/images/AboutUsPage/north_bergen.jpg';
import companyLogo from '../assets/images/company_logo_big.jpg';

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: 'true' }, []);
  });

  return (
    <section className={styles.about_section}>
      <div className={styles.mission_box}>
        <div
          className={styles.mission_image}
          data-aos="fade-down-right"
          data-aos-delay="500"
        >
          <img src={companyLogo} alt="company_logo" />
        </div>
        <div
          className={styles.mission_body}
          data-aos="fade-down-left"
          data-aos-delay="1500"
        >
          <div className={styles.mission_header}>
            Since its start in 1953, Nelson Adams continues to maintain
            impeccable quality and customer service with our clients all over
            the United States. We take pride in our work ensuring not only that
            all our products are functional but{' '}
            <span className={styles.environment_tag}>
              environmentally friendly
            </span>{' '}
            as well.
          </div>
          <div className={styles.mission_subheader}>
            We take pride in our work and we continue a tradition that started
            in 1953. Since then we reinvented our processes, quality and the day
            to day operation but culture and family values stayed the same.
          </div>
        </div>
      </div>

      {/* PROJECTS Section */}
      <div className={styles.projects_body}>
        <div
          className={styles.projects_title}
          data-aos="fade-down"
          data-aos-delay="1800"
        >
          Projects
        </div>
      </div>
      <div
        className={styles.projects_gallery}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={lydiksen} alt="lydiksen_school" />
          </div>
          <div className={styles.item_title}>Lydiksen Elementary School</div>
          <div className={styles.item_location}>
            <IoLocationSharp /> PLEASANTON, CA
          </div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={tokay} alt="tokay_school" />
          </div>
          <div className={styles.item_title}>Tokay High School</div>
          <div className={styles.item_location}>
            <IoLocationSharp /> LODI, CA
          </div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={hinsdale} alt="hinsdale_school" />
          </div>
          <div className={styles.item_title}>Hinsdale South High School</div>
          <div className={styles.item_location}>
            <IoLocationSharp /> AURORA, IL
          </div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={lomaVista} alt="lomaVista_school" />
          </div>
          <div className={styles.item_title}>Loma Vista Elementary School</div>
          <div className={styles.item_location}>
            <IoLocationSharp /> HERMISTON, OR
          </div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={thurgood} alt="thurgood_marshall_school" />
          </div>
          <div className={styles.item_title}>Thurgood Marshall High School</div>
          <div className={styles.item_location}>
            <IoLocationSharp /> SAN FRANCISCO, CA
          </div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={delOro} alt="del_oro_school" />
          </div>
          <div className={styles.item_title}>Del Oro High School</div>
          <div className={styles.item_location}>
            <IoLocationSharp />
            BAKERSFIELD, CA
          </div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={rocky} alt="rocky_elementary_school" />
          </div>
          <div className={styles.item_title}>Rocky Elementary School</div>
          <div className={styles.item_location}>
            <IoLocationSharp />
            HERMISTON, OR
          </div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={northBergen} alt="north_bergen_school" />
          </div>
          <div className={styles.item_title}>North Bergen High School</div>
          <div className={styles.item_location}>
            <IoLocationSharp />
            SECAUCUS, NJ
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
