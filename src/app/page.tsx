import Introduction from '@components/Introduction/Introduction';
import styles from './page.module.scss';
import Services from '@components/Services/Services';
import Logo from '@components/shared/Logo/Logo';
import Experience from '@components/Experience/Experience';

export default function Home() {
  return (
    <div className={styles.page}>
      <Logo />
      <Introduction />
      <Services />
      <Experience />
    </div>
  );
}
