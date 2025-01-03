import React from 'react';
import styles from './TitleComponents.module.scss';
const TitleComponents = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles.TitleText}>{children}</p>;
};

export default TitleComponents;
