import React from 'react';
import Backdrop from '../components/Backdrop';
import sponsor from '../assets/sponsor.png';
import sponsor2 from '../assets/sponsor2.png';
import sponsor3 from '../assets/sponsor3.png';


// Reusable Sponsor Section Component
const SponsorSection = ({ title, imageUrl, description, extraDescription }) => {
    return (
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            {/* Section Heading */}
            <h2 style={{ fontSize: '24px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '30px', lineHeight: '1.4' }}>
                {title}
            </h2>

            {/* Image Container */}
            <div style={{ maxWidth: '850px', margin: '0 auto 30px auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                <img
                    src={imageUrl}
                    alt={title}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
            </div>

            {/* Description Text */}
            <p style={{ maxWidth: '850px', margin: '0 auto 15px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                {description}
            </p>

            {/* Optional Extra Description Text */}
            {extraDescription && (
                <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                    {extraDescription}
                </p>
            )}
        </div>
    );
};

const BecomeSponsor = () => {
    return (
        <div className="min-h-screen bg-white text-black p-8">
            <Backdrop title="Become a Sponsor" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: '"Century Gothic", sans-serif' }}>

                {/* Section 1: Become a Sponsor for Charity */}
                <SponsorSection
                    title="Become a Sponsor for Charity:"
                    imageUrl={sponsor}
                    description="Supporting humanitarian initiatives that bring hope, dignity, education, healthcare, and lasting positive change to communities around the world."
                />

                {/* Section 2: Become a Sponsor for the Albums */}
                <SponsorSection
                    title={<>Become a Sponsor for the Albums:<br />"The Holy Sabbath" & "The Universal Royal Law of Love"</>}
                    imageUrl={sponsor2}
                    description="Help bring these inspiring musical albums to audiences around the world. Created to promote love, peace, compassion, unity, wisdom, and enduring moral values through the universal language of music, these albums are intended to encourage reflection, hope, and positive living. Your sponsorship will support professional music production, recordings, translations, music videos, educational resources, and global outreach, helping these messages reach people of all ages, cultures, and communities across the world. Together, we can inspire hearts, strengthen communities, and make a lasting positive impact."
                />

                {/* Section 3: Become a Sponsor for the Grand Inaugural & Global Launch */}
                <SponsorSection
                    title={<>Become a Sponsor for the Grand Inaugural & Global Launch:<br />"The Holy Sabbath" & "The Universal Royal Law of Love"</>}
                    imageUrl={sponsor3}
                    description="Be part of a landmark occasion celebrating the official launch of these inspiring musical albums. Your sponsorship will help make this prestigious inaugural event possible, supporting world-class event production, artistic performances, multimedia presentations, international participation, and global outreach. Together, we can create a memorable celebration that shares messages of love, peace, unity, hope, and enduring moral values with audiences around the world."
                    extraDescription="Every sponsor and contributor who supports God Cares Ministries' charitable initiatives and the Audio/Visual Albums will be gratefully acknowledged on our official website and, where appropriate, in our productions and promotional materials. This recognition reflects our sincere appreciation for their partnership in advancing a mission of hope, compassion, education, and positive global impact."
                />

            </div>
        </div>
    );
};

export default BecomeSponsor;