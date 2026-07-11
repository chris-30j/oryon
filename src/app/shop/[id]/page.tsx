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
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <Link href="/shop" style={{ color: 'var(--primary-color)', marginBottom: '2rem', display: 'inline-block' }}>&larr; Back to Shop</Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{product.name}</h1>
          <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>{product.description}</p>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary-color)', marginBottom: '2rem' }}>
            ₹{product.price.toLocaleString()}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: '#e2e8f0', borderRadius: '999px', fontSize: '0.875rem', marginRight: '1rem' }}>
              Category: {product.category}
            </span>
            <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: product.stock > 0 ? '#dcfce7' : '#fee2e2', color: product.stock > 0 ? '#166534' : '#991b1b', borderRadius: '999px', fontSize: '0.875rem' }}>
              {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
            </span>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }} 
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
        </div>
      </div>
    </div>
  );
}
