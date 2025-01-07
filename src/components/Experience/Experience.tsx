import ComponentsWrapper from '@components/shared/ComponentsWrapper/ComponentsWrapper';
import React from 'react';

import styles from './Experience.module.scss';
import TitleComponents from '@components/shared/TitleComponents/TitleComponents';
import { Competencies, Places, Places_square, Tools } from './lib';
import Image from 'next/image';
import TitleText from '@components/shared/TitleText/TitleText';
import classNames from 'classnames';

const Experience = () => {
  return (
    <ComponentsWrapper id='experience' className={styles.Experience}>
      <TitleComponents>
        I&rsquo;ve been in&nbsp;design since 2007 and have been in&nbsp;a&nbsp;leadership position for the last 11
        years. Since 2014 I&nbsp;have been working in&nbsp;the <br />
        e-commerce industry
      </TitleComponents>
      <div className={styles.Experience__wrapper}>
        <div className={styles.Experience__Tools}>
          <TitleText>Tools</TitleText>
          <div className={styles.Experience__Tools__wrapper}>
            {Tools.map(item => {
              return (
                <div key={item.id} className={styles.Experience__Tools__item}>
                  {item.frame.map(frame => {
                    return (
                      <Image
                        src={frame.images}
                        alt={frame.name}
                        key={frame.id}
                        width={50}
                        height={50}
                        className={styles.Experience__Tools__item__image}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.Experience__Competence}>
          <TitleText>Competencies</TitleText>

          <div className={styles.Experience__Competence__wrapper}>
            <ul className={styles.Experience__Competence__items}>
              {Competencies.find(comp => comp.position === 'left')?.items.map(item => {
                return (
                  <li key={item.id} style={{ marginLeft: '20px' }}>
                    <p className={styles.Experience__Competence__item__name}>{item.name}</p>
                    <p className={styles.Experience__Competence__item__text}>{item.text}</p>
                  </li>
                );
              })}
            </ul>
            <ul className={styles.Experience__Competence__items}>
              {Competencies.find(comp => comp.position === 'right')?.items.map(item => {
                return (
                  <li key={item.id}>
                    <p className={styles.Experience__Competence__item__name}>{item.name}</p>
                    <p className={styles.Experience__Competence__item__text}>{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.Experience__Places}>
          {Places.map(place => {
            return (
              <div className={styles.Experience__Places__item} key={place.id}>
                <TitleText> {place.title}</TitleText>
                <p className={styles.Experience__Places__item__place}>{place.place}</p>
                <div className={styles.Experience__Places__content}>
                  <div className={styles.Experience__Places__left}>
                    <div className={styles.Experience__Places__item__description}>
                      <p
                        className={styles.Experience__Places__item__description__text}
                        dangerouslySetInnerHTML={{ __html: place.text1 }}
                      ></p>
                      <p
                        className={styles.Experience__Places__item__description__text}
                        dangerouslySetInnerHTML={{ __html: place.text2 }}
                      ></p>
                    </div>
                  </div>
                  <div className={styles.Experience__Places__right}>
                    <p className={styles.Experience__Places__item__to}>{place.date.to}</p>—
                    <p className={styles.Experience__Places__item__from}>{place.date.from}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.Experience__Places__square}>
          {Places_square.map(place => {
            return (
              <div
                className={classNames(styles.Experience__Places__item, styles.Experience__Places__square__item)}
                key={place.id}
              >
                <TitleText> {place.title}</TitleText>
                <p className={styles.Experience__Places__item__place}>{place.place}</p>
                <div className={classNames(styles.Experience__Places__square__item__description)}>
                  <p
                    className={styles.Experience__Places__item__description__text}
                    dangerouslySetInnerHTML={{ __html: place.text1 }}
                  ></p>
                </div>
                <div className={classNames(styles.Experience__Places__right, styles.Experience__Places__square__right)}>
                  <p className={styles.Experience__Places__item__to}>{place.date.to}</p>—
                  <p className={styles.Experience__Places__item__from}>{place.date.from}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ComponentsWrapper>
  );
};

export default Experience;
