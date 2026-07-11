'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFeaturedProducts(data.slice(0, 3));
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.videoBackground}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} animate-fade-in`}>
          <h1>Innovate, Create, Inspire</h1>
          <p>Innovative Learning Solutions in Robotics for students and professionals.</p>
          <div className={styles.heroButtons}>
            <Link href="/shop" className="btn btn-secondary">Shop Now</Link>
            <Link href="/contact" className="btn btn-primary" style={{ background: 'transparent', border: '2px solid white' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <h2>Featured Products</h2>
        <div className={styles.productsGrid}>
          {featuredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <div className={styles.productPrice}>₹{product.price.toLocaleString()}</div>
                <Link href={`/shop/${product.id}`} className="btn btn-primary" style={{ width: '100%' }}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/shop" className="btn btn-secondary">View All Products</Link>
        </div>
      </section>

      <section className={styles.section} style={{ backgroundColor: 'var(--background-dark)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2>Why Choose Oryon Robotics?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Locally Developed</h3>
              <p>Designed, Developed & Manufactured in our state-of-the-art facility in India.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Competition Friendly</h3>
              <p>Attractive & competition friendly kits compatible with open source modules.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>More Value</h3>
              <p>40%-50% more features and 20%-30% more affordable than our competitors.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
