'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { cart, setIsCartOpen } = useCart();
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Oryon<span>Robotics</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/about" className={styles.navLink}>About</Link></li>
          <li><Link href="/shop" className={styles.navLink}>Shop</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          <li>
            <button 
              className={styles.cartButton}
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
            >
              🛒 Cart
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
