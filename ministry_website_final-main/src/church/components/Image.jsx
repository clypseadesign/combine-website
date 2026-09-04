import React from 'react';

const AlbumSection = ({ title, imageUrl, imageAlt, children }) => {
    return (
        <section style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '20px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                {title}
            </h2>

            <div style={{ maxWidth: '750px', margin: '0 auto 25px auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>

            {children && (
                <div style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
                    {children}
                </div>
            )}
        </section>
    );
};

const JesusCustomSection = ({ title, imageUrl, imageAlt, content }) => {
    return (
        <AlbumSection
            title={title}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
        >
            {/* <p style={{ textAlign: 'center' }}>
                {content}
            </p> */}
        </AlbumSection>
    );
};

export default JesusCustomSection;