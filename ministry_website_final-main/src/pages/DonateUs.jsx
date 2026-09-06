import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Heart, Check, User, Mail, Phone, Upload } from 'lucide-react';
import { asset } from '../utils/asset';

const familyMembers = [
  { name: 'C. James White', role: 'Founder' },
  { name: 'Mrs. Vijaya James White', role: 'Co-founder' },
  { name: 'Stanley Dev Adams J.', role: 'Son' },
  { name: 'Sharon Doris Angel J.', role: 'Daughter' }
];

const tiers = [
  {
    label: 'BASIC SUPPORT',
    amount: '₹ 500',
    perks: ['Local Programs', 'Peace Literature']
  },
  {
    label: 'GROWTH SUPPORT',
    amount: '₹ 1000',
    perks: ['Multilingual Trans', 'Sponsor Peace Events']
  },
  {
    label: 'SPONSOR INITIATIVE',
    amount: '₹ 5000',
    perks: ['Impact Reports', 'VIP Event Access']
  }
];

const fcraRows = [
  ['Account Name:', 'God Cares Ministries'],
  ['Bank:', 'State Bank of India'],
  ['Account Number:', '43770602442'],
  ['Branch:', 'New Delhi'],
  ['Branch Code:', '00691'],
  ['IFSC Code:', 'SBIN0000691'],
  ['SWIFT Code:', 'SBININBB104'],
  ['Branch Address:', 'State Bank of India, New Delhi Main Branch, FCRA Cell, 11 Sansad Marg New Delhi – 110001, India']
];

const indianBankLines = [
  { label: 'NAME:', value: 'James White. C' },
  { label: 'MOBILE NO.', value: '+91 88923 36400.' },
  { label: 'A/C. NO:', value: '30037928670.' },
  { label: 'NAME OF THE BANK:', value: 'State Bank of India' },
  { label: 'BANK ADDRESS:', value: 'No.2, A Muni Reddy Layout,' },
  { label: '', value: 'Horamavu Main, Bangalore.' },
  { label: 'PHONE NO. OF BANK:', value: '080 25943396.' },
  { label: 'EMAIL OF BANK:', value: 'sbi.13397@sbi.co.in' },
  { label: 'TYPE OF BANK ACCOUNT:', value: 'Savings Bank Account' },
  { label: 'BANK BRANCH CODE:', value: '13397' },
  { label: 'CIF NO.', value: '85021807847.' },
  { label: 'IFSC CODE:', value: 'SBIN0040807 (After SBIN it is zero zero not OO)' },
  { label: 'SWIFT CODE NO. :', value: 'SBININBB223' }
];

const headingFancy = {
  color: '#005495',
  fontFamily: 'var(--font-heading-fancy)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  margin: 0
};

const bodyText = {
  color: 'var(--text-muted)',
  lineHeight: 1.8,
  fontSize: '1.05rem',
  margin: '0 0 22px 0',
  fontWeight: 400
};

const bodyBold = {
  ...bodyText,
  fontWeight: 700
};

const fieldWrap = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: '#D0D0D0',
  borderRadius: '8px',
  padding: '0 14px',
  height: '44px'
};

const fieldInput = {
  flex: 1,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: '0.92rem',
  color: '#2b2b2c'
};

