import React from 'react';
import PageHero from '../components/PageHero';
import { Music, BookOpen, MessageCircle, GraduationCap, Headphones } from 'lucide-react';

export default function MediaResources() {
  const resources = [
    {
      icon: Music,
      title: 'AUDIO-VISUAL PROJECTS',
      desc: 'Explore powerful Moral videos, motivational content, and spiritual teachings like The Universal Royal Law of Love – A Divine Call to Humanity, created to inspire reflection and positive life change.'
    },
    {
      icon: BookOpen,
      title: 'ARTICLES & MESSAGES',
      desc: 'Read insightful faith-based articles, spiritual blogs, and motivational messages focused on truth, moral values, human responsibility, and inner transformation.'
    },
    {
      icon: MessageCircle,
      title: 'HEALTH & WELLNESS MESSAGES',
      desc: 'Discover practical tips for holistic health, mental wellness, and spiritual well-being, helping you live a balanced and disciplined life.'
    },
    {
      icon: GraduationCap,
      title: 'EDUCATIONAL RESOURCES',
      desc: 'Access informative learning materials, personal development resources, and awareness content that promote character building, ethical living, and social responsibility.'
    },
    {
      icon: Headphones,
      title: 'MUSIC & CREATIVE MEDIA',
      desc: 'Experience uplifting moral music, inspirational songs, and creative storytelling that spread messages of love, compassion, faith, and social awareness.'
    }
  ];

  const cardStyle = {
    background: '#F0F6FF',
    borderRadius: '24px',
    padding: '32px 36px',
    border: 'none'
  };

  return (
    <div>
      <PageHero title="MEDIA & RESOURCE" />

      <section className="section" style={{ background: '#ffffff', padding: '64px 0 80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 56px auto' }}>
            <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Inspiring Lives Through Faith-Based Media
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
              Media & Resources is a space where truth, love, and spiritual growth come together to inspire lives. Through meaningful Christian media content, inspirational videos, and faith-based resources, God Cares Ministries shares messages that awaken human conscience, promote moral responsibility, and guide individuals toward a life of purpose, peace, and well-being. We believe true transformation begins within—impacting both the mind, body, and soul, leading to a healthier and more meaningful life.
            </p>
          </div>

          <div className="grid-2 card-grid-last-center" style={{ gap: '100px 76px' }}>
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} style={cardStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: '#005495',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3
                      style={{
                        color: '#005495',
                        fontSize: '1.7rem',
                        margin: 0,
                        fontFamily: 'var(--font-heading-fancy)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        lineHeight: 1.2
                      }}
                    >
                      {r.title}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.98rem', margin: 0 }}>
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
