'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.scss';
import { motion, useAnimation } from 'motion/react';
import TitleText from '@components/shared/TitleText/TitleText';
import TitleComponents from '@components/shared/TitleComponents/TitleComponents';

type Props = {
  id: number;
  title: string;
  text: string;
  image: string;
  large?: {
    image: string;
    title: string;
    images: string[];
    text: string;
  };
};

const LargePortfolio = ({ item }: { item: Props }) => {
  const controls = useAnimation();
  const childRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const nextChildRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(entry.isIntersecting);
        controls.start({ y: 0 }); // Пример анимации по Y оси
      },
      { threshold: [0.5] }
    );

    if (childRef.current) {
      observer.observe(childRef.current); // Начинаем наблюдение за элементом
    }
  }, [controls]);

  return (
    <div className={styles.Portfolio__item__large}>
      <motion.div
        className={styles.Portfolio__item__large__image}
        animate={controls}
        style={{
          position: isFixed ? 'fixed' : 'absolute',
          top: isFixed ? 0 : 0,
          left: 0,
          width: '100%',
          height: '400px',
          zIndex: 99
        }}
      >
        <Image
          src={`/${item.large?.image}`}
          fill
          alt={item.text}
          style={{
            zIndex: 1
          }}
        />
        <Image
          src={`/logo_white.png`}
          fill
          alt='logo_white'
          style={{
            zIndex: 2
          }}
        />
      </motion.div>

      <div ref={childRef} className={styles.Portfolio__item__large__wrapper}>
        <TitleText className={styles.Portfolio__item__large__title}>{item.title}</TitleText>
        <TitleComponents>{item.large?.title}</TitleComponents>
        <div className={styles.Portfolio__item__large__images}>
          <Image src={`/${item.large?.images[0]}`} fill alt={item.text} />
        </div>
        <p className={styles.Portfolio__item__large__text}>{item.large?.text}</p>
      </div>
    </div>
  );
};

export default LargePortfolio;
