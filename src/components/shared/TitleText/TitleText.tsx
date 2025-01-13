import React from 'react';
import styles from './TitleText.module.scss';
import classNames from 'classnames';
type Props = {
  children: React.ReactNode;
  className?: string;
};

const TitleText = ({ children, className }: Props) => {
  return <p className={classNames(styles.TitleText, className)}>{children}</p>;
};

export default TitleText;
