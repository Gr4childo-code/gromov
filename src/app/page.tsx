import Introduction from '@components/Introduction/Introduction';
import styles from './page.module.css';
import Services from '@components/Services/Services';

export default function Home() {
  return (
    <div className={styles.page}>
      <Introduction />
      <Services />
    </div>
  );
}
