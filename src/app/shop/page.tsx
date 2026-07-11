'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div className="container" style={{ padding: '4.5rem 1.5rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-light)' }}>Our Products</h1>

      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {['All', 'Kits', 'Platforms', 'IoT'].map(category => (
          <button
            key={category}
            id={`filter-${category}`}
            className={`btn ${filter === category ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1.25rem' }}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading products from MongoDB...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="scroll-fade" style={{ 
              transitionDelay: `${index * 100}ms`,
              background: 'var(--card-bg)', 
              border: '1px solid var(--border-color)',
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
              display: 'flex', 
              flexDirection: 'column'
            }}>
              <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '1px solid var(--border-color)' }} />
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', minHeight: '2.2rem', color: 'var(--text-light)' }}>{product.name}</h3>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>
                  ₹{product.price.toLocaleString()}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href={`/shop/${product.id}`} className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>View Details</Link>
                  <button 
                    className="btn btn-secondary" 
                    style={{ width: '100%', padding: '0.75rem' }}
                    disabled={product.stock <= 0}
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
          ))}
        </div>
      )}
    </div>
  );
}
