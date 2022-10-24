import React from 'react';
import styles from './ContactCard.module.css';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const ContactCard = (props) => {
  return (
    <div className={styles.contact_card}>
      <div className={styles.cards_name}>{props.name}</div>
      <div className={styles.cards_title}>{props.title}</div>
      <div className={styles.cards_email_box}>
        <MdEmail />
        <a href={`mailto:${props.email}`} className={styles.cards_email}>
          {props.email}
        </a>
      </div>
      {props.extNumber ? (
        <div className={styles.cards_extension}>
          <BsFillTelephoneFill />
          {props.extNumber}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContactCard;
