import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Oryon<span>Robotics</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/shop" className={styles.navLink}>Shop</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
