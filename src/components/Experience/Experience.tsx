import ComponentsWrapper from '@components/shared/ComponentsWrapper/ComponentsWrapper';
import React from 'react';

import styles from './Experience.module.scss';
import TitleComponents from '@components/shared/TitleComponents/TitleComponents';
import { Tools } from './lib';
import Image from 'next/image';
import TitleText from '@components/shared/TitleText/TitleText';

const Experience = () => {
  return (
    <ComponentsWrapper id='#experience' className={styles.Experience}>
      <TitleComponents>
        I&rsquo;ve been in&nbsp;design since 2007 and have been in&nbsp;a&nbsp;leadership position for the last 11
        years. Since 2014 I&nbsp;have been working in&nbsp;the e-commerce industry
      </TitleComponents>
      <div className={styles.Experience__wrapper}>
        <div className={styles.Experience__Tools}>
          <TitleText>Tools</TitleText>
          <div className={styles.Experience__Tools__wrapper}>
            {Tools.map(item => {
              return (
                <div key={item.id} className={styles.Experience__Tools__wrapper__item}>
                  {item.frame.map(frame => {
                    return (
                      <Image
                        src={frame.images}
                        alt={frame.name}
                        key={frame.id}
                        width={50}
                        height={50}
                        className={styles.Experience__Tools__wrapper__item__image}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ComponentsWrapper>
  );
};

export default Experience;
