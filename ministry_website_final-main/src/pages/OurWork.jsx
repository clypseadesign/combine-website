import React from 'react';
import PageHero from '../components/PageHero';
import StatsCounter from '../components/StatsCounter';
import { asset } from '../utils/asset';

export default function OurWork() {
  const projects = [
    {
      title: 'UNIVERSAL LOVE MUSIC ALBUM',
      desc: 'A groundbreaking multilingual album featuring songs of peace and love in 50+ languages, bringing together artists from every continent.',
      img: asset('/our-work/card1.png')
    },
    {
      title: 'PEACE EDUCATION PROGRAM',
      desc: 'A groundbreaking multilingual album featuring songs of peace and love in 50+ languages, bringing together artists from every continent.',
      img: asset('/our-work/card5.png')
    },
    {
      title: 'GLOBAL UNITY GATHERINGS',
      desc: 'Monthly virtual and in-person gatherings connecting people across borders for meditation, prayer, and celebration of our shared humanity.',
      img: asset('/our-work/card4.png')
    },
    {
      title: 'COMPASSION IN ACTION',
      desc: 'Humanitarian relief programs providing food, shelter, and support to communities in need, demonstrating love through service.',
      img: asset('/our-work/card2.png')
    },
    {
      title: 'PEACE EDUCATION PROGRAM',
      desc: 'An interactive online platform featuring spiritual resources, guided meditations, and a global community forum for seekers of truth.',
      img: asset('/our-work/card6.png')
    },
    {
      title: 'LOVE RADIO NETWORK',
      desc: 'A 24/7 streaming radio station broadcasting uplifting music, spiritual teachings, and messages of hope in multiple languages.',
      img: asset('/our-work/card3.png')
    }
  ];

  const cardImgStyle = {
    width: '100%',
    height: '275px',
    objectFit: 'cover',
    borderRadius: '24px',
    boxShadow: '0 10px 28px rgba(0, 0, 0, 0.12)',
    marginBottom: '18px',
    display: 'block'
  };

  return (
    <div>
      <PageHero title="OUR WORK" />

      <section className="section" style={{ background: '#ffffff', padding: '64px 0 32px 0' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
          <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            TRANSFORMING LIVES THROUGH LOVE
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '1.02rem', marginBottom: '56px' }}>
            Our projects and initiatives reach millions of people across the globe, bringing hope, peace, and spiritual enlightenment to communities in need. Each program is designed to embody the Universal Royal Law of Love in practical, tangible ways.
          </p>
        </div>

        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid-2" style={{ gap: '48px 40px', textAlign: 'left' }}>
            {projects.map((p, idx) => (
              <div key={`${p.title}-${idx}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={p.img} alt={p.title} style={cardImgStyle} />
                <h3
                  style={{
                    color: '#005495',
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-heading-fancy)',
                    marginBottom: '8px',
                    letterSpacing: '0.5px',
                    lineHeight: '1.3',
                    textTransform: 'uppercase'
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.92rem', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff', padding: '64px 0 80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '48px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            OUR GLOBAL IMPACT
          </h2>
          <StatsCounter stats={[
            { num: '15K+', label: 'LIVES TOUCHED' },
            { num: '150+', label: 'COUNTRIES REACHED' },
            { num: '1000+', label: 'ACTIVE FOLLOWERS' },
            { num: '50+', label: 'LANGUAGES' }
          ]} />
        </div>
      </section>
    </div>
  );
}
