import React from 'react';
import { asset } from '../utils/asset';

export default function FounderLetter() {
  return (
    <section className="section" style={{ background: '#f0f5fc', padding: '64px 0 80px 0' }}>
      <div className="container">
        {/* Section Heading */}
        <h2 
          style={{
            fontSize: '2.6rem',
            color: '#005495',
            fontFamily: 'var(--font-heading-fancy)', 
            marginBottom: '40px',
            textAlign: 'center',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          Message from the Founder/Director
        </h2>

        {/* High Resolution Letter Image Container */}
        <div 
          style={{ 
            maxWidth: '960px', 
            margin: '0 auto', 
            background: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 12px 36px rgba(0, 85, 149, 0.15)',
            border: '2px solid #cbe0f5',
            overflow: 'hidden',
            padding: '12px'
          }}
        >
          <img 
            src={asset('/home-page/letter.jpg')} 
            alt="Official Message from the Founder / Director - God Cares Ministries" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              borderRadius: '12px'
            }} 
          />
        </div>
      </div>
    </section>
  );
}
