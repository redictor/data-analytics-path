import React, {useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

function AccessGateContent({children}) {
  const [isGranted, setIsGranted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedGrant = window.localStorage.getItem('site_access_granted');

    if (savedGrant === 'true') {
      setIsGranted(true);
    }

    setIsLoaded(true);
  }, []);

  const handleContinue = () => {
    if (!isChecked) return;

    window.localStorage.setItem('site_access_granted', 'true');
    setIsGranted(true);
  };

  if (!isLoaded) {
    return null;
  }

  if (isGranted) {
    return children;
  }

  return (
    <>
      {children}
      <div className={styles.overlay}>
        <div className={styles.card}>
          <h1 className={styles.title}>Перед началом</h1>

          <p className={styles.text}>
            Эта база знаний создана для начинающих аналитиков данных. Эти материалы лежат здесь в открытом доступе: каждый может читать, изучать, использовать их для собственного развития.
          </p>

          <p className={styles.text}>
            Пожалуйста, не публикуйте, не выдавайте материалы, как свои ツ
          </p>

          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              Я согласен использовать материалы только для личного изучения и не
              распространять их, как свои.
            </span>
          </label>

          <button
            className={styles.button}
            onClick={handleContinue}
            disabled={!isChecked}>
            Открыть материалы
          </button>
        </div>
      </div>
    </>
  );
}

export default function AccessGate({children}) {
  return (
    <BrowserOnly fallback={children}>
      {() => <AccessGateContent>{children}</AccessGateContent>}
    </BrowserOnly>
  );
}