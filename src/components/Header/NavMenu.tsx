'use client';
import React from 'react';
import styles from './NavMenu.module.scss';
import classNames from 'classnames';
import { menuHandle } from './lib';
import Link from 'next/link';
const NavMenu = () => {
  return (
    <div className={styles.NavMenu}>
      <nav className={styles.NavMenu__menu}>
        {menuHandle.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className={classNames(
                styles.NavMenu__menu__item

                // { [styles.NavMenu__menu__item_active]: anchor === item.link }
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavMenu;
