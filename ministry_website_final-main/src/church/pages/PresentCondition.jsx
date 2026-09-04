import React from 'react';
import { Link } from 'react-router-dom';
import heroBanner from '../assets/present-world/hero.png';
import violenceArt from '../assets/present-world/violence.png';

const GOLD = '#c9a227';
const GOLD_DARK = '#b45309';
const BODY = '#374151';

const headingStyle = {
    fontFamily: 'Anastasia, serif',
    color: GOLD,
    fontWeight: 900,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    margin: 0,
    lineHeight: 1.3,
};

const ThemeCard = ({ title, description, items }) => (
    <div
        style={{
            backgroundColor: '#f8f0dc',
            borderRadius: '28px',
            padding: '32px 30px 28px',
            boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            textAlign: 'left',
            height: '100%',
        }}
    >
        <h3
            style={{
                fontSize: '20px',
                fontFamily: '"Century Gothic", sans-serif',
                fontWeight: 800,
                color: GOLD_DARK,
                margin: '0 0 12px 0',
            }}
        >
            {title}
        </h3>
        <p style={{ fontSize: '14px', color: BODY, lineHeight: 1.6, margin: '0 0 16px 0' }}>
            {description}
        </p>
        <h4
            style={{
                fontSize: '14px',
                fontFamily: '"Century Gothic", sans-serif',
                fontWeight: 800,
                color: GOLD_DARK,
                margin: '0 0 12px 0',
            }}
        >
            Key Initiatives:
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {items.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: '14px', lineHeight: 1.4 }}>✓</span>
                    <span style={{ fontSize: '14px', color: BODY, lineHeight: 1.5 }}>{item}</span>
                </div>
            ))}
        </div>
    </div>
);

const PresentCondition = () => {
    const themes = [
        {
            title: 'Personal & Moral Challenges',
            description: 'The album explores the inner condition of the human heart and its departure from righteousness:',
            items: [
                'Pride, selfishness, and self-centered living',
                'Deceit, hypocrisy, lying, and false witness',
                'Envy, jealousy, hatred, and destructive thoughts',
                'Moral decline through lust, immorality, and addiction',
                'Spiritual drift, rebellion, and rejection of truth',
            ],
        },
        {
            title: 'Domestic & Social Brokenness',
            description: 'It portrays the pain and instability within homes and communities:',
            items: [
                'Broken families, unfaithfulness, and betrayal',
                'Domestic violence and loss of trust',
                'Emotional suffering, mental distress, and hopelessness',
                'Abuse, exploitation, and crimes against women and children',
                'Division, gossip, and breakdown of relationships',
            ],
        },
        {
            title: 'Crime, Violence & Injustice',
            description: 'The album exposes the growing presence of injustice in the world:',
            items: [
                'Theft, fraud, bribery, and corruption',
                'Violence, cruelty, and loss of human compassion',
                'Exploitation of the vulnerable and human trafficking',
                'War, destruction, and disregard for life',
                'Oppression and suffering of the weak',
            ],
        },
        {
            title: 'Societal & Cultural Challenges',
            description: 'It highlights the broader struggles affecting society:',
            items: [
                'Poverty, inequality, and economic hardship',
                'Social discrimination and cultural divisions',
                'Exploitation of children and vulnerable communities',
                'Gender injustice and devaluation of life',
                'Addiction, moral decline, and neglect of public responsibility',
            ],
        },
        {
            title: 'Spiritual & Religious Concerns',
            description: 'The album also reveals the condition of spiritual life:',
            items: [
                'Religious hypocrisy without true transformation',
                'Division and conflict among faith communities',
                "Misuse of God's name and loss of reverence",
                'Love of pleasure over truth and righteousness',
                'Decline in faith, holiness, and obedience',
            ],
        },
    ];

    return (
        <div
            className="present-world-page"
            style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                minHeight: '100vh',
                width: '100%',
                fontFamily: '"Century Gothic", sans-serif',
            }}
        >
            <style>{`
                .present-world-page, .present-world-page * { box-sizing: border-box; }
                .present-world-page img { max-width: 100%; }
                .present-hero {
                    position: relative;
                    width: 100%;
                    display: block;
                    line-height: 0;
                }
                .present-hero img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .present-hero-link {
                    position: absolute;
                    left: 50%;
                    bottom: 18%;
                    transform: translateX(-50%);
                    width: min(72%, 720px);
                    height: 22%;
                    border-radius: 999px;
                }
                .present-wrap {
                    max-width: 1248px;
                    margin: 0 auto;
                    padding: 48px 40px 80px;
                    text-align: center;
                }
                .present-theme-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 28px;
                    margin-top: 36px;
                }
                .present-theme-grid .theme-span {
                    grid-column: 1 / -1;
                    max-width: calc(50% - 14px);
                    margin: 0 auto;
                    width: 100%;
                }
                @media (max-width: 900px) {
                    .present-wrap { padding: 32px 20px 60px; }
                    .present-theme-grid { grid-template-columns: 1fr; }
                    .present-theme-grid .theme-span { max-width: 100%; }
                }
            `}</style>

            <div className="present-hero">
                <img src={heroBanner} alt="Condition of the Present World" />
                <Link
                    to="/church/participant-registration"
                    className="present-hero-link"
                    aria-label='Join "The Universal Royal Law of Love" Project'
                />
            </div>

            <div className="present-wrap">
                <h2 style={{ ...headingStyle, fontSize: '28px', marginBottom: '22px' }}>
                    Condition of the Present World
                </h2>
                <p
                    style={{
                        maxWidth: '980px',
                        margin: '0 auto 40px auto',
                        fontSize: '15px',
                        lineHeight: 1.8,
                        color: BODY,
                    }}
                >
                    We are living in a time of profound moral and spiritual decline. Across the world, the foundations of truth, justice, and righteousness are being shaken. What was once considered right is now often ignored, and what was once condemned is increasingly normalized. Society is witnessing a steady erosion of values—where respect for authority, reverence for life, and commitment to moral principles are fading. The absence of guiding laws rooted in truth and love has led to confusion, disorder, and instability.
                </p>

                <div
                    style={{
                        maxWidth: '920px',
                        margin: '0 auto 64px auto',
                        borderRadius: '80px',
                        overflow: 'hidden',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.16)',
                    }}
                >
                    <img
                        src={violenceArt}
                        alt="Scream of Violence"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                <h2 style={{ ...headingStyle, fontSize: '26px' }}>
                    Themes & Issues Explored in the Album
                </h2>

                <div className="present-theme-grid">
                    {themes.map((theme, index) => (
                        <div
                            key={theme.title}
                            className={index === themes.length - 1 ? 'theme-span' : undefined}
                        >
                            <ThemeCard {...theme} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PresentCondition;
