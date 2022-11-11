import React from 'react';
import styles from './AboutPage.module.css';
import { IoLocationSharp } from 'react-icons/io5';

import lydiksen from '../assets/images/AboutUsPage/lydiken.jpg';
import delOro from '../assets/images/AboutUsPage/del_oro.jpg';
import companyLogo from '../assets/images/company_logo_big.jpg';

const AboutPage = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.mission_box}>
        <div className={styles.mission_image}>
          <img src={companyLogo} alt="company_logo" />
        </div>
        <div className={styles.mission_body}>
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
        <div className={styles.projects_title}>Projects</div>
      </div>
      <div className={styles.projects_gallery}>
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
            <img src={lydiksen} alt="lydiksen_school" />
          </div>
          <div className={styles.item_title}>Lydiksen Elementary School</div>
          <div className={styles.item_location}>PLEASANTON, CA</div>
        </div>
        <div className={styles.projects_gallery_item}>
          <div className={styles.gallery_image}>
            <img src={lydiksen} alt="lydiksen_school" />
          </div>
          <div className={styles.item_title}>Lydiksen Elementary School</div>
          <div className={styles.item_location}>PLEASANTON, CA</div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
