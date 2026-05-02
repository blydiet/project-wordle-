import React, {useContext} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';

import {ToastContext} from "../ToastProvider";


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];



function ToastPlayground() {
  const {displayToast} = useContext(ToastContext);
  const {createToast} = React.useContext(ToastContext);
  const [toastMessage, setToastMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);



  function handleSubmit(event) {
    event.preventDefault();
    createToast(toastMessage, variant)
    setToastMessage("");
    setVariant(VARIANT_OPTIONS[0]);

  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
        <ToastShelf message={displayToast} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea 
              id="message" 
              value={toastMessage}
              onChange={(event) => {
                setToastMessage(event.target.value);
              } }
              className={styles.messageInput} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {
                VARIANT_OPTIONS.map((options) => 
                  (
                    <label key={options} htmlFor={`variant-${options}`}>
                      <input
                      required={true}
                        id={`variant-${options}`}
                        type="radio"
                        name="current-variant"
                        value={options}
                        checked={options === variant}
                        onChange={event => {
                          setVariant(event.target.value);
                        }}
                      />
                      {options}
                    </label> 

                ))
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
    </form>
    </div>
  );
}

export default ToastPlayground;
