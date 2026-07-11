import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ background: 'var(--background-light)', color: 'var(--text-light)' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--background-dark) 0%, #111827 100%)',
        color: 'white',
        padding: '6.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            About <span style={{ color: 'var(--secondary-color)' }}>Oryon Robotics</span>
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: '1.7', color: 'var(--text-muted)' }}>
            Empowering the next generation of engineers, creators, and innovators with bleeding-edge educational robotics platforms and IoT kits.
          </p>
        </div>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 60%)',
          zIndex: 1
        }} />
      </section>

      {/* Our Story */}
      <section className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1.5rem', position: 'relative' }}>
              Our Story
              <span style={{ display: 'block', width: '60px', height: '4px', background: 'var(--secondary-color)', marginTop: '0.5rem' }} />
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Founded with a vision to make robotics and advanced technologies accessible to students and educational institutions globally, Oryon Robotics designs, manufactures, and supports high-quality educational hardware and software platforms.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              Based in Chennai, India, we bridge the gap between classroom theory and real-world engineering through hands-on learning kits, active LED cubes, and custom-designed IoT breakout development systems.
            </p>
          </div>
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            height: '350px',
            border: '1px solid var(--border-color)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
              alt="Robotics workshop" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--background-dark)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div style={{
            padding: '3rem 2rem',
            borderRadius: '12px',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-light)' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              To demystify programming and electronics by building intuitive, reliable, and engaging educational toolkits that foster logical thinking, scientific inquiry, and design innovation.
            </p>
          </div>
          <div style={{
            padding: '3rem 2rem',
            borderRadius: '12px',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👁️</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-light)' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              To become the global standard for STEM and advanced robotics education, nurturing a culture where anyone can design, assemble, and program their own automation systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '3rem' }}>Our Core Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Innovation First', icon: '💡', desc: 'Pushing boundaries in STEM product design and interactivity.' },
            { title: 'Quality Hardware', icon: '🛠️', desc: 'Industrial grade components built for heavy classroom handling.' },
            { title: 'Open Source Spirit', icon: '🌐', desc: 'Encouraging modification, collaboration, and learning sharing.' },
            { title: 'Student Success', icon: '🎓', desc: 'Putting learning experiences and student feedback at our core.' }
          ].map((value, idx) => (
            <div key={idx} style={{
              background: 'var(--card-bg)',
              padding: '2.5rem 1.5rem',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid var(--border-color)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-light)' }}>{value.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--background-dark) 0%, #111827 100%)',
        color: 'white',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Ready to start your learning journey?</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.9, color: 'var(--text-muted)' }}>Check out our store catalog for our latest IoT kits and advanced robotics platforms.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/shop" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Go to Shop</Link>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
