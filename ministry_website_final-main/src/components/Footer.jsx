import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '/assets/41771aca37781f6391cd61ff54f932c952e2f068.png';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary-navy)', color: '#ffffff', padding: '64px 0 24px 0', marginTop: '80px' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top Logo & Title - Matching Header Style */}
        <div style={{ textAlign: 'center', marginBottom: '48px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <img
              src={logoImg}
              alt="God Cares Ministries (A MINISTRY ROOTED IN LOVE)"
              style={{ width: '70px', height: '50px', objectFit: 'contain', display: 'block', flexShrink: 0 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-logo)', fontSize: '32px', fontWeight: '700', color: '#ffffff', lineHeight: '1.1', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', whiteSpace: 'nowrap' }}>
                God Cares Ministries
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', letterSpacing: '2px', color: 'var(--accent-gold)', fontWeight: '500', textTransform: 'uppercase', marginTop: '4px', whiteSpace: 'nowrap' }}>
                (A Ministry Rooted in Love)
              </span>
            </div>
          </div>
        </div>

        {/* Footer Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginBottom: '48px' }}>
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '20px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Important Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><NavLink to="/media-resources" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Media & Resource</NavLink></li>
              <li><NavLink to="/get-involved" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Get Involved</NavLink></li>
              <li><NavLink to="/transparency-legal" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Transparency & Legal</NavLink></li>
              <li><NavLink to="/gratitude" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Personal Gratitude & Sincere Thanks</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '20px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><NavLink to="/about-us" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>About Us</NavLink></li>
              <li><NavLink to="/our-work" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Our Work</NavLink></li>
              <li><NavLink to="/donate-us" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Donate Us</NavLink></li>
              <li><NavLink to="/contact-us" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Contact Us</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '20px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Policies</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><NavLink to="/transparency-legal" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Privacy Policy</NavLink></li>
              <li><NavLink to="/transparency-legal" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Refund Policy</NavLink></li>
              <li><NavLink to="/transparency-legal" style={{ color: '#cbd5e1', fontSize: '0.9rem', textDecoration: 'none', transition: 'var(--transition)' }}>Terms & Conditions</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '20px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                support@theuniversalroyallawoflove.org
              </li>
              <li style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                +91-88923 36400
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px', color: '#94a3b8', fontSize: '0.85rem', letterSpacing: '1px' }}>
          <p>© 2026 GOD CARES MINISTRIES</p>
        </div>
      </div>
    </footer>
  );
}
