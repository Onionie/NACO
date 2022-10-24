import React from 'react';
import styles from './ContactPage.module.css';

import ContactRow from '../../components/Contacts/ContactRow';
import ContactCard from '../../components/Contacts/ContactCard';

import { project, estimating } from './ContactList';

const ContactPage = () => {
  return (
    <section className={styles.contact_page}>
      <ContactRow rowTitle={'Project Management Team'}>
        {project.map((proj) => (
          <ContactCard
            key={proj.id}
            name={proj.name}
            title={proj.title}
            email={proj.email}
            extNumber={proj.ext}
          />
        ))}
      </ContactRow>

      {/* Estimating Team */}
      <ContactRow rowTitle={'Estimating Team'}>
        {estimating.map((est) => (
          <ContactCard
            key={est.id}
            name={est.name}
            title={est.title}
            email={est.email}
            extNumber={est.ext}
          />
        ))}
      </ContactRow>

      {/* Senior Manager */}
      <ContactRow rowTitle={'Senior Manager'}>
        <ContactCard
          name={'Albert Cardenas'}
          title={'Senior Manager'}
          email={'albert@nelsonadamsnaco.com'}
          extNumber={'113'}
        />
      </ContactRow>

      {/* Legal Department */}
      <ContactRow rowTitle={'Legal Department'}>
        <ContactCard
          name={'Kelvin Chavez'}
          title={'Contracts'}
          email={'kelvin@nelsonadamsnaco.com'}
          extNumber={'106'}
        />
      </ContactRow>
    </section>
  );
};

export default ContactPage;
