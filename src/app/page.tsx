'use client';
import Introduction from '@components/Introduction/Introduction';
import styles from './page.module.scss';
import Services from '@components/Services/Services';
import Logo from '@components/shared/Logo/Logo';
import Experience from '@components/Experience/Experience';
import Portfolio from '@components/Portfolio/Portfolio';
import { motion } from 'motion/react';
import NavMenu from '@components/Header/NavMenu';
export default function Home() {
  return (
    <div className={styles.page}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
      </motion.div>
      <div className={styles.container}>
        <Introduction />
        <Services />
        <Experience />
        <Portfolio />
        <NavMenu anchor={''} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
      </motion.div>
    </div>
  );
}
