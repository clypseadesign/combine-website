import React from 'react';

export default function TestAssets() {
  const assets = [
    '1.png', '1000.png', '2.png', '3.png', '4.png', '500.png', '5000.png',
    'art.png', 'COM.png', 'Component 1.png', 'Component 2.png', 'Component 3.png', 'Component 4.png',
    'edu.png', 'Frame 64.png', 'from.png', 'global.png', 'Group 10.png', 'Group 25.png',
    'Group 27.png', 'Group 29.png', 'Group 30.png', 'Group 31.png', 'Group 9.png', 'guide.png',
    'life.png', 'mail.png', 'MED.png', 'mess.png', 'name.png', 'phone.png', 'SER.png', 'ss.png',
    'vision.png', 'wat we do.png', 'YOU.png'
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Assets</h1>
      {assets.map(a => (
        <div key={a} style={{ marginBottom: '20px', border: '1px solid black', padding: '10px' }}>
          <h3>{a}</h3>
          <img src={`/transparency-legal-assets/${a}`} alt={a} style={{ maxWidth: '200px' }} />
        </div>
      ))}
    </div>
  );
}
