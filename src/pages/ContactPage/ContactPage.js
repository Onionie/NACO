import React from 'react';
import styles from './ContactPage.module.css';

import ContactRow from '../../components/Contacts/ContactRow';
import ContactCard from '../../components/Contacts/ContactCard';

import { project } from './ContactList';

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
    </section>
  );
};

export default ContactPage;