export default function DonateUs() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [donor, setDonor] = useState({ name: '', email: '', phone: '' });

  const handleDonate = (e) => {
    e.preventDefault();
    const finalAmt = customAmount || selectedAmount;
    navigate('/payment-successful', { state: { amount: finalAmt, name: donor.name } });
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('donate-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <PageHero title="DONATE US" />

      <section className="section" style={{ background: '#ffffff', padding: '64px 0 48px 0' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <h2 style={{ ...headingFancy, fontSize: '3.2rem', textAlign: 'center', marginBottom: '40px' }}>
            Support the Mission of Love
          </h2>

          <h3 style={{ ...headingFancy, fontSize: '2rem', marginBottom: '18px', textAlign: 'left' }}>
            The Founding Family of God Cares Ministries
          </h3>
          <p style={bodyText}>
            God Cares Ministries was established through the vision, sacrifice, and unwavering commitment of one family dedicated to serving humanity with compassion, integrity, and hope. From its very beginning, the ministry has been sustained through their personal dedication, resources, and steadfast commitment to improving lives and promoting universal values that strengthen individuals, families, and communities.
          </p>

          <p style={{ ...bodyText, fontWeight: 700, marginBottom: '10px' }}>The Founding Family</p>
          <div style={{ marginBottom: '28px' }}>
            {familyMembers.map((m) => (
              <p key={m.name} style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 6px 0' }}>
                <strong style={{ color: '#2b2b2c' }}>{m.name}</strong>
                <span> – </span>
                <span>{m.role}</span>
              </p>
            ))}
          </div>

          <p style={bodyText}>
            From the earliest days of the ministry, the founding family has wholeheartedly devoted their time, talents, resources, and personal family savings to establish and sustain its work. Through many challenges and personal sacrifices, they have remained steadfast in their commitment to expanding the ministry&apos;s educational, humanitarian, and community service initiatives.
          </p>
          <p style={bodyText}>
            Throughout its journey, God Cares Ministries has progressed largely through the perseverance and dedication of its founding family. Their vision has always been to serve humanity with sincerity, compassion, and practical care while encouraging values that promote truth, love, justice, peace, responsibility, kindness, integrity, and mutual respect.
          </p>
          <p style={bodyText}>
            Today, the ministry carries out its mission through educational initiatives, humanitarian outreach, community development, and the production of multilingual audio-visual resources designed to inspire hope, strengthen moral and ethical values, and encourage positive transformation in individuals and society.
          </p>
          <p style={bodyText}>
            Among its major initiatives are <strong>The Universal Royal Law of Love</strong> and <strong>The Holy Sabbath</strong>—educational projects that encourage thoughtful reflection on timeless principles that promote love, compassion, justice, responsibility, integrity, respect for one another, and reverence for the Creator. These initiatives seek to foster understanding, meaningful dialogue, and peaceful coexistence among people of every nation, culture, language, and community.
          </p>
          <p style={bodyText}>
            The founding family&apos;s desire has never been personal recognition or material gain. Their greatest fulfilment comes from seeing lives transformed through education, compassionate service, and opportunities that bring hope, dignity, encouragement, and a brighter future to individuals and families facing hardship.
          </p>
          <p style={bodyText}>
            Looking to the future, they aspire to produce high-definition multilingual audio-visual resources and educational materials that can be freely accessed by people throughout the world. Their vision is to make these resources available in as many languages as possible so that people from diverse cultures and backgrounds may benefit from messages that promote truth, love, compassion, justice, peace, responsible living, and mutual respect.
          </p>

          <h3 style={{ ...headingFancy, fontSize: '2rem', margin: '36px 0 18px 0', textAlign: 'left' }}>
            The Founding Family of God Cares Ministries
          </h3>
          <p style={bodyText}>
            The founding family warmly invites compassionate individuals, families, organisations, institutions, and well-wishers to partner with God Cares Ministries in advancing this mission of education, humanitarian service, and community development.
          </p>
          <p style={bodyText}>
            Your encouragement, participation, and generous financial support help expand educational initiatives, develop multilingual audio-visual resources, strengthen humanitarian outreach, and extend practical assistance to individuals and families experiencing poverty, hardship, and crisis.
          </p>
          <p style={bodyText}>
            Together, we can provide nutritious food for hungry families, essential medical care and life-saving medicines for the sick, clothing for those in need, educational assistance for underprivileged children, and support to repair or rebuild unsafe homes that leave families vulnerable to rain, extreme weather, and unsafe living conditions.
          </p>
          <p style={bodyBold}>
            God Cares Ministries serves all people without discrimination, regardless of caste, colour, creed, religion, nationality, language, ethnicity, community, gender, age, social status, or economic condition. Our humanitarian services are offered with compassion, respect, fairness, and a commitment to upholding the dignity, worth, and well-being of every human being.
          </p>
          <p style={bodyText}>
            Every contribution—whether through prayer, encouragement, volunteering, professional expertise, or financial support—helps restore hope, improve lives, and create opportunities for individuals and communities to flourish. Each act of generosity becomes an investment in a future built upon compassion, dignity, justice, mutual care, and lasting hope.
          </p>
          <p style={bodyText}>
            Together, we can build stronger families, healthier communities, and a more compassionate world by promoting universal values that unite rather than divide, bringing hope, practical support, and positive transformation wherever they are needed most.
          </p>
          <p style={{ ...bodyBold, marginBottom: 0 }}>
            Serving humanity with truth, love, compassion, justice, peace, and hope.
          </p>
        </div>
      </section>

      <section style={{ background: '#005495', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div className="donate-mission-inner">
            <div>
              <p style={{ color: '#ffffff', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700, margin: '0 0 12px 0' }}>
                SUPPORT OUR MISSION
              </p>
              <h2
                style={{
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading-fancy)',
                  fontSize: '2.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: 1.2,
                  margin: '0 0 18px 0'
                }}
              >
                Your Support Can Change Lives
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 28px 0' }}>
                Every contribution helps us continue our mission of love, service, and hope for a better tomorrow.
              </p>
              <a
                href="#donate-form"
                onClick={scrollToForm}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--accent-gold)',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  padding: '12px 28px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.98rem'
                }}
              >
                Make a Donation
                <Heart size={16} />
              </a>
            </div>

            <div className="donate-tiers">
              {tiers.map((t) => (
                <div
                  key={t.label}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.55)',
                    borderRadius: '16px',
                    padding: '28px 18px 22px',
                    textAlign: 'center',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '300px'
                  }}
                >
                  <span style={{ fontSize: '0.72rem', letterSpacing: '1.5px', fontWeight: 700, opacity: 0.9 }}>{t.label}</span>
                  <div
                    style={{
                      fontSize: '2.4rem',
                      fontFamily: 'var(--font-heading-fancy)',
                      margin: '10px 0 18px 0',
                      letterSpacing: '1px'
                    }}
                  >
                    {t.amount}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', flex: 1, fontSize: '0.92rem', lineHeight: 2, textAlign: 'left', paddingLeft: '18px' }}>
                    {t.perks.map((p) => (
                      <li key={p} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={16} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#donate-form"
                    onClick={scrollToForm}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #ffffff',
                      color: '#ffffff',
                      borderRadius: '9999px',
                      padding: '10px 18px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.95rem'
                    }}
                  >
                    Donate Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff', padding: '64px 0 48px 0' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <h2 style={{ ...headingFancy, fontSize: '3.2rem', textAlign: 'center', marginBottom: '20px' }}>
            Scan &amp; Donate
          </h2>
          <p style={{ color: 'var(--accent-gold)', textAlign: 'center', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 auto 36px auto', maxWidth: '920px', fontWeight: 700 }}>
            Donations made to God Cares Ministries are eligible for tax exemption in accordance with applicable laws.
            <br />
            Official donation receipts will be provided for eligible contributions.
          </p>

          <div className="donate-scan-grid">
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                This <strong>State Bank of India</strong> Current Account is maintained solely for charitable, humanitarian, and ministry purposes.
              </p>
              <div style={{ position: 'relative', paddingTop: '18px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#2257A7',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    letterSpacing: '1px',
                    fontWeight: 700,
                    padding: '8px 16px',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap',
                    zIndex: 1
                  }}
                >
                  STATE BANK OF INDIA
                </div>
                <div style={{ border: '2px solid #2257A7', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
                  <img
                    src={asset('/donate-us-assets/p0_img3_x3538.png')}
                    alt="State Bank of India - Scan to Donate"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>

            <form
              id="donate-form"
              onSubmit={handleDonate}
              style={{
                border: '2px solid #2b2b2c',
                borderRadius: '12px',
                padding: '28px 22px 24px',
                background: '#ffffff'
              }}
            >
              <h3
                style={{
                  textAlign: 'center',
                  fontSize: '1.05rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#2b2b2c',
                  margin: '0 0 20px 0',
                  fontWeight: 700
                }}
              >
                Your Contribution Makes a Difference
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={fieldWrap}>
                  <User size={18} color="#4AA3E0" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={donor.name}
                    onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                    style={fieldInput}
                  />
                </div>
                <div style={fieldWrap}>
                  <Mail size={18} color="#4AA3E0" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={donor.email}
                    onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                    style={fieldInput}
                  />
                </div>
                <div style={fieldWrap}>
                  <Phone size={18} color="#4AA3E0" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={donor.phone}
                    onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
                    style={fieldInput}
                  />
                </div>

                <p style={{ color: '#005495', fontWeight: 700, fontSize: '0.88rem', margin: '6px 0 0 0' }}>Select Amount*</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '8px' }}>
                  {[
                    { id: '500', label: '₹ 500' },
                    { id: '1000', label: '₹ 1000' },
                    { id: '5000', label: '₹ 5000' },
                    { id: 'custom', label: 'Custom Amount' }
                  ].map((amt) => {
                    const active = amt.id === 'custom' ? Boolean(customAmount) || selectedAmount === 'custom' : selectedAmount === amt.id && !customAmount;
                    return (
                      <button
                        key={amt.id}
                        type="button"
                        onClick={() => {
                          if (amt.id === 'custom') {
                            setSelectedAmount('custom');
                          } else {
                            setSelectedAmount(amt.id);
                            setCustomAmount('');
                          }
                        }}
                        style={{
                          padding: '10px 4px',
                          borderRadius: '8px',
                          border: active ? '2px solid #005495' : '1px solid #bfbfbf',
                          background: '#ffffff',
                          color: '#2b2b2c',
                          fontWeight: 600,
                          cursor: 'pointer',
                          fontSize: '0.78rem'
                        }}
                      >
                        {amt.label}
                      </button>
                    );
                  })}
                </div>
                {selectedAmount === 'custom' && (
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #bfbfbf', fontSize: '0.92rem' }}
                  />
                )}

                <p style={{ color: '#005495', fontWeight: 700, fontSize: '0.88rem', margin: '4px 0 0 0' }}>Upload Screenshot*</p>
                <div style={fieldWrap}>
                  <Upload size={18} color="#4AA3E0" />
                  <input type="file" style={{ ...fieldInput, padding: '8px 0' }} />
                </div>

                <p style={{ color: '#005495', fontWeight: 700, fontSize: '0.88rem', margin: '4px 0 0 0' }}>Message (Optional)</p>
                <textarea
                  rows={4}
                  placeholder="Write your message here....."
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #bfbfbf', fontSize: '0.92rem', resize: 'vertical' }}
                />

                <div style={{ textAlign: 'center', marginTop: '8px' }}>
                  <button
                    type="submit"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#F4C542',
                      color: '#111111',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '12px 28px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: 'pointer'
                    }}
                  >
                    Make a Donation
                    <Heart size={16} />
                  </button>
                </div>
              </div>
            </form>

            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 16px 0' }}>
                This Canara Bank Current Account is designated exclusively for participation, enrolment and voluntary support for &quot;<strong>The Universal Royal Law of Love</strong>&quot; Project.
              </p>
              <div style={{ position: 'relative', paddingTop: '18px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent-gold)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    letterSpacing: '1px',
                    fontWeight: 700,
                    padding: '8px 16px',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap',
                    zIndex: 1
                  }}
                >
                  CANARA BANK
                </div>
                <div style={{ border: '2px solid var(--accent-gold)', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
                  <img
                    src={asset('/donate-us-assets/p0_img2_x3534.png')}
                    alt="Canara Bank - Scan to Donate"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff', padding: '24px 0 48px 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div
            style={{
              background: '#005495',
              borderRadius: '24px',
              padding: '48px 40px',
              color: '#ffffff'
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading-fancy)',
                fontSize: '2.8rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: '0 0 12px 0'
              }}
            >
              For Foreign Donors
            </h2>
            <p style={{ textAlign: 'center', margin: '0 0 28px 0', fontSize: '1.02rem' }}>
              Designated FCRA Receipt-cum-Utilisation Account
            </p>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              {fcraRows.map(([label, value]) => (
                <div key={label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', fontSize: '1rem', lineHeight: 1.5 }}>
                  <Check size={18} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>
                    <strong>{label}</strong> {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff', padding: '24px 0 80px 0' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <h2 style={{ ...headingFancy, fontSize: '2.6rem', textAlign: 'left', marginBottom: '28px' }}>
            &quot;Support the Family Behind This Mission&quot;
          </h2>
          <p style={bodyText}>
            For many years, the founding family of <strong>God Cares Ministries</strong> has sustained the ministry through personal sacrifice, dedicating not only their time, talents, and energy, but also their family savings and a significant portion of their personal income. Believing deeply in the mission entrusted to them, <strong>C. James White made the life-changing decision to leave his employment in order to devote himself full-time to the ministry.</strong> Since then, the family has consistently placed the mission above personal comfort, often carrying substantial financial responsibilities so that the ministry&apos;s educational, humanitarian, and community service initiatives could continue without interruption.
          </p>
          <p style={bodyText}>
            These ongoing sacrifices have placed considerable financial strain on the family. Yet they remain steadfast in their commitment to serving others, continuing the ministry&apos;s work with faith, perseverance, compassion, and hope despite many challenges.
          </p>
          <p style={bodyText}>
            If the mission and values of <strong>God Cares Ministries</strong> have touched your heart, we warmly invite you to consider supporting both the ministry and its founding family. Your generous contribution will help meet the family&apos;s essential living expenses, enable them to continue their full-time service, and strengthen the ministry&apos;s ongoing educational initiatives, humanitarian outreach, multilingual audio-visual productions, and assistance to individuals, families, and communities experiencing poverty and hardship.
          </p>
          <p style={bodyText}>
            Every gift, whether large or small, is deeply appreciated. Your generosity not only helps sustain those who have dedicated their lives to this work but also enables this mission of compassion, education, and humanitarian service to continue reaching people with hope, practical care, knowledge, and opportunities for a better future.
          </p>
          <p style={bodyText}>
            Thank you for standing with God Cares Ministries and its founding family. Your kindness, encouragement, and support become part of a shared commitment to serving humanity with truth, love, compassion, justice, peace, and hope. Together, we can continue extending this mission of service and making a lasting difference in the lives of many.
          </p>
          <p style={bodyText}>Bank details and QR code for contributions are provided below.</p>
          <p style={{ ...bodyText, marginBottom: '36px' }}>
            We sincerely thank you for your kindness, goodwill, prayers, and support.
          </p>

          <div className="donate-bank-grid">
            <div>
              <h3 style={{ ...headingFancy, fontSize: '2.6rem', marginBottom: '20px', textAlign: 'left' }}>Bank Details</h3>
              {indianBankLines.map((item, idx) => (
                <p key={idx} style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.85, margin: 0 }}>
                  {item.label && <strong>{item.label} </strong>}{item.value}
                </p>
              ))}
            </div>
            <div
              style={{
                border: '1px solid #2b2b2c',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#F3F6FB'
              }}
            >
              <img
                src={asset('/donate-us-assets/p0_img0_x3530.png')}
                alt="Scan to pay C. James White"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
