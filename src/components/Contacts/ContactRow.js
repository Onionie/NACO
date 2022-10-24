import React from 'react';
import styles from './ContactRow.module.css';

const ContactRow = (props) => {
  return (
    <>
      <div className={styles.contact_sect_title}>{props.rowTitle}</div>
      <div className={styles.contact_cards}>{props.children}</div>
    </>
  );
};

export default ContactRow;
