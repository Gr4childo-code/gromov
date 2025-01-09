'use client';
import React from 'react';
import styles from './NavMenu.module.scss';
import classNames from 'classnames';
import { menuHandle } from './lib';
import Link from 'next/link';
const NavMenu = ({ anchor }: { anchor: string }) => {
  return (
    <div className={styles.NavMenu}>
      <nav className={styles.NavMenu__menu}>
        {menuHandle.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className={classNames(
                styles.NavMenu__menu__item,

                {
                  [styles.NavMenu__menu__item_active]: `#${anchor}` === item.link
                }
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      {anchor === '' && (
        <Link
          href={''}
          className={styles.NavMenu__menu__back}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back t• t•p
          <svg
            width='12'
            height='18'
            viewBox='0 0 12 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ marginLeft: '12px' }}
          >
            <path opacity='0.75' d='M7.35866 18H4.64062V15.3245H7.35866V18Z' fill='black' />
            <path
              d='M10.0771 7.2445L7.35908 4.56903V12.6484H4.64105V4.56903L1.92301 7.2445L0 5.35161L5.03856 0.391956C5.16478 0.267578 5.31466 0.168908 5.47964 0.101587C5.64462 0.0342665 5.82147 -0.00038147 6.00006 -0.00038147C6.17866 -0.00038147 6.35551 0.0342665 6.52049 0.101587C6.68547 0.168908 6.83535 0.267578 6.96157 0.391956L12.0001 5.35161L10.0771 7.2445Z'
              fill='black'
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default NavMenu;
