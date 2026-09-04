import React from 'react';
import Backdrop from '../components/Backdrop';
import law from '../assets/law.png';
import law2 from '../assets/law2.png';
import power from '../assets/power.png';
import power2 from '../assets/power2.png';
import songs from '../assets/songs.png';

// Frame images for bottom sections
import frame197 from '../assets/Frame 197.png';
import frame198 from '../assets/Frame 198.png';
import frame199 from '../assets/Frame 199.png';
import frame200 from '../assets/Frame 200.png';
import frame201 from '../assets/Frame 201.png';
import frame202 from '../assets/Frame 202.png';
import frame203 from '../assets/Frame 203.png';
import frame204 from '../assets/Frame 204.png';
import frame205 from '../assets/Frame 205.png';
import frame206 from '../assets/Frame 206.png';
import frame207 from '../assets/Frame 207.png';
import frame208 from '../assets/Frame 208.png';
import frame209 from '../assets/Frame 209.png';
import frame210 from '../assets/Frame 210.png';
import frame211 from '../assets/Frame 211.png';
import frame212 from '../assets/Frame 212.png';

// love
import love1 from '../assets/love/love1.png';
import love2 from '../assets/love/love2.png';
import love3 from '../assets/love/love3.png';
import love4 from '../assets/love/love4.png';
import love5 from '../assets/love/love5.png';
import love6 from '../assets/love/love6.png';
import love7 from '../assets/love/love7.png';
import love8 from '../assets/love/love8.png';
import love9 from '../assets/love/love9.png';
import love10 from '../assets/love/love10.png';
import love11 from '../assets/love/love11.png';
import love12 from '../assets/love/love12.png';
import love13 from '../assets/love/love13.png';
import love14 from '../assets/love/love14.png';
import love15 from '../assets/love/love15.png';
import love16 from '../assets/love/love16.png';
import love17 from '../assets/love/love17.png';
import love18 from '../assets/love/love18.png';
import love19 from '../assets/love/love19.png';
import love20 from '../assets/love/love20.png';
import love21 from '../assets/love/love21.png';
import love22 from '../assets/love/love22.png';
import love23 from '../assets/love/love23.png';
import love24 from '../assets/love/love24.png';
import love25 from '../assets/love/love25.png';
import love26 from '../assets/love/love26.png';
import love27 from '../assets/love/love27.png';
import love28 from '../assets/love/love28.png';
import love29 from '../assets/love/love29.png';
import love30 from '../assets/love/love30.png';
import love31 from '../assets/love/love31.png';
import love32 from '../assets/love/love32.png';

