import React, { useEffect } from 'react';
import styles from './ContactPage.module.css';
import ContactRow from '../../components/Contacts/ContactRow';
import ContactCard from '../../components/Contacts/ContactCard';
import { project, estimating, executive } from './ContactList';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: 'true' }, []);
  });

  return (
    <section className={styles.contact_page}>
      <div className={styles.contact_hero}>
        <div className={styles.contact_body}>
          <div
            className={styles.contact_header}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Get in touch
          </div>
          <p
            className={styles.contact_subheader}
            data-aos="fade-right"
            data-aos-delay="1300"
          >
            Interested in how we can help your company improve?
            <br />
            We'd love to hear from you.
            <br />
            You can call us at{' '}
            <span className={styles.contact_info}>909-879-0421</span>{' '}
          </p>

          <div
            className={styles.contact_address_box}
            data-aos="fade-right"
            data-aos-delay="1300"
          >
            <div className={styles.contact_subheader}>
              Want to know where we are?
            </div>
            <div>
              We are located in{' '}
              <span className={styles.contact_info}>
                160 N. CACTUS AVE RIALTO CA, 92346
              </span>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
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
      </div>

      {/* Estimating Team */}
      <div data-aos="fade-up" data-aos-delay="500">
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
      </div>

      {/* Senior Manager */}
      <div data-aos="fade-up" data-aos-delay="500">
        <ContactRow rowTitle={'Senior Manager'}>
          <ContactCard
            name={'Albert Cardenas'}
            title={'Senior Manager'}
            email={'albert@nelsonadamsnaco.com'}
            extNumber={'Ext. 113'}
          />
        </ContactRow>
      </div>

      {/* Legal Department */}
      <div data-aos="fade-up" data-aos-delay="500">
        <ContactRow rowTitle={'Legal Department'}>
          <ContactCard
            name={'Kelvin Chavez'}
            title={'Contracts'}
            email={'kelvin@nelsonadamsnaco.com'}
            extNumber={'Ext. 106'}
          />
        </ContactRow>
      </div>

      {/* Executive Team */}
      <div data-aos="fade-up" data-aos-delay="500">
        <ContactRow rowTitle={'Executive Team'}>
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
      </div>
    </section>
  );
};

export default ContactPage;
