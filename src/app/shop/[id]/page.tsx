'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import { useCart } from '@/context/CartContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container" style={{ padding: '4rem 1.5rem' }}>Loading product details from MongoDB...</div>;
  if (!product) return <div className="container" style={{ padding: '4rem 1.5rem' }}>Product not found. <Link href="/shop" style={{ color: 'var(--primary-color)' }}>Back to Shop</Link></div>;

  return (
    <div className="container" style={{ padding: '4.5rem 1.5rem' }}>
      <Link href="/shop" style={{ color: 'var(--secondary-color)', fontWeight: 600, marginBottom: '2rem', display: 'inline-block' }}>&larr; Back to Shop</Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: '1px solid var(--border-color)' }} />
        </div>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-light)' }}>{product.name}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>{product.description}</p>
          <div style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--secondary-color)', marginBottom: '2rem' }}>
            ₹{product.price.toLocaleString()}
          </div>

          <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'var(--text-muted)', borderRadius: '999px', fontSize: '0.875rem' }}>
              Category: {product.category}
            </span>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.4rem 1rem', 
              background: product.stock > 0 ? 'rgba(74, 222, 128, 0.15)' : 'rgba(239, 68, 68, 0.15)', 
              color: product.stock > 0 ? '#4ade80' : '#f87171', 
              border: product.stock > 0 ? '1px solid rgba(74, 222, 128, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '999px', 
              fontSize: '0.875rem' 
            }}>
              {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <button 
              className="btn btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', flex: '1 1 auto' }} 
              disabled={product.stock === 0}
              onClick={() => addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                stock: product.stock
              })}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button 
              className="btn btn-secondary" 
              style={{ 
                padding: '1rem 2rem', 
                fontSize: '1.1rem', 
                flex: '1 1 auto',
                backgroundColor: 'var(--secondary-color)',
                borderColor: 'var(--secondary-color)',
                color: 'white'
              }} 
              disabled={product.stock === 0}
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  imageUrl: product.imageUrl,
                  stock: product.stock
                });
                // Small timeout to let cart drawer mount/open state transition
                setTimeout(() => {
                  alert('Buy Now Triggered: Proceeding directly to secure checkout gateway.');
                }, 300);
              }}
            >
              {product.stock > 0 ? 'Buy Now' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
