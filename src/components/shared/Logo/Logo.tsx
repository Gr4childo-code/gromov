import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';
const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={styles.Logo}>
      <Image src={'/logo.webp'} alt='logo' fill className={className} />
    </div>
  );
};

export default Logo;
