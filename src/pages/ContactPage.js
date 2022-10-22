import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <section className={styles.contact_page}>
      {/* <div className={styles.contact_title}> Contact Us </div> */}
      <div>
        <div className={styles.contact_sect_title}>Project Management Team</div>
        <div className={styles.contact_cards}>
          <div className={styles.contact_card}>
            <div className={styles.cards_name}>Sayra Mojica</div>
            <div className={styles.cards_title}>
              director of project management
            </div>
            <a
              href="mailto:sayra@nelsonadamsnaco.com"
              className={styles.cards_email}
            >
              Sayra@nelsonadamsnaco.com
            </a>
            <div className={styles.cards_extension}> Ext. 105</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
