import React from 'react';
import styles from './ComponentsWrapper.module.scss';
import NavMenu from '@components/Header/NavMenu';
import classNames from 'classnames';
import Logo from '../Logo/Logo';

type Props = {
  className?: string;
  children: React.ReactNode;
  id: string;
};
const ComponentsWrapper = ({ children, className, id }: Props) => {
  return (
    <>
      <Logo />
      <NavMenu />
      <div className={classNames(styles.ComponentsWrapper, className)} id={id}>
        {children}
      </div>
    </>
  );
};

export default ComponentsWrapper;
