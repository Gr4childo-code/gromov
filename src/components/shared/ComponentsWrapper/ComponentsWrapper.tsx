import React from 'react';
import styles from './ComponentsWrapper.module.scss';
import NavMenu from '@components/Header/NavMenu';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: React.ReactNode;
  id: string;
};
const ComponentsWrapper = ({ children, className, id }: Props) => {
  return (
    <div id={id}>
      <NavMenu anchor={id} />
      <div className={classNames(styles.ComponentsWrapper, className)}>{children}</div>
    </div>
  );
};

export default ComponentsWrapper;
