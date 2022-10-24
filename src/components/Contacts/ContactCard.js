import React from 'react';
import styles from './ContactCard.module.css';

const ContactCard = (props) => {
  return (
    <div className={styles.contact_card}>
      <div className={styles.cards_name}>{props.name}</div>
      <div className={styles.cards_title}>{props.title}</div>
      <a href={`mailto:${props.email}`} className={styles.cards_email}>
        {props.email}
      </a>
      <div className={styles.cards_extension}>{props.extNumber}</div>
    </div>
  );
};

export default ContactCard;
