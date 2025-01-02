import React from 'react';
import styles from './TitleText.module.scss';
const TitleText = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles.TitleText}>{children}</p>;
};

export default TitleText;
