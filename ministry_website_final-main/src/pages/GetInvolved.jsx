import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { asset } from '../utils/asset';

const waysToGetInvolved = [
  {
    img: '/get-involved-assets/p0_img10_x1112.png',
    title: 'Volunteer Your Time',
    desc: 'Serve alongside us in food distribution, educational support, medical assistance, shelter aid, outreach programs, and community initiatives.'
  },
  {
    img: '/get-involved-assets/p0_img15_x1132.png',
    title: 'Share Your Resources',
    desc: 'Help extend our reach by sharing food, clothing, educational materials, medical supplies, or financial support to serve more lives with dignity and care.'
  },
  {
    img: '/get-involved-assets/p0_img9_x1108.png',
    title: 'Collaborate & Support the Mission',
    desc: 'Individuals, professionals, artists, and well-wishers are welcome to participate in our humanitarian and conscience-awakening initiatives.'
  },
  {
    img: '/get-involved-assets/p0_img4_x1088.png',
    title: 'Sponsor a Child or Family',
    desc: 'Support access to education, healthcare, and essential needs, helping individuals and families move toward stability and hope.'
  },
  {
    img: '/get-involved-assets/p0_img0_x1072.png',
    title: 'Pray with Us',
    desc: 'Join us in lifting up those we serve in prayer, seeking guidance, strength, and compassion in all our efforts.'
  }
];

export default function GetInvolved() {
  return (
    <div>
      <PageHero
        title="GET INVOLVED"
        bgImage={asset('/get-involved-assets/p0_img13_x1124.png')}
      />

      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${asset('/pdf-pages/GET_INVOLVED_page_1.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section className="section" style={{ background: '#ffffff', padding: '64px 0 80px 0' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
              {/* Join the Global Movement intro */}
              <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
                <h2
                  style={{
                    fontSize: '3.2rem',
                    color: '#005495',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-heading-fancy)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Join the Global Movement
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  There are countless ways to participate in our mission to spread the Universal Royal Law of Love. Whether you have five minutes or five hours, whether you&apos;re nearby or across the globe, you can make a meaningful contribution to creating a more peaceful world.
                </p>
              </div>

              {/* 5 photo blocks — 2×2 grid with last card centered */}
              <div className="grid-2" style={{ gap: '48px 40px' }}>
                {waysToGetInvolved.map((item, i) => (
                  <div
                    key={item.title}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      ...(i === waysToGetInvolved.length - 1
                        ? { gridColumn: '1 / -1', maxWidth: '520px', margin: '0 auto' }
                        : {})
                    }}
                  >
                    <img
                      src={asset(item.img)}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '275px',
                        objectFit: 'cover',
                        borderRadius: '24px',
                        boxShadow: '0 10px 28px rgba(0, 0, 0, 0.12)',
                        marginBottom: '18px',
                        display: 'block'
                      }}
                    />
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
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.92rem', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Be a Voice for Love and Truth */}
              <div style={{ textAlign: 'center', maxWidth: '760px', margin: '64px auto 0 auto' }}>
                <h3
                  style={{
                    fontSize: '2.8rem',
                    color: '#005495',
                    fontFamily: 'var(--font-heading-fancy)',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Be a Voice for Love and Truth
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>
                  Help spread the message of love, peace, and moral responsibility within your family, community, and society.
                </p>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '12px' }}>
                  Getting involved is not about recognition—it is about love in action.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>
                  You don&apos;t have to change the whole world to make a difference—just one life at a time.
                </p>

                <NavLink
                  to="/donate-us"
                  style={{
                    display: 'inline-block',
                    background: '#005495',
                    borderRadius: '9999px',
                    padding: '14px 40px',
                    fontSize: '1.05rem',
                    color: '#ffffff',
                    boxShadow: '0 8px 20px rgba(0, 85, 149, 0.25)',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  Because GOD CARES—and so do we.
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
