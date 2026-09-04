import React from 'react';

const DEFAULT_STATS = [
  { num: '15K+', label: 'LIVES TOUCHED' },
  { num: '150+', label: 'COUNTRIES REACHED' },
  { num: '100+', label: 'ACTIVE FOLLOWERS' },
  { num: '45+', label: 'LANGUAGES' }
];

export default function StatsCounter({ stats = DEFAULT_STATS }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
      {stats.map((st, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3.8rem', fontWeight: '500', color: '#005495', fontFamily: "var(--font-heading-fancy)", marginBottom: '6px', lineHeight: '1.1' }}>
            {st.num}
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            {st.label}
          </div>
        </div>
      ))}
    </div>
  );
}
