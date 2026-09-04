import React from 'react';
import Backdrop from '../components/Backdrop';
import w1 from '../assets/scanner/w1.jpg';
import w2 from '../assets/scanner/w2.png';

const SupportMatters = () => {
    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <Backdrop title="Your Support Matters" />
            <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '80px 60px', fontFamily: '"Century Gothic", sans-serif' }}>

                {/* Section 1: Intro Text */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '48px', fontFamily: "Anastasia", fontWeight: '900', color: '#f59e0b', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px', lineHeight: '1.2' }}>
                        Be Part of a Meaningful Mission
                    </h2>
                    <p style={{ maxWidth: '1400px', margin: '0 auto 25px auto', fontSize: '19px', lineHeight: '1.8', color: '#374151' }}>
                        Since the founding of God Cares Ministries in 1999, this mission has continued entirely through the sacrificial support of our own family resources, without financial assistance from any individual, family, organization, or institution—either in India or abroad.
                    </p>
                    <p style={{ maxWidth: '1400px', margin: '0 auto', fontSize: '19px', lineHeight: '1.8', color: '#374151' }}>
                        Today, we humbly invite compassionate hearts across the world to support the production of truth-filled video albums, music albums, documentaries, educational media, and multilingual publications that address and expose the growing evils affecting society today.
                    </p>
                </div>

                {/* Section 2: Mission Guidance & Support Lists */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '80px', maxWidth: '1400px', margin: '0 auto 80px auto' }}>

                    {/* Card 1 */}
                    <div style={{ backgroundColor: '#fef9e7', border: '2px solid #fde68a', borderRadius: '24px', padding: '50px 45px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <h4 style={{ fontSize: '19px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
                            Through these productions, this mission seeks to bring awareness and guidance regarding:
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {[
                                "Violence, hatred, and corruption in society",
                                "Immorality, injustice, and moral decline",
                                "Destruction of family values and human dignity",
                                "Addiction, abuse, and harmful lifestyles",
                                "Religious intolerance, division, and hatred",
                                "Lack of compassion, peace, and respect among humanity",
                                "The urgent need for righteousness, truth, love, harmony, and obedience to the Universal Royal Law of Love"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ color: '#f59e0b', fontSize: '18px', fontWeight: 'bold', marginTop: '3px' }}>✓</span>
                                    <span style={{ fontSize: '17px', color: '#374151', lineHeight: '1.7' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div style={{ backgroundColor: '#fef9e7', border: '2px solid #fde68a', borderRadius: '24px', padding: '50px 45px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <h4 style={{ fontSize: '19px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
                            Your support will help us:
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {[
                                "Produce multilingual video albums and music productions",
                                "Create educational and humanitarian media content",
                                "Translate truth-filled productions into many world languages",
                                "Reach people globally through digital outreach and publications",
                                "Spread messages of peace, righteousness, compassion, truth, and hope",
                                "Educate humanity about 'The Universal Royal Law of Love' and its importance for peaceful living"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ color: '#f59e0b', fontSize: '18px', fontWeight: 'bold', marginTop: '3px' }}>✓</span>
                                    <span style={{ fontSize: '17px', color: '#374151', lineHeight: '1.7' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Section 3: Closing Statement & Bible Verse */}
                <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '1400px', margin: '0 auto 80px auto' }}>
                    <p style={{ maxWidth: '1400px', margin: '0 auto 30px auto', fontSize: '18px', lineHeight: '1.9', color: '#374151' }}>
                        These productions are intended to inspire moral transformation, strengthen families and communities, encourage compassion and righteousness, and guide humanity toward peaceful coexistence.
                    </p>
                    <p style={{ maxWidth: '1400px', margin: '0 auto 30px auto', fontSize: '18px', lineHeight: '1.9', color: '#374151' }}>
                        By supporting this mission, you become part of a global effort to spread truth, love, peace, and hope through media and educational outreach.
                    </p>
                    <blockquote style={{ fontSize: '19px', fontStyle: 'italic', color: '#374151', marginBottom: '40px', fontFamily: '"Century Gothic", sans-serif' }}>
                        &ldquo;He that hath pity upon the poor lendeth unto the Lord.&rdquo; — Proverbs 19:17
                    </blockquote>
                    <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#374151', marginBottom: '15px' }}>
                        We sincerely thank you for your prayers, encouragement, and financial support.
                    </p>
                    <p style={{ fontSize: '19px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '8px' }}>
                        God Cares Ministries
                    </p>
                    <p style={{ fontSize: '18px', color: '#374151', marginBottom: '30px' }}>
                        Serving Truth. Serving Humanity. Serving God.
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#374151' }}>
                        To support this production mission, kindly contact us or contribute through the details provided below.<br />
                        Together, let us spread the message of truth, righteousness, peace, and love to the world.
                    </p>
                </div>

                {/* Section 4: Get Involved Banner */}
                <div style={{ backgroundColor: '#f59e0b', borderRadius: '24px', padding: '60px 40px', textAlign: 'center', marginBottom: '80px', maxWidth: '1600px', margin: '0 auto 80px auto' }}>
                    <h3 style={{ fontSize: '38px', fontFamily: "Anastasia", fontWeight: '900', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px' }}>
                        Get Involved
                    </h3>
                    <p style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '18px', color: '#ffffff', lineHeight: '1.8' }}>
                        Our platform will provide complete details on how you can participate—whether as an individual or a group—including role selection, registration, and opportunities for global exposure.
                    </p>
                </div>

                {/* Section 5: How You Can Support Grid */}
                <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '1600px', margin: '0 auto 80px auto' }}>
                    <h3 style={{ fontSize: '38px', fontFamily: "Anastasia", fontWeight: '900', color: '#f59e0b', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px' }}>
                        How You Can Support
                    </h3>
                    <p style={{ fontSize: '18px', color: '#374151', marginBottom: '40px' }}>
                        We are looking for passionate individuals and organizations who can contribute through:
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
                        {[
                            "Guidance and Mentorship",
                            "Publicity & Promotion Support",
                            "AI-Driven & Creative Contribution",
                            "Advertisement & Media Production",
                            "Coordination, Volunteering, & Outreach"
                        ].map((title, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#f59e0b',
                                border: '2px solid #f59e0b',
                                borderRadius: '24px',
                                padding: '35px 30px',
                                flex: '1 1 220px',
                                maxWidth: '280px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                minHeight: '120px'
                            }}>
                                <span style={{ fontSize: '17px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase', lineHeight: '1.4' }}>
                                    {title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 6: Scan & Donate */}
                <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '1600px', margin: '0 auto 80px auto' }}>
                    <h3 style={{ fontSize: '38px', fontFamily: "Anastasia", fontWeight: '900', color: '#f59e0b', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '60px' }}>
                        Scan & Donate
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

                        {/* QR Box 1 */}
                        <div style={{ backgroundColor: '#fff', border: '2px solid #e5e7eb', borderRadius: '24px', padding: '40px 35px', width: '380px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                            <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7', marginBottom: '30px', textAlign: 'left' }}>
                                This State Bank of India Current Account is maintained solely for charitable, humanitarian, and ministry purposes.
                            </p>
                            <div style={{ backgroundColor: '#fef9e7', padding: '12px 18px', borderRadius: '24px', display: 'inline-block', marginBottom: '25px' }}>
                                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#f59e0b' }}>STATE BANK OF INDIA</span>
                            </div>
                            <div style={{ width: '220px', height: '220px', margin: '0 auto 20px auto', backgroundColor: '#f9fafb', borderRadius: '16px', overflow: 'hidden' }}>
                                <img src={w1} alt="QR Code 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p style={{ fontSize: '14px', color: '#6b7280', wordBreak: 'break-all' }}>UPI ID: 326783046725799@cnrb</p>
                        </div>

                        {/* Form Box */}
                        <div style={{ backgroundColor: '#fff', border: '2px solid #e5e7eb', borderRadius: '24px', padding: '40px 35px', width: '420px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'left' }}>
                            <h4 style={{ fontSize: '18px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 'bold', color: '#374151', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>
                                YOUR CONTRIBUTION MAKES A DIFFERENCE
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Full Name" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #d1d5db', fontSize: '15px' }} readOnly />
                                <input type="email" placeholder="Email Address" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #d1d5db', fontSize: '15px' }} readOnly />
                                <input type="text" placeholder="Phone Number" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #d1d5db', fontSize: '15px' }} readOnly />
                                <div>
                                    <span style={{ fontSize: '15px', color: '#f59e0b', fontWeight: 'bold' }}>Select Amount*</span>
                                    <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                                        {['₹ 500', '₹ 1000', '₹ 5000', 'Custom Amount'].map((amt, idx) => (
                                            <button key={idx} style={{ padding: '10px 16px', borderRadius: '10px', border: '2px solid #f59e0b', backgroundColor: '#fef9e7', fontSize: '14px', color: '#f59e0b', fontWeight: 'bold' }}>{amt}</button>
                                        ))}
                                    </div>
                                </div>
                                <textarea placeholder="Various Screenshot*" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #d1d5db', fontSize: '15px', minHeight: '80px' }} readOnly />
                                <textarea placeholder="Write your message" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #d1d5db', fontSize: '15px', minHeight: '80px' }} readOnly />
                                <div style={{ textAlign: 'center', backgroundColor: '#f59e0b', padding: '14px', borderRadius: '24px', cursor: 'pointer', marginTop: '15px' }}>
                                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff' }}>Make a Donation ♡</span>
                                </div>
                            </div>
                        </div>

                        {/* QR Box 2 */}
                        <div style={{ backgroundColor: '#fff', border: '2px solid #e5e7eb', borderRadius: '24px', padding: '40px 35px', width: '380px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                            <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7', marginBottom: '30px', textAlign: 'left' }}>
                                This Canara Bank Current Account is designated exclusively for participation, enrolment and voluntary support for &ldquo;The Universal Royal Law of Love&rdquo; Project.
                            </p>
                            <div style={{ backgroundColor: '#fef9e7', padding: '12px 18px', borderRadius: '24px', display: 'inline-block', marginBottom: '25px' }}>
                                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#f59e0b' }}>CANARA BANK</span>
                            </div>
                            <div style={{ width: '220px', height: '220px', margin: '0 auto 20px auto', backgroundColor: '#f9fafb', borderRadius: '16px', overflow: 'hidden' }}>
                                <img src={w2} alt="QR Code 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p style={{ fontSize: '14px', color: '#6b7280', wordBreak: 'break-all' }}>UPI ID: godcaresministries@sbi</p>
                        </div>

                    </div>
                </div>

                {/* Section 7: For Foreign Donors */}
                <div style={{ backgroundColor: '#f59e0b', borderRadius: '24px', padding: '60px 45px', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '42px', fontFamily: 'Anastasia', fontWeight: '900', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>
                        For Foreign Donors
                    </h3>
                    <p style={{ fontSize: '16px', color: '#ffffff', marginBottom: '35px' }}>
                        Designated FCRA Receipt-cum-Utilisation Account
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
                        {[
                            "Account Name: God Cares Ministries",
                            "Bank: State Bank of India",
                            "Account Number: 43770602442",
                            "Branch: New Delhi",
                            "Branch Code: 00691",
                            "IFSC Code: SBIN0000691",
                            "SWIFT Code: SBININBB104",
                            "Branch Address: State Bank of India, New Delhi Main Branch, FCRA Cell, 11 Sansad Marg New Delhi - 110001, India"
                        ].map((detail, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', marginTop: '3px' }}>✓</span>
                                <span style={{ fontSize: '17px', color: '#ffffff', lineHeight: '1.7' }}>{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SupportMatters;