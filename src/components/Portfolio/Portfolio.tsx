'use client';
import React from 'react';
import styles from './Portfolio.module.scss';
import ComponentsWrapper from '@components/shared/ComponentsWrapper/ComponentsWrapper';
import { PortfolioL } from './lib';
import Image from 'next/image';
import TitleText from '@components/shared/TitleText/TitleText';
import { motion } from 'motion/react';
const Portfolio = () => {
  return (
    <ComponentsWrapper className={styles.Portfolio} id='portfolio'>
      {PortfolioL.map(item => {
        return (
          <motion.div
            key={item.id}
            className={styles.Portfolio__item}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.Portfolio__item__image}>
              <Image src={`/${item.image}`} fill alt={item.text} />
            </div>
            <TitleText> {item.title}</TitleText>
            <p dangerouslySetInnerHTML={{ __html: item.text }} className={styles.Portfolio__item__text}></p>
          </motion.div>
        );
      })}
    </ComponentsWrapper>
  );
};

export default Portfolio;
