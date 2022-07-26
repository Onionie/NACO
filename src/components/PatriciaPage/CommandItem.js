import React from 'react';
import styles from './CommandItem.module.css';

const CommandItem = (props) => {
  return (
    <div className={styles.command_item}>
      <div className={`${styles.command_text} ${styles[props.color]}`}>
        {props.command}
      </div>
    </div>
  );
};

export default CommandItem;
