import React from 'react';
import Backdrop from '../components/Backdrop';
import gratitude from '../assets/gratitude.png';

// Reusable Acknowledgement / Contribution Card Component
const AcknowledgementCard = ({ title, items, description }) => {
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

            {items && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {items.map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ color: '#d97706', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>&#10003;</span>
                            <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                        </div>
                    ))}
                </div>
            )}

            {description && (
                <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8' }}>
                    {description}
                </p>
            )}
        </div>
    );
};

const Credits = () => {
    const specialAcknowledgements = [
        "Advisors and mentors for their guidance",
        "Sponsors and supporters for their generosity",
        "Creative contributors in music, lyrics, and production",
        "Technical teams including developers, designers, and AI contributors",
        "Media and promotion partners for their outreach"
    ];

    const projectContributions = [
        "Singers and musicians",
        "Sound engineers and production teams",
        "Visual artists and media creators"
    ];

    const volunteersText = "A special note of gratitude to the volunteers and coordinators whose dedication, time, and tireless efforts continue to drive this mission forward.";
    const supportersText = "A special note of gratitude to the volunteers and coordinators whose dedication, time, and tireless efforts continue to drive this mission forward.";

    return (
        <div className="min-h-screen bg-white text-black p-8">
            <Backdrop title="Credit & Sincere Thanks" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: '"Century Gothic", sans-serif', textAlign: 'center' }}>
                {/* Heading */}
                <h2 style={{ fontSize: '26px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
                    Our Gratitude
                </h2>

                {/* Description Text */}
                <p style={{ maxWidth: '850px', margin: '0 auto 40px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                    With deep reverence and heartfelt gratitude, we first thank God Almighty for His unfailing love, grace, and guidance—who made possible the completion of "The Holy Sabbath" and continues to lead us in the creation of "The Universal Royal Law of Love." We are truly grateful to every individual and organization whose support, encouragement, and selfless service have helped bring this vision to life.
                </p>

                {/* Image Container */}
                <div style={{ maxWidth: '850px', margin: '0 auto 60px auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                    <img
                        src={gratitude}
                        alt="Our Gratitude Banner"
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    />
                </div>

                {/* Grid Container for Acknowledgement Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {/* Row 1 */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        <AcknowledgementCard
                            title="Special Acknowledgements"
                            items={specialAcknowledgements}
                        />
                        <AcknowledgementCard
                            title="Project Contributions"
                            items={projectContributions}
                        />
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        <AcknowledgementCard
                            title="Volunteers & Coordinators"
                            description={volunteersText}
                        />
                        <AcknowledgementCard
                            title="Supporters & Well-Wishers"
                            description={supportersText}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credits;