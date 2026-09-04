import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin, User } from 'lucide-react';
import { asset } from '../utils/asset';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* 
        The PDF shows CONTACT US without a subtitle, but with the cloud background
        and the button. PageHero has showButton=true by default.
      */}
      <PageHero title="CONTACT US" />

      {/* Main Content */}
      <section className="section" style={{ background: '#ffffff', padding: '72px 0 0 0' }}>
        <div className="container" style={{ maxWidth: '1200px', marginBottom: '80px' }}>
          <div className="grid-2" style={{ gap: '64px', alignItems: 'start' }}>
            
            {/* Left Column: Contact Information */}
            <div>
              <h2 style={{ 
                fontSize: '2.4rem', 
                color: '#005495', 
                marginBottom: '24px', 
                fontFamily: 'var(--font-heading-fancy)', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                textAlign: 'left' 
              }}>
                Contact Information
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '40px', fontSize: '1.05rem' }}>
                We would love to hear from you. Whether you need assistance, want to get involved, or wish to support God Cares Ministries, please reach out
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <MapPin size={34} color="#111111" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ color: '#111111', fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>God Cares Ministries</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                      326/2, 3rd Floor, "Sri Lakshmi Sideshwara Nilaya, Chikka Gowda Layout, Opp. to Canara Bank, Kalkere, Horamavu Post, Bangalore-560 043, Karnataka, India.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <Mail size={34} color="#111111" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ color: '#111111', fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>Email</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>support@theuniversalroyallawoflove.org</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <Phone size={34} color="#111111" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ color: '#111111', fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>Phone</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>+91-88923 36400.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <div style={{ 
                background: '#ffffff', 
                padding: '40px 32px', 
                borderRadius: '32px', 
                border: '1px solid #b3b3b3'
              }}>
                <h3 style={{ 
                  fontSize: '1.05rem', 
                  color: '#005495', 
                  fontWeight: '700', 
                  marginBottom: '28px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  textAlign: 'center' 
                }}>
                  YOUR CONTRIBUTION MAKES A DIFFERENCE
                </h3>
                
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '28px 0' }}>
                    <p style={{ color: '#005495', fontSize: '1.15rem', fontWeight: '700', lineHeight: '1.7' }}>
                      Thank you! Your message has been received.<br />
                      We will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    <div style={{ position: 'relative' }}>
                      <User size={22} color="#005495" strokeWidth={1.5} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input 
                        type="text" 
                        required 
                        value={form.name} 
                        onChange={e => setForm({ ...form, name: e.target.value })} 
                        style={{ width: '100%', padding: '14px 14px 14px 52px', borderRadius: '8px', border: '1px solid #b3b3b3', fontSize: '1.05rem', color: '#111' }} 
                        placeholder="Full Name" 
                      />
                    </div>
                    
                    <div style={{ position: 'relative' }}>
                      <Mail size={22} color="#005495" strokeWidth={1.5} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input 
                        type="email" 
                        required 
                        value={form.email} 
                        onChange={e => setForm({ ...form, email: e.target.value })} 
                        style={{ width: '100%', padding: '14px 14px 14px 52px', borderRadius: '8px', border: '1px solid #b3b3b3', fontSize: '1.05rem', color: '#111' }} 
                        placeholder="Email Address" 
                      />
                    </div>
                    
                    <div style={{ position: 'relative' }}>
                      <Phone size={22} color="#005495" strokeWidth={1.5} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input 
                        type="tel" 
                        required 
                        value={form.phone} 
                        onChange={e => setForm({ ...form, phone: e.target.value })} 
                        style={{ width: '100%', padding: '14px 14px 14px 52px', borderRadius: '8px', border: '1px solid #b3b3b3', fontSize: '1.05rem', color: '#111' }} 
                        placeholder="Phone Number" 
                      />
                    </div>
                    
                    <div style={{ marginTop: '8px' }}>
                      <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '1.05rem', color: '#005495', marginLeft: '4px' }}>
                        Message
                      </label>
                      <textarea 
                        rows={4} 
                        required 
                        value={form.message} 
                        onChange={e => setForm({ ...form, message: e.target.value })} 
                        style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #b3b3b3', fontSize: '1.05rem', color: '#111', resize: 'vertical' }} 
                        placeholder="Write your message here....." 
                      />
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '12px' }}>
                      <button 
                        type="submit" 
                        style={{ 
                          background: 'var(--accent-gold)', 
                          color: '#ffffff', 
                          border: 'none', 
                          borderRadius: '9999px', 
                          padding: '12px 48px', 
                          fontSize: '1rem', 
                          fontWeight: '700', 
                          cursor: 'pointer', 
                          letterSpacing: '1px',
                          boxShadow: '0 4px 12px rgba(214, 181, 108, 0.4)'
                        }}
                      >
                        SUBMIT
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Map Section */}
        <div style={{ width: '100%', height: '450px', background: '#eaeaea' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.411693356024!2d77.65997231482239!3d13.009459390831006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae113abde1a539%3A0xcda8d7e0d3cb35d0!2sKalkere%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="God Cares Ministries Location"
          />
        </div>
      </section>
    </div>
  );
}
