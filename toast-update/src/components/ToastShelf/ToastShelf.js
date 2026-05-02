import React from 'react';

import {ToastContext} from "../ToastProvider";
import Toast from '../Toast';
import styles from './ToastShelf.module.css';



function ToastShelf() {
   const {displayToast} = React.useContext(ToastContext);
  const message = displayToast;
  return (
    <ol 
    className={styles.wrapper}
    role="region"
    aria-live="polite"
    aria-label='Notification'
    >
        {
          message.map(({id, message, variant}) => (
            <li  key={id}  className={styles.toastWrapper}>
              <Toast 
              variant={variant}
              toastMessage={message} 
              id={id}
              />
            </li>
          ))
        }
    </ol>
  );
}

export default ToastShelf;
