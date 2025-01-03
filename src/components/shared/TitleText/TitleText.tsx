import React from 'react';
import styles from './TitleText.module.scss';
type Props = {
  children: React.ReactNode;
};

const TitleText = ({ children }: Props) => {
  return <p className={styles.TitleText}>{children}</p>;
};

export default TitleText;
