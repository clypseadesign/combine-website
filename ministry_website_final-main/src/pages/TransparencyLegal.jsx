import React from 'react';
import PageHero from '../components/PageHero';
import { asset } from '../utils/asset';

export default function TransparencyLegal() {
  return (
    <div>
      <PageHero title="TRANSPARENCY & LEGAL" subtitle="GOVERNANCE & FINANCIAL ACCOUNTABILITY" />

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${asset('/pdf-pages/Transparency_and_Legal_page_1.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section className="section" style={{ background: '#ffffff', paddingTop: '60px' }}>
            <div className="container">
              
              {/* Our Commitment to Transparency */}
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
                <h2 style={{ fontSize: '2.5rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Our Commitment to Transparency
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  At God Cares Ministries, we are committed to operating with integrity, honesty, and accountability in all that we do.<br/>
                  Transparency is at the heart of our mission, ensuring that every action, message, and resource reflects our values and purpose.
                </p>
              </div>

              {/* 4 Transparency Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', margin: '0 auto 80px auto', maxWidth: '1100px' }}>
                
                <div style={{ background: '#005495', borderRadius: '16px', padding: '36px 20px 20px', position: 'relative', marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#fff', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <img src={asset('/transparency-legal-assets/commitment_info_icon.png')} alt="icon" style={{ width: '30px' }} />
                  </div>
                  <p style={{ color: '#fff', textAlign: 'center', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Providing clear and accurate information about our mission and activities
                  </p>
                </div>
                
                <div style={{ background: '#005495', borderRadius: '16px', padding: '36px 20px 20px', position: 'relative', marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#fff', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <img src={asset('/transparency-legal-assets/commitment_honesty_icon.png')} alt="icon" style={{ width: '30px' }} />
                  </div>
                  <p style={{ color: '#fff', textAlign: 'center', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Maintaining honesty in all communications published content and published content
                  </p>
                </div>

                <div style={{ background: '#005495', borderRadius: '16px', padding: '36px 20px 20px', position: 'relative', marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#fff', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <img src={asset('/transparency-legal-assets/commitment_share_icon.png')} alt="icon" style={{ width: '30px' }} />
                  </div>
                  <p style={{ color: '#fff', textAlign: 'center', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Ensuring responsible creation and sharing of all media and resources
                  </p>
                </div>

                <div style={{ background: '#005495', borderRadius: '16px', padding: '36px 20px 20px', position: 'relative', marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#fff', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <img src={asset('/transparency-legal-assets/commitment_accessibility_icon.png')} alt="icon" style={{ width: '30px' }} />
                  </div>
                  <p style={{ color: '#fff', textAlign: 'center', margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                    We serve all people without discrimination, beyond religion, culture, or nationality
                  </p>
                </div>

              </div>

              {/* Legal & Ethical Responsibility */}
              <div style={{ maxWidth: '1100px', margin: '0 auto 80px auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                <div style={{ flex: '1 1 500px' }}>
                  <h3 style={{ fontSize: '2.5rem', color: '#005495', fontFamily: 'var(--font-heading-fancy)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Legal & Ethical Responsibility
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1.05rem' }}>
                    We operate in full respect of applicable laws and ethical standards. Our commitments include:
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ color: '#005495', fontSize: '1.2rem', marginTop: '-2px' }}>•</div>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>Following all legal guidelines and regulations</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ color: '#005495', fontSize: '1.2rem', marginTop: '-2px' }}>•</div>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>All content shared through this website is intended for humanitarian, educational, and moral purposes</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ color: '#005495', fontSize: '1.2rem', marginTop: '-2px' }}>•</div>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>Media and resources are protected under applicable copyright laws unless stated otherwise</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ color: '#005495', fontSize: '1.2rem', marginTop: '-2px' }}>•</div>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem', margin: 0 }}>Personal information shared with us is treated with respect, care, and confidentiality</p>
                    </div>
                  </div>
                </div>
                <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                  <img src={asset('/transparency-legal-assets/legal_ethical_chatgpt.png')} alt="Legal & Ethical Responsibility" style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }} />
                </div>
              </div>

              {/* Government of India Registrations */}
              <div style={{ maxWidth: '1100px', margin: '0 auto 80px auto' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#005495', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                  Government of India – Registrations & Approvals
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '40px', fontSize: '1.05rem', textAlign: 'center' }}>
                  God Cares Ministries is duly registered and recognized under various departments of the Government of India.
                </p>

                
                <img
                  src={asset('/transparency-legal-assets/registration_boxes.jpg')}
                  alt="Government of India – Registrations & Approvals"
                  style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
                />

              </div>


              {/* Donors Info Sections */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', maxWidth: '1100px', margin: '0 auto 64px auto' }}>
                {/* FOR INDIAN DONORS */}
                <div style={{ flex: '1 1 400px', background: '#005495', color: '#fff', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                  <h4 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1px' }}>FOR INDIAN DONORS</h4>
                  <p style={{ textAlign: 'center', marginBottom: '32px', fontSize: '0.9rem', opacity: 0.9 }}>
                    (Donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961)
                  </p>
                  <div style={{ display: 'grid', gap: '16px', fontSize: '1rem' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Account Name:</span> God Cares Ministries</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Bank:</span> State Bank of India</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Account Number:</span> 43839096336</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Branch:</span> Horamavu</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Branch Code:</span> 040807</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>IFSC Code:</span> SBIN0040807</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>MICR Code:</span> 560002515</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>SWIFT Code:</span> SBININBBM06</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Branch Address:</span> No. 21 & 22, Opp. Sycon Apartments, Horamavu Main Road, Horamavu, Bengaluru - 560043, Karnataka, India.</span>
                    </div>
                  </div>
                </div>

                {/* FOR FOREIGN DONORS */}
                <div style={{ flex: '1 1 400px', background: '#005495', color: '#fff', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                  <h4 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '1px' }}>FOR FOREIGN DONORS</h4>
                  <p style={{ textAlign: 'center', marginBottom: '32px', fontSize: '0.9rem', opacity: 0.9 }}>
                    Designated FCRA Receipt-cum-Utilisation Account
                  </p>
                  <div style={{ display: 'grid', gap: '16px', fontSize: '1rem' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Account Name:</span> God Cares Ministries</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Bank:</span> State Bank of India</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Account Number:</span> 43770602442</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Branch:</span> New Delhi</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Branch Code:</span> 00691</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>IFSC Code:</span> SBIN0000691</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>SWIFT Code:</span> SBININBB104</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ fontWeight: 'bold' }}>✓</span> <span><span style={{ opacity: 0.9 }}>Branch Address:</span> State Bank of India, New Delhi Main Branch, FCRA Cell, 11 Sansad Marg New Delhi - 110001, India</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
