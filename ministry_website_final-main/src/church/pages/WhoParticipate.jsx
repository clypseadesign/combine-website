import React from 'react';
import Backdrop from '../components/Backdrop';
import participate from '../assets/participate.png';
import participate2 from '../assets/participate2.png';
// Reusable Join Card Component
const JoinCard = ({ title, items }) => {
    return (
        <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fde68a',
            borderRadius: '24px',
            padding: '35px 30px',
            flex: '1 1 450px',
            maxWidth: '480px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left'
        }}>
            <h3 style={{ fontSize: '18px', fontFamily: '"Century Gothic", sans-serif', fontWeight: 'bold', color: '#b45309', letterSpacing: '0.5px', marginBottom: '20px' }}>
                {title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: '#d97706', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>&#10003;</span>
                        <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const WhoParticipate = () => {
    return (
        <div className="min-h-screen bg-white text-black p-8">
            <Backdrop title="Who Can Participate ?" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: '"Century Gothic", sans-serif', textAlign: 'center' }}>

                {/* Heading */}
                <h2 style={{ fontSize: '26px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '25px' }}>
                    A Global Invitation to All
                </h2>

                {/* Description Paragraphs */}
                <p style={{ maxWidth: '850px', margin: '0 auto 15px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                    The Universal Royal Law of Love is open to everyone—transcending boundaries of age, status, caste, community, culture, religion, and nationality. This is a worldwide movement inviting people from every background to unite through music, creativity, and purpose.
                </p>
                <p style={{ maxWidth: '850px', margin: '0 auto 40px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151', fontWeight: 'bold' }}>
                    Be one among 10,000+ participants—your place awaits.
                </p>

                {/* Banner Images Section */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', marginBottom: '60px' }}>
                    <div style={{ maxWidth: '850px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                        <img
                            src={participate}
                            alt="Global Invitation Banner 1"
                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ maxWidth: '850px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                        <img
                            src={participate2

                            }
                            alt="Global Invitation Banner 2"
                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* Who Can Join Heading */}
                <h2 style={{ fontSize: '26px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '40px' }}>
                    Who Can Join?
                </h2>

                {/* Grid Container for Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '80px' }}>
                    {/* Row 1 */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        <JoinCard
                            title="Extended Participation"
                            items={[
                                "TV and serial artists",
                                "Stage performers and music academy members",
                                "Educational institutions and student groups",
                                "Stage performers and music academy members",
                                "Church choirs, pastors, and worship teams",
                                "Individuals who have never had an opportunity before"
                            ]}
                        />
                        <JoinCard
                            title="Creative & Artistic Contributors"
                            items={[
                                "Writers, scriptwriters, and coordinators",
                                "Directors, cinematographers, and designers",
                                "Actors and performers",
                                "Media, press, and digital professionals",
                                "Audio/video engineers and technical experts",
                                "AI performers and innovators"
                            ]}
                        />
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        <JoinCard
                            title="Core Contributors"
                            items={[
                                "Esteemed lyricists and music directors",
                                "Professional singers and vocalists",
                                "Creative directors and global artists"
                            ]}
                        />
                        <JoinCard
                            title="Musicians & Instruments"
                            items={[
                                "Musicians & Instruments",
                                "Traditional and rare instrument specialists",
                                "Artists exploring global and fusion sounds"
                            ]}
                        />
                    </div>
                </div>

                {/* Experts & Thought Leaders Section */}
                <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left', padding: '0 20px' }}>
                    <h2 style={{ fontSize: '26px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'center' }}>
                        Experts & Thought Leaders
                    </h2>
                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '15px' }}>
                        Participants will be part of powerful real-life dramatizations, where themes of love, justice, and righteousness are portrayed through relatable, real-world scenarios—making the message impactful and memorable.
                    </p>
                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '15px' }}>
                        Respected experts and influential personalities from various fields are invited to contribute:
                    </p>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '15px' }}>
                        <span style={{ color: '#d97706', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>&#10003;</span>
                        <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>Narrations and insights</span>
                    </div>
                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        Their contributions add depth, credibility, and meaningful perspective to the project.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default WhoParticipate;