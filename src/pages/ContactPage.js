import React from 'react';
import styles from './ContactPage.module.css';

import ContactRow from '../components/Contacts/ContactRow';
import ContactCard from '../components/Contacts/ContactCard';

const ContactPage = () => {
  return (
    <section className={styles.contact_page}>
      <ContactRow rowTitle={'Project Management Team'}>
        <ContactCard
          name={'Sayra Mojica'}
          title={'director of project management'}
          email={'sayra@nelsonadamsnaco.com'}
          extNumber={'105'}
        />
      </ContactRow>
    </section>
  );
};

export default ContactPage;
