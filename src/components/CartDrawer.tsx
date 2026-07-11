'use client';
import React, { useRef, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();
  
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }
    
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, setIsCartOpen]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`${styles.overlay} ${isCartOpen ? styles.overlayOpen : ''}`} 
        onClick={() => setIsCartOpen(false)}
      />
      <div 
        ref={drawerRef}
        className={`${styles.drawer} ${isCartOpen ? styles.drawerOpen : ''}`}
      >
        <div className={styles.header}>
          <h2>Shopping Cart</h2>
          <button 
            className={styles.closeButton} 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        <div className={styles.itemList}>
          {cart.length === 0 ? (
            <div className={styles.emptyState}>
              <p>Your cart is empty.</p>
              <button 
                className="btn btn-primary" 
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className={styles.itemImage} 
                />
                <div className={styles.itemDetails}>
                  <h4 className={styles.itemName}>{item.name}</h4>
                  <div className={styles.itemPrice}>
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                  
                  <div className={styles.quantityControls}>
                    <button 
                      className={styles.qtyButton}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className={styles.qtyValue}>{item.quantity}</span>
                    <button 
                      className={styles.qtyButton}
                      disabled={item.quantity >= item.stock}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span className={styles.totalPrice}>₹{total.toLocaleString()}</span>
            </div>
            <button 
              className={`btn btn-secondary ${styles.checkoutButton}`}
              onClick={() => alert('Checkout logic placeholder: In a production app, this would route to a secure payment gateway.')}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
