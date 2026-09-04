import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '../components/Accordion';
import StatsCounter from '../components/StatsCounter';
import FounderLetter from '../components/FounderLetter';
import { asset } from '../utils/asset';

export default function Home() {
  const [activeFlexCard, setActiveFlexCard] = useState(0);

  const flexCards = [
    {
      id: 0,
      title: 'Food, clothing, MEDICAL and shelter assistance',
      text: 'Providing food, clothing, medical, and shelter support for individuals and family facing hardship.',
      img: asset('/home-page/card1.png')
    },
    {
      id: 1,
      title: 'Education Support',
      text: 'Helping children and students through educational assistance, guidance, and opportunities for growth.',
      img: asset('/home-page/card2.png')
    },
    {
      id: 2,
      title: 'Medical Support',
      text: 'Supporting healthcare and wellness initiatives for vulnerable communities.',
      img: asset('/home-page/card3.png')
    },
    {
      id: 3,
      title: 'Moral Guidance',
      text: 'Sharing values rooted in The Universal Royal Law of Love to nurture dignity, compassion, and conscience.',
      img: asset('/home-page/card4.png')
    }
  ];

  const accordionItems = [
    {
      title: 'From Poverty to Purpose',
      content: 'Born from deeply personal experiences of hardship, our movement transforms personal struggles into a lifelong purpose of serving the underserved and uplifting humanity.'
    },
    {
      title: 'Global Engagement & Community Impact',
      content: 'Through our network of dedicated volunteers, global unity gatherings, and educational platforms, we bring people together across nations to foster peace and moral responsibility.'
    },
    {
      title: 'A Life of Leadership and Service',
      content: 'Rooted in humility, our leadership believes true authority comes from serving others. We empower local leaders to act as ambassadors of love and compassion in their communities.'
    },
    {
      title: 'Guided by love, Driven by Compassion',
      content: 'Every initiative, program, and outreach campaign is governed by The Universal Royal Law of Love—calling humanity to live by truth, integrity, and genuine concern for neighbor.'
    },
    {
      title: 'A Vision for a Better Tomorrow',
      content: 'We strive to build a future where every individual is treated with dignity and respect, creating sustainable programs that transform lives for generations.'
    }
  ];

  return (
    <div>
      {/* Hero Section using /home-page/hero.png */}
      <section style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#005495' }}>
        <a href="/church" style={{ display: 'block', width: '100%' }}>
          <img 
            src={asset('/home-page/hero.png')}
            alt="The Universal Royal Law of Love - Hero Banner" 
            style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }} 
          />
        </a>
      </section>

      {/* Section 1: Welcome & What We Do */}
      <section className="section" style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '48px' }}>
            {/* Left Column: Welcome */}
            <div>
              <h2 style={{ fontSize: '2.6rem', color: '#005495', marginBottom: '24px', letterSpacing: '1px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase' }}>
                WELCOME TO GOD CARES MINISTRIES
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '18px', lineHeight: '1.75', fontSize: '1rem' }}>
                God Cares Ministries is a self-supporting, volunteer-led humanitarian and spiritual movement founded in 1999 and rooted in <strong>"The Universal Royal Law of Love"</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '18px', lineHeight: '1.75', fontSize: '1rem' }}>
                We exist to serve humanity through truth, compassion, and moral responsibility, reaching the needy in all possible ways.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '18px', lineHeight: '1.75', fontSize: '1rem' }}>
                We support the poor and vulnerable by providing food, educational assistance, medical care, shelter, and clothing, while also working to awaken human conscience and restore moral values in society.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.75', fontSize: '1rem' }}>
                Our service is for all people—beyond religion, culture, or nationality. Whether you are seeking help, looking for a place to serve, or wishing to support a meaningful cause, you are welcome here.
              </p>
              
              <NavLink
                to="/donate-us"
                style={{
                  display: 'inline-block',
                  background: 'var(--accent-gold)',
                  borderRadius: '9999px',
                  padding: '14px 36px',
                  fontSize: '1.05rem',
                  color: '#005495',
                  boxShadow: '0 8px 20px rgba(0, 85, 149, 0.25)',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Because GOD CARES—and so do we.
              </NavLink>
            </div>

            {/* Right Column: What We Do Card */}
            <div 
              style={{ 
                background: '#005495', 
                color: '#ffffff', 
                borderRadius: '28px', 
                padding: '40px 44px',
                boxShadow: '0 12px 32px rgba(0, 85, 149, 0.2)'
              }}
            >
              <h3
                style={{
                  color: '#ffffff',
                  marginBottom: '24px',
                  fontFamily: 'var(--font-heading-fancy)',
                  fontSize: '2.6rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                WHAT WE DO
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#f1f5f9', marginBottom: '24px' }}>
                At God Cares Ministries, our heart beats for the forgotten and the underserved. Our story began with one man's unwavering compassion. From 1989 to 1998, our Founder and President devoted himself to serving unfortunate children, regardless of caste, color, creed, or religion. His selfless service laid the foundation for a growing movement of love and service.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#e2e8f0' }}>
                In 1999, God Cares Ministries was officially established, inspired by the timeless principles found in "The Universal Royal Law of Love". Since then, we have worked tirelessly to bring hope, healing, and dignity to those in need. Our mission is simple yet profound: to share love through tangible acts of kindness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Through faith-driven service... */}
      <section className="section" style={{ background: '#ffffff', padding: '40px 0 80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-blue)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-heading-fancy)', textAlign: 'center' }}>
            THROUGH FAITH-DRIVEN SERVICE AND COMPASSIONATE ACTION, WE PROVIDE
          </h2>

          <div className="flex-accordion-container">
            {flexCards.map((card, idx) => (
              <div 
                key={card.id} 
                className={`flex-accordion-card ${activeFlexCard === idx ? 'active' : ''}`}
                onClick={() => setActiveFlexCard(idx)}
                onMouseEnter={() => setActiveFlexCard(idx)}
              >
                <img src={card.img} alt={card.title} className="flex-accordion-img" />
                
                <div className="flex-accordion-overlay">
                  <h3 className="flex-accordion-title">{card.title}</h3>
                  <p className="flex-accordion-text">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Belief: Spreading Love Across the World */}
      <section className="section" style={{ background: 'var(--bg-light-blue)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.3rem', marginBottom: '36px', fontFamily: 'var(--font-heading-fancy)', color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
            OUR BELIEF: SPREADING LOVE ACROSS THE WORLD
          </h2>
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <img 
                src={asset('/home-page/section.png')}
                alt="Our Belief: Spreading Love Across The World Album" 
                style={{ width: '100%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} 
              />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '24px' }}>
                We believe true transformation begins with love—a love that does not judge, but uplifts; a love that does not merely speak, but acts. At God Cares Ministries, our hands and hearts are extended to serve all in need, reflecting the very nature of God's care. No matter who you are or where you come from, you are valued. You are loved. And through God's grace, you are never alone.
              </p>
              <NavLink to="/our-work" className="btn-primary">
                EXPLORE MORE
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Support Our Mission / Tiers */}
      <section className="section" style={{ background: 'var(--primary-dark-blue)', color: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <span style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                SUPPORT OUR MISSION
              </span>
              <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading-fancy)', margin: '12px 0 20px 0', color: '#ffffff', letterSpacing: '2px', lineHeight: '1.2' }}>
                Your Support Can Change Lives
              </h2>
              <p style={{ color: '#cbd5e1', marginBottom: '28px', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Every contribution helps us continue our mission of love, service, and hope for a better tomorrow.
              </p>
              <NavLink to="/donate-us" className="btn-primary" style={{ background: 'var(--accent-gold)', color: '#005495', whiteSpace: 'nowrap' }}>
                Make a Donation ♡
              </NavLink>
            </div>

            <div className="grid-3" style={{ gap: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#cbd5e1' }}>BASIC SUPPORT</span>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--accent-gold)', margin: '8px 0' }}>₹ 500</div>
                <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.8' }}>
                  <li>✓ Local Programs</li>
                  <li>✓ Peace Literature</li>
                </ul>
                <NavLink to="/donate-us" style={{ display: 'inline-block', color: '#ffffff', border: '2px solid #ffffff', padding: '8px 20px', borderRadius: '9999px', fontSize: '0.8rem', textDecoration: 'none', fontWeight: '700' }}>
                  Donate Now
                </NavLink>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#cbd5e1' }}>GROWTH SUPPORT</span>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--accent-gold)', margin: '8px 0' }}>₹ 1000</div>
                <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.8' }}>
                  <li>✓ Multilingual Trans</li>
                  <li>✓ Sponsor Peace Events</li>
                </ul>
                <NavLink to="/donate-us" style={{ display: 'inline-block', color: '#ffffff', border: '2px solid #ffffff', padding: '8px 20px', borderRadius: '9999px', fontSize: '0.8rem', textDecoration: 'none', fontWeight: '700' }}>
                  Donate Now
                </NavLink>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#cbd5e1' }}>SPONSOR INITIATIVE</span>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--accent-gold)', margin: '8px 0' }}>₹ 5000</div>
                <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.8' }}>
                  <li>✓ Impact Reports</li>
                  <li>✓ VIP Event Access</li>
                </ul>
                <NavLink to="/donate-us" style={{ display: 'inline-block', color: '#ffffff', border: '2px solid #ffffff', padding: '8px 20px', borderRadius: '9999px', fontSize: '0.8rem', textDecoration: 'none', fontWeight: '700' }}>
                  Donate Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Founder Profile */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.6rem', color: 'var(--primary-blue)', marginBottom: '36px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
            ABOUT THE FOUNDER / DIRECTOR
          </h2>
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '40px', marginTop: '36px' }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={asset('/home-page/founder.png')} 
                alt="Dr. C. James White" 
                style={{ width: '280px', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)', margin: '0 auto', boxShadow: 'var(--shadow-md)' }} 
              />
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-dark-blue)', marginBottom: '8px', fontFamily: 'var(--font-heading-fancy)', letterSpacing: '1px' }}>
                C. JAMES WHITE
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                C. James White is the Founder and President of God Cares Ministries, a humanitarian and spiritual movement born from deeply personal experience, unwavering faith, and a lifelong commitment to service. In 1998, after eight impactful years as Project Director and Principal of REACH Boarding School in Ranipet, Tamil Nadu where he cared for and educated over 300 children from challenging backgrounds, C. James White stepped away from institutional leadership to answer a higher calling: to extend care, compassion, and hope beyond the walls of any single organization.
              </p>
            </div>
          </div>
        </div>

        {/* Blue Sub-banner */}
        <div style={{ background: 'var(--primary-blue)', color: '#ffffff', textAlign: 'center', padding: '20px 0', marginTop: '48px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading-fancy)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '2.4rem' }}>
            Founder . Visionary . Servant Leader
          </h3>
        </div>
      </section>

      {/* Section 6: Accordion Section */}
      <section className="section" style={{ background: 'var(--bg-light-blue)' }}>
        <div className="container">
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Section 7: Stats Counter */}
      <StatsCounter />

      {/* Section 8: Message from the Founder / Director */}
      <FounderLetter />
    </div>
  );
}
