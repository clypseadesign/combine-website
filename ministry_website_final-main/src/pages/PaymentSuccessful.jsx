import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { CheckCircle2, Download, Home, Heart } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function PaymentSuccessful() {
  const location = useLocation();
  const { amount = '1000', name = 'Generous Supporter' } = location.state || {};
  const transactionId = 'GCM-' + Math.floor(10000000 + Math.random() * 90000000);

  return (
    <div>
      <PageHero title="PAYMENT SUCCESSFUL" subtitle="THANK YOU FOR YOUR GENEROSITY" showButton={false} />

      <section className="section" style={{ background: '#ffffff' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', padding: '48px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
            <CheckCircle2 size={72} style={{ color: '#16a34a', margin: '0 auto 20px auto' }} />
            
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              TRANSACTION SUCCESSFUL!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px' }}>
              Dear <strong>{name}</strong>, your contribution has been received with deep gratitude.
            </p>

            {/* Receipt Details Box */}
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', maxWidth: '500px', margin: '0 auto 32px auto', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Transaction ID:</span>
                <strong style={{ color: 'var(--primary-dark-blue)' }}>{transactionId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Amount Paid:</span>
                <strong style={{ color: 'var(--primary-blue)', fontSize: '1.1rem' }}>₹ {amount}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Date & Time:</span>
                <strong>{new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                <span style={{ color: '#16a34a', fontWeight: '700' }}>COMPLETED</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '32px', lineHeight: '1.6' }}>
              A tax-deductible receipt and your copy of <em>"The Universal Royal Law of Love"</em> digital eBook have been sent to your email address.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <NavLink to="/" className="btn-primary">
                <Home size={18} /> RETURN TO HOME
              </NavLink>

              <NavLink to="/gratitude" className="btn-secondary">
                <Heart size={18} /> VIEW GRATITUDE LETTER
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
