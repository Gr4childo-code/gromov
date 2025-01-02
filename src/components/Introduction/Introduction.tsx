import ComponentsWrapper from '@components/shared/ComponentsWrapper/ComponentsWrapper';
import TitleText from '@components/shared/TitleText/TitleText';
import React from 'react';
import styles from './Introduction.module.scss';
const Introduction = () => {
  return (
    <ComponentsWrapper className={styles.Introduction} id='#intoduction'>
      <TitleText>
        As&nbsp;a&nbsp;strategic creative designer, I&rsquo;m design brands, digital products, websites & places that
        enrich peoples lives, enhancing humanity, the planet and the humans who create them
      </TitleText>
    </ComponentsWrapper>
  );
};

export default Introduction;
