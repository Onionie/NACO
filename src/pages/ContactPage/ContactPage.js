import React from 'react';
import styles from './ContactPage.module.css';

import ContactRow from '../../components/Contacts/ContactRow';
import ContactCard from '../../components/Contacts/ContactCard';

import contactHeroImg from '../../assets/images/contactus_hero_image.png';

import { project, estimating, executive } from './ContactList';

const ContactPage = () => {
  return (
    <section className={styles.contact_page}>
      <div className={styles.contact_hero}></div>
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
          extNumber={'Ext. 113'}
        />
      </ContactRow>

      {/* Legal Department */}
      <ContactRow rowTitle={'Legal Department'}>
        <ContactCard
          name={'Kelvin Chavez'}
          title={'Contracts'}
          email={'kelvin@nelsonadamsnaco.com'}
          extNumber={'Ext. 106'}
        />
      </ContactRow>

      {/* Executive Team */}
      <ContactRow rowTitle={'ExecutiveTeam'}>
        {executive.map((exec) => (
          <ContactCard
            key={exec.id}
            name={exec.name}
            title={exec.title}
            email={exec.email}
            extNumber={exec.ext}
          />
        ))}
      </ContactRow>
    </section>
  );
};

export default ContactPage;
