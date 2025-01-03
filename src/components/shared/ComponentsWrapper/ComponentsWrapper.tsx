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
    <>
      <NavMenu />
      <div className={classNames(styles.ComponentsWrapper, className)} id={id}>
        {children}
      </div>
    </>
  );
};

export default ComponentsWrapper;
