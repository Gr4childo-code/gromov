import ComponentsWrapper from '@components/shared/ComponentsWrapper/ComponentsWrapper';
import React from 'react';
import { services } from './lib';
import styles from './Services.module.scss';
const Services = () => {
  return (
    <ComponentsWrapper id='#services'>
      {services.map(item => {
        return (
          <div key={item.id} className={styles.Services}>
            <div className={styles.Services__left}>
              <h2 className={styles.Services__title}>{item.title}</h2>
              <p className={styles.Services__text} dangerouslySetInnerHTML={{ __html: item.text1 }}></p>
              <p className={styles.Services__text} dangerouslySetInnerHTML={{ __html: item.text2 }}></p>
            </div>
            <ul className={styles.Services__right}>
              {item.services.map(service => {
                return (
                  <li key={service.id} className={styles.Services__right__item}>
                    <span className={styles.Services__right__item__number}> {`0${service.id}`}</span> {service.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </ComponentsWrapper>
  );
};

export default Services;
