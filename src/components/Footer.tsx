'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Subscribing...');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus(data.error || 'Failed to subscribe.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <h3>Oryon Robotics</h3>
          <p>Innovative Learning Solutions in Robotics for students and professionals.</p>
        </div>
        <div className={styles.footerCol}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>Contact Us</h3>
          <ul>
            <li>info@oryonrobotics.com</li>
            <li>+91 9150084761</li>
            <li>Chennai, India - 600040</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your Email Address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>
          {status && <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: status.includes('successfully') ? 'green' : '#ffaa00' }}>{status}</p>}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Oryon Robotics. All rights reserved.</p>
      </div>
    </footer>
  );
}
