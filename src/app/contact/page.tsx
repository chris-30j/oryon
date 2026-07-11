'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message submitted to MongoDB successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to submit message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };

  return (
    <div className="container" style={{ padding: '4.5rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-light)' }}>Contact Us</h1>
      <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>Have questions about our robotics kits or training programs? We&apos;d love to hear from you!</p>

      <div className="scroll-slide-up" style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
        <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Name *</label>
            <input
              id="contact-name"
              type="text"
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', color: 'var(--text-light)' }}
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Email *</label>
              <input
                id="contact-email"
                type="email"
                required
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', color: 'var(--text-light)' }}
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Phone</label>
              <input
                id="contact-phone"
                type="tel"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', color: 'var(--text-light)' }}
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Message *</label>
            <textarea
              id="contact-message"
              required
              rows={5}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', color: 'var(--text-light)', resize: 'vertical' }}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" id="contact-submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Send Message
          </button>
          {status && <p style={{ marginTop: '1rem', fontWeight: 'bold', color: status.includes('successfully') ? '#4ade80' : 'var(--secondary-color)' }}>{status}</p>}
        </form>
      </div>

      <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div className="scroll-zoom-in" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>📧 Email</h3>
          <p style={{ color: 'var(--text-muted)' }}>info@oryonrobotics.com</p>
        </div>
        <div className="scroll-zoom-in" style={{ transitionDelay: '150ms', background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>📞 Phone</h3>
          <p style={{ color: 'var(--text-muted)' }}>+91 9150084761</p>
        </div>
        <div className="scroll-zoom-in" style={{ transitionDelay: '300ms', background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>📍 Address</h3>
          <p style={{ color: 'var(--text-muted)' }}>Chennai, India - 600040</p>
        </div>
      </div>
    </div>
  );
}
