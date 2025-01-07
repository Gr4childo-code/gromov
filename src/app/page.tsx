import Introduction from '@components/Introduction/Introduction';
import styles from './page.module.scss';
import Services from '@components/Services/Services';
import Logo from '@components/shared/Logo/Logo';
import Experience from '@components/Experience/Experience';
import Portfolio from '@components/Portfolio/Portfolio';

export default function Home() {
  return (
    <div className={styles.page}>
      <Logo />
      <div className={styles.container}>
        <Introduction />
        <Services />
        <Experience />
        <Portfolio />
      </div>
    </div>
  );
}