const WhyNeeded = () => {
    const imagesList = [
        love1, love2, love3, love4, love5, love6, love7, love8, 
        love9, love10, love11, love12, love13, love14, love15, love16, 
        love17, love18, love19, love20, love21, love22, love23, love24, 
        love25, love26, love27, love28, love29, love30, love31, love32
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <style>{`
                @media (max-width: 768px) {
                    .images-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            
            {/* Backdrop Hero */}
            <Backdrop title="Why the Album is Needed?" />

            {/* Main Content */}
            <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '80px 60px', textAlign: 'center' }}>
                
                {/* Main Heading */}
                <h1 style={{ 
                    fontSize: '52px', 
                    fontFamily: 'Anastasia', 
                    fontWeight: '900', 
                    color: '#f59e0b', 
                    letterSpacing: '2px', 
                    textTransform: 'uppercase', 
                    marginBottom: '50px',
                    lineHeight: '1.2'
                }}>
                    A TIMELY MESSAGE FOR A TROUBLED WORLD
                </h1>

                {/* Introduction Paragraphs */}
                <div style={{ maxWidth: '1400px', margin: '0 auto 80px auto', textAlign: 'center' }}>
                    <p style={{ 
                        fontSize: '19px', 
                        lineHeight: '1.8', 
                        color: '#1f2937', 
                        marginBottom: '25px',
                        fontFamily: 'Century Gothic, sans-serif'
                    }}>
                        In an age marked by confusion, moral decline, and spiritual emptiness, the need for truth, guidance, and restoration has never been greater. Humanity is searching for meaning, peace, and direction—but often in the wrong places.
                    </p>
                    <p style={{ 
                        fontSize: '19px', 
                        lineHeight: '1.8', 
                        color: '#1f2937',
                        fontFamily: 'Century Gothic, sans-serif'
                    }}>
                        This album emerges as a response to that need—offering a message rooted in timeless truth, expressed through the universal language of music.
                    </p>
                </div>

                {/* SETTING THE WORDS OF THE LAW TO MUSIC - Image 1 */}
                <div style={{ maxWidth: '1200px', margin: '0 auto 60px auto' }}>
                    <div style={{ 
                        width: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        backgroundColor: '#f9fafb'
                    }}>
                        <img 
                            src={law} 
                            alt="Setting the Words of the Law to Music" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>
                </div>

                {/* GOD'S GUIDANCE TO MOSES - Image 2 */}
                <div style={{ maxWidth: '1200px', margin: '0 auto 100px auto' }}>
                    <div style={{ 
                        width: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        backgroundColor: '#f9fafb'
                    }}>
                        <img 
                            src={law2} 
                            alt="God's Guidance to Moses" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>
                </div>

                {/* THE POWER OF MUSIC TO SHAPE LIVES Section */}
                <div style={{ maxWidth: '1400px', margin: '0 auto 80px auto' }}>
                    <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        {/* Image */}
                        <div style={{ flex: '1 1 450px', minWidth: '300px' }}>
                            <div style={{ 
                                width: '100%',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                backgroundColor: '#f9fafb'
                            }}>
                                <img 
                                    src={power} 
                                    alt="The Power of Music to Shape Lives" 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        display: 'block'
                                    }} 
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
                            <h3 style={{ 
                                fontSize: '32px', 
                                fontFamily: 'Anastasia', 
                                fontWeight: '900', 
                                color: '#f59e0b', 
                                letterSpacing: '1.5px', 
                                textTransform: 'uppercase', 
                                marginBottom: '25px'
                            }}>
                                THE POWER OF MUSIC TO SHAPE LIVES
                            </h3>
                            <p style={{ 
                                fontSize: '17px', 
                                lineHeight: '1.8', 
                                color: '#374151', 
                                marginBottom: '20px',
                                fontFamily: 'Century Gothic, sans-serif'
                            }}>
                                Throughout history, music has played a vital role in teaching, healing, and transforming hearts.
                            </p>
                            <p style={{ 
                                fontSize: '17px', 
                                lineHeight: '1.8', 
                                color: '#374151', 
                                marginBottom: '25px',
                                fontFamily: 'Century Gothic, sans-serif'
                            }}>
                                In the experience of Israel, songs were used to preserve truth, strengthen faith, and unite people. As they journeyed through the wilderness, God's commandments, promises, and mighty works were expressed through music—helping people remember, reflect, and remain faithful.
                            </p>

                            {/* Bullet Points */}
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>Music fixed divine truths in the mind</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>It uplifted hearts during trials and difficulties</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>It brought unity, order, and spiritual connection</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>It strengthened faith and trust in God</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* TEACHING TRUTH THROUGH SONG - Yellow Section */}
                <div style={{ 
                    backgroundColor: '#fef9e7', 
                    borderTop: '2px solid #fde68a', 
                    borderBottom: '2px solid #fde68a', 
                    padding: '60px 40px', 
                    marginBottom: '80px'
                }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <h3 style={{ 
                            fontSize: '38px', 
                            fontFamily: 'Anastasia', 
                            fontWeight: '900', 
                            color: '#f59e0b', 
                            letterSpacing: '1.5px', 
                            textTransform: 'uppercase', 
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}>
                            TEACHING TRUTH THROUGH SONG
                        </h3>
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                            <p style={{ 
                                fontSize: '17px', 
                                lineHeight: '1.9', 
                                color: '#374151', 
                                marginBottom: '20px',
                                fontFamily: 'Century Gothic, sans-serif'
                            }}>
                                God instructed that His laws should not only be spoken—but taught diligently, repeated, and remembered.
                            </p>
                            <p style={{ 
                                fontSize: '17px', 
                                lineHeight: '1.9', 
                                color: '#374151', 
                                marginBottom: '20px',
                                fontFamily: 'Century Gothic, sans-serif'
                            }}>
                                In ancient times, even children learned divine principles through songs. As they sang together, truth became part of their daily lives—shaping their character and guiding their actions.
                            </p>
                            <p style={{ 
                                fontSize: '18px', 
                                lineHeight: '1.9', 
                                color: '#1f2937', 
                                fontWeight: 'bold',
                                fontFamily: 'Century Gothic, sans-serif',
                                textAlign: 'center'
                            }}>
                                This principle remains powerful today:<br />
                                What is sung is remembered. What is remembered shapes life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* MUSIC AS A SOURCE OF HEALING & HOPE Section */}
                <div style={{ maxWidth: '1400px', margin: '0 auto 100px auto' }}>
                    <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        {/* Image */}
                        <div style={{ flex: '1 1 450px', minWidth: '300px' }}>
                            <div style={{ 
                                width: '100%',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                backgroundColor: '#f9fafb'
                            }}>
                                <img 
                                    src={power2} 
                                    alt="Music as a Source of Healing & Hope" 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        display: 'block'
                                    }} 
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
                            <h3 style={{ 
                                fontSize: '32px', 
                                fontFamily: 'Anastasia', 
                                fontWeight: '900', 
                                color: '#f59e0b', 
                                letterSpacing: '1.5px', 
                                textTransform: 'uppercase', 
                                marginBottom: '25px'
                            }}>
                                MUSIC AS A SOURCE OF HEALING & HOPE
                            </h3>
                            <p style={{ 
                                fontSize: '17px', 
                                lineHeight: '1.8', 
                                color: '#374151', 
                                marginBottom: '25px',
                                fontFamily: 'Century Gothic, sans-serif'
                            }}>
                                Even in daily life, songs of praise have been known to bring joy, remove negativity, and create an atmosphere of hope and spiritual connection.
                            </p>

                            {/* Bullet Points */}
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>Calm troubled minds</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>Lift hearts from discouragement</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>Replace fear with faith</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '16px', color: '#374151' }}>
                                    <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '20px' }}>✓</span>
                                    <span>Bring peace in the midst of chaos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* THE UNIVERSAL ROYAL LAW OF LOVE Section */}
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ 
                        fontSize: '48px', 
                        fontFamily: 'Anastasia', 
                        fontWeight: '900', 
                        color: '#f59e0b', 
                        letterSpacing: '2px', 
                        textTransform: 'uppercase', 
                        marginBottom: '20px',
                        lineHeight: '1.2'
                    }}>
                        THE UNIVERSAL ROYAL LAW OF LOVE
                    </h2>
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#6b7280', 
                        fontStyle: 'italic',
                        fontFamily: 'Century Gothic, sans-serif'
                    }}>
                        (A picture tells the story, the purpose, and the message in a single glance.)
                    </p>
                </div>

                {/* Images Grid - 2 columns */}
                <div className="images-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '40px', 
                    maxWidth: '1600px', 
                    margin: '0 auto',
                    padding: '0 20px',
                    width: '100%'
                }}>
                    {imagesList.map((image, index) => (
                        <div key={index} style={{ 
                            width: '100%',
                            minHeight: '300px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            backgroundColor: '#f9fafb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img 
                                src={image} 
                                alt={`Love Image ${index + 1}`} 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block',
                                    objectFit: 'contain',
                                    maxHeight: '600px'
                                }} 
                                onError={(e) => {
                                    console.error(`Failed to load image ${index + 1}:`, image);
                                    e.target.parentElement.innerHTML = `<div style="padding: 20px; text-align: center; color: #dc2626;">Image ${index + 1} failed to load</div>`;
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div style={{ marginTop: '80px', textAlign: 'center' }}>
                    <h3 style={{ 
                        fontSize: '38px', 
                        fontFamily: 'Anastasia', 
                        fontWeight: '900', 
                        color: '#f59e0b', 
                        letterSpacing: '2px', 
                        textTransform: 'uppercase',
                        marginBottom: '30px'
                    }}>
                        EVILS, SINS, AND SOCIAL PROBLEMS AFFECTING HUMANITY
                    </h3>
                    <p style={{ 
                        fontSize: '18px', 
                        color: '#4b5563',
                        fontFamily: 'Century Gothic, sans-serif',
                        fontStyle: 'italic',
                        marginBottom: '50px'
                    }}>
                        (From Birth to Death)
                    </p>
                </div>

                {/* ...AND MUCH MORE */}
                <div style={{ marginTop: '50px', marginBottom: '80px' }}>
                    <p style={{ 
                        fontSize: '32px', 
                        fontFamily: 'Anastasia', 
                        fontWeight: '900', 
                        color: '#f59e0b', 
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase'
                    }}>
                        ...AND MUCH MORE
                    </p>
                </div>

                {/* SONGS Image - Album Covers */}
                <div style={{ maxWidth: '800px', margin: '0 auto 80px auto' }}>
                    <div style={{ 
                        width: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        backgroundColor: '#000'
                    }}>
                        <img 
                            src={songs} 
                            alt="Album Covers" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>
                </div>

                {/* Frame Images Section - Replacing text boxes with images */}
                <div style={{ maxWidth: '1600px', margin: '0 auto 80px auto' }}>
                    {/* Frame 197 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame197} 
                            alt="Section 1" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 198 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame198} 
                            alt="Section 2" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 199 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame199} 
                            alt="Section 3" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 200 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame200} 
                            alt="Section 4" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 201 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame201} 
                            alt="Section 5" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 202 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame202} 
                            alt="Section 6" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 203 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame203} 
                            alt="Section 7" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 204 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame204} 
                            alt="Section 8" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 205 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame205} 
                            alt="Section 9" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 206 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame206} 
                            alt="Section 10" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 207 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame207} 
                            alt="Section 11" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 208 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame208} 
                            alt="Section 12" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 209 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame209} 
                            alt="Section 13" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 210 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame210} 
                            alt="Section 14" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 211 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame211} 
                            alt="Section 15" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>

                    {/* Frame 212 */}
                    <div style={{ marginBottom: '40px' }}>
                        <img 
                            src={frame212} 
                            alt="Section 16" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyNeeded;