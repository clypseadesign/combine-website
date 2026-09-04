import React from 'react';
import { Music, GraduationCap, Heart, Users, Headphones, PersonStanding } from 'lucide-react';
import PageHero from '../components/PageHero';
import { asset } from '../utils/asset';

export default function UnitsInitiatives() {
  const units = [
    {
      icon: Music,
      title: 'MUSIC & ARTS DIVISION',
      description: 'Creating and producing multilingual spiritual music, orchestral performances, and artistic expressions that celebrate the universal Royal Law of Love.'
    },
    {
      icon: GraduationCap,
      title: 'EDUCATION & TRAINING UNIT',
      description: 'Developing curriculum and training programs that teach principles of peace, love, and spiritual growth to communities worldwide.'
    },
    {
      icon: Heart,
      title: 'HUMANITARIAN SERVICES',
      description: 'Providing direct assistance to communities in need through food programs, shelter support, and emergency relief services.'
    },
    {
      icon: Users,
      title: 'COMMUNITY OUTREACH',
      description: 'Building grassroots networks of volunteers and supporters who organize local events and spread the message of universal love.'
    },
    {
      icon: Headphones,
      title: 'MEDIA & COMMUNICATIONS',
      description: 'Managing our global communications strategy including radio, social media, publications, and digital content production.'
    },
    {
      icon: PersonStanding,
      title: 'YOUTH & CHILDREN PROGRAMS',
      description: 'Engaging the next generation through age-appropriate programs that instill values of love, peace, and global citizenship.'
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
      <PageHero title="UNIT & INITIATIVES" bgImage={asset('/assets/all-pages-banner.png')} />

      <section className="section" style={{ background: '#ffffff', padding: '64px 0 80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              ORGANIZED FOR MAXIMUM IMPACT
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
              Our ministry is organized into specialized units, each dedicated to a specific aspect of our mission. Together, these units create a comprehensive approach to spreading the Universal Royal Law of Love across the globe.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '28px' }}>
            {units.map((unit) => {
              const Icon = unit.icon;
              return (
                <div key={unit.title} style={cardStyle}>
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
                      {unit.title}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.98rem', margin: 0 }}>
                    {unit.description}
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
