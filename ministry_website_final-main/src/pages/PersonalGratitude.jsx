import React from 'react';
import { asset } from '../utils/asset';

export default function PersonalGratitude() {
  const paragraphStyle = {
    color: '#1f2937',
    fontSize: '1.03rem',
    lineHeight: '1.8',
    margin: '0 0 14px',
    textAlign: 'left'
  };

  return (
    <div style={{ background: '#ffffff', width: '100%' }}>
      <div style={{ background: '#ffffff', padding: '28px 0 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 26px' }}>
          <h2
            style={{
              margin: '0 auto 18px',
              textAlign: 'center',
              fontFamily: 'var(--font-heading-fancy)',
              fontSize: 'clamp(2.2rem, 3vw, 3.6rem)',
              color: '#005495',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              lineHeight: '1.2'
            }}
          >
            PERSONAL GRATITUDE
          </h2>

          <div style={{ maxWidth: '1170px', margin: '0 auto' }}>
            <p style={paragraphStyle}>
              <em style={{ fontStyle: 'italic' }}>With Heartfelt Gratitude and Humble Appreciation</em>
            </p>

            <p style={paragraphStyle}>
              Sincere thanks and profound appreciation are extended to all the institutions,
              churches, families, friends, teachers, mentors, supporters, and well-wishers who
              have shared their love, care, guidance, encouragement, and support throughout the
              formative years and life journey of C. James White.
            </p>

            <p style={paragraphStyle}>
              From childhood onward, countless compassionate hearts became instruments of God’s
              providence through education, shelter, food, clothing, spiritual nurturing,
              friendship, encouragement, and opportunities for personal growth and service. The
              kindness, discipline, prayers, generosity, and goodwill received over the years have
              played a significant role in shaping character, strengthening faith, inspiring
              purpose, and fostering a lifelong commitment to truth, compassion, wisdom, and
              humanitarian service.
            </p>

            <p style={paragraphStyle}>
              Special gratitude is offered to the many devoted servants of God, church leaders,
              statesmen, philosopher-guides, distinguished mentors, educators, and spiritual
              counselors whose wisdom, example, and guidance helped illuminate the path of faith,
              learning, leadership, and service. Their teachings, counsel, and noble lives continue
              to inspire dedication to God, love for humanity, and the pursuit of righteousness and
              truth.
            </p>

            <p style={paragraphStyle}>
              The loving support, noble examples, and enduring influence of many individuals and
              institutions remain deeply cherished and gratefully remembered. Every act of
              kindness—whether great or small—has left a lasting impression and continues to inspire
              unwavering faith in God, sincere love for humanity, and steadfast dedication to
              serving others.
            </p>

            <p style={paragraphStyle}>
              May the Lord abundantly bless, strengthen, guide, and reward all those who, in
              countless ways, have shared their lives, resources, prayers, encouragement, wisdom,
              and goodwill with love and sincerity. Their invaluable contributions, friendship,
              and support will forever be remembered with gratitude, honor, respect, and heartfelt
              appreciation. Their legacy of kindness continues to illuminate the path of service,
              faith, and hope for generations to come.
            </p>

            <img
              src={asset('/pdf-pages/PERSONAL_GRATITUDE_and_SINCERE_THANKS_cropped.png')}
              alt="Personal Gratitude & Sincere Thanks"
              style={{ width: '100%', maxWidth: '100%', display: 'block', marginTop: '24px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
