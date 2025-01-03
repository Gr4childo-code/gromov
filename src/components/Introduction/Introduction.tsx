import ComponentsWrapper from '@components/shared/ComponentsWrapper/ComponentsWrapper';
import TitleComponents from '@components/shared/TitleComponents/TitleComponents';
import React from 'react';
import styles from './Introduction.module.scss';
const Introduction = () => {
  return (
    <ComponentsWrapper className={styles.Introduction} id='#intoduction'>
      <TitleComponents>
        As&nbsp;a&nbsp;strategic creative designer, I&rsquo;m design brands, digital products, websites & places that
        enrich peoples lives, enhancing humanity, the planet and the humans who create them
      </TitleComponents>
    </ComponentsWrapper>
  );
};

export default Introduction;
