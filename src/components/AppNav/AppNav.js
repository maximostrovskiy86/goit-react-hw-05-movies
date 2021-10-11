import Navigation from '../Navigation/Navigation';
import styles from './AppNav.module.css';

export default function AppNav() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
