import React from 'react';
import { Link } from 'react-router-dom';

import heroBanner from '../assets/highlights/hero.png';
import introArt from '../assets/highlights/intro-art.jpeg';
import rolesArt from '../assets/highlights/roles-art.jpeg';
import previewAlbum from '../assets/highlights/preview-album.jpeg';
import previewSing from '../assets/highlights/preview-sing.jpeg';
import lyricists from '../assets/highlights/lyricists.jpeg';
import musicDirectors from '../assets/highlights/music-directors.jpeg';
import professionalSingers from '../assets/highlights/professional-singers.jpeg';
import tvSingers from '../assets/highlights/tv-singers.jpeg';
import adultSuperSingers from '../assets/highlights/adult-super-singers.jpeg';
import juniorSuperSingers from '../assets/highlights/junior-super-singers.jpeg';
import stageOrchestra from '../assets/highlights/stage-orchestra.jpeg';
import socialMediaSingers from '../assets/highlights/social-media-singers.jpeg';
import pastors from '../assets/highlights/pastors.jpeg';
import churchSoloists from '../assets/highlights/church-soloists.jpeg';
import churchChoirs from '../assets/highlights/church-choirs.jpeg';
import musicAcademy from '../assets/highlights/music-academy.jpeg';
import seniorVocalists from '../assets/highlights/senior-vocalists.jpeg';
import middleAgedVocalists from '../assets/highlights/middle-aged-vocalists.jpeg';
import juniorVocalists from '../assets/highlights/junior-vocalists.jpeg';
import educationalVocalists from '../assets/highlights/educational-vocalists.jpeg';
import vipNarrators from '../assets/highlights/vip-narrators.jpeg';
import filmDirectors from '../assets/highlights/film-directors.jpeg';
import cameramen from '../assets/highlights/cameramen.jpeg';
import screenwriters from '../assets/highlights/screenwriters.jpeg';
import actors from '../assets/highlights/actors.jpeg';
import audioEngineers from '../assets/highlights/audio-engineers.jpeg';
import videoEditors from '../assets/highlights/video-editors.jpeg';
import aiCreators from '../assets/highlights/ai-creators.jpeg';
import graphicDesigners from '../assets/highlights/graphic-designers.jpeg';
import makeupArtists from '../assets/highlights/makeup-artists.jpeg';
import instrumentPerformers from '../assets/highlights/instrument-performers.jpeg';
import undiscovered from '../assets/highlights/undiscovered.jpeg';
import mediaSupport from '../assets/highlights/media-support.jpeg';
import volunteers from '../assets/highlights/volunteers.jpeg';
import webDesigners from '../assets/highlights/web-designers.jpeg';
import closingArt from '../assets/highlights/closing.jpeg';

const GOLD = '#c9a227';
const GOLD_DARK = '#b45309';
const BODY = '#374151';
const DRIVE_URL = 'https://drive.google.com/file/d/1pSWbGLfnl3hpqjatJxzOGGLcOjTxTCHd/view?usp=sharing';

const headingStyle = {
    fontFamily: 'Anastasia, serif',
    color: GOLD,
    fontWeight: 900,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    margin: 0,
    lineHeight: 1.3,
};

const InviteBlock = ({ title, src, note }) => (
    <div className="highlight-invite">
        <h3 className="highlight-invite-title">
            <span className="invite-prefix">WE INVITE: </span>
            <span className="invite-rest">{title}</span>
        </h3>
        {note ? <p className="highlight-invite-note">{note}</p> : null}
        <div className="highlight-photo">
            <img src={src} alt={title} />
        </div>
    </div>
);

const RoleItem = ({ title, text }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <span style={{ color: GOLD, fontSize: '18px', lineHeight: 1.4 }}>●</span>
        <div>
            <h4
                style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: GOLD,
                    margin: '0 0 4px 0',
                    fontFamily: '"Century Gothic", sans-serif',
                }}
            >
                {title}
            </h4>
            <p style={{ fontSize: '14px', color: BODY, lineHeight: 1.6, margin: 0 }}>{text}</p>
        </div>
    </div>
);

const Highlights = () => {
    const stats = [
        { number: '21+', label: 'Lyricists' },
        { number: '21+', label: 'Music Directors' },
        { number: '10,000', label: 'Voices' },
        { number: '21+', label: 'Global Directors' },
        { number: '195', label: 'Countries' },
    ];

    const invites = [
        { title: 'WORLD-RENOWNED DISTINGUISHED LYRICISTS', src: lyricists },
        { title: 'WORLD-RENOWNED MUSIC DIRECTORS', src: musicDirectors },
        { title: 'WORLD-RENOWNED PROFESSIONAL SINGERS', src: professionalSingers },
        { title: 'DISTINGUISHED TELEVISION SERIAL SINGERS', src: tvSingers },
        { title: 'CELEBRATED ADULT SUPER SINGERS OF TV CHANNELS', src: adultSuperSingers },
        { title: 'CELEBRATED JUNIOR SUPER SINGERS OF TV CHANNELS', src: juniorSuperSingers },
        { title: 'CELEBRATED STAGE SINGERS & ORCHESTRA', src: stageOrchestra },
        { title: 'CELEBRATED SOCIAL MEDIA SINGERS', src: socialMediaSingers },
        { title: 'RENOWNED PASTORS WHO SING', src: pastors },
        { title: 'CELEBRATED CHURCH SOLOISTS', src: churchSoloists },
        { title: 'CELEBRATED CHURCH CHOIRS', src: churchChoirs },
        { title: 'CELEBRATED MUSIC ACADEMY SINGERS & MUSICIANS', src: musicAcademy },
        { title: 'CELEBRATED SENIOR VOCALISTS', src: seniorVocalists },
        { title: 'CELEBRATED MIDDLE-AGED VOCALISTS', src: middleAgedVocalists },
        { title: 'TALENTED JUNIOR VOCALISTS', src: juniorVocalists },
        { title: 'TALENTED VOCALISTS OF EDUCATIONAL INSTITUTIONS', src: educationalVocalists },
        { title: 'RENOWNED VIP SPEAKERS & NARRATORS', src: vipNarrators },
        { title: 'RENOWNED FILM DIRECTORS', src: filmDirectors },
        { title: 'CELEBRATED FILM CAMERAMEN', src: cameramen },
        { title: 'CELEBRATED SCREENWRITERS', src: screenwriters },
        { title: 'DISTINGUISHED ACTORS', src: actors },
        { title: 'CELEBRATED AUDIO RECORDING ENGINEERS', src: audioEngineers },
        { title: 'DISTINGUISHED FILM & VIDEO EDITORS', src: videoEditors },
        { title: 'CELEBRATED AI AUDIO & VIDEO CREATORS', src: aiCreators },
        { title: 'DISTINGUISHED GRAPHIC DESIGNERS', src: graphicDesigners },
        { title: 'DISTINGUISHED MAKEUP ARTISTS', src: makeupArtists },
        { title: 'MUSICAL INSTRUMENT PERFORMERS', src: instrumentPerformers },
        {
            title: 'UNDISCOVERED TALENTS',
            src: undiscovered,
            note: '(people who have never had an opportunity to sing, play instruments, act, or otherwise showcase their abilities)',
        },
        {
            title: 'THE SUPPORT OF NEWSPAPERS, TV CHANNELS, RADIO STATIONS & SOCIAL MEDIA PLATFORMS',
            src: mediaSupport,
        },
        { title: 'VOLUNTEERS OR COORDINATORS', src: volunteers },
        { title: 'DEDICATED WEB DESIGNERS & DEVELOPERS', src: webDesigners },
    ];

    return (
        <div
            className="highlights-page"
            style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                minHeight: '100vh',
                width: '100%',
                fontFamily: '"Century Gothic", sans-serif',
            }}
        >
            <style>{`
                .highlights-page, .highlights-page * { box-sizing: border-box; }
                .highlights-page img { max-width: 100%; }
                .highlight-hero {
                    position: relative;
                    width: 100%;
                    display: block;
                    line-height: 0;
                }
                .highlight-hero img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .highlight-hero-link {
                    position: absolute;
                    left: 50%;
                    bottom: 18%;
                    transform: translateX(-50%);
                    width: min(72%, 720px);
                    height: 28%;
                    border-radius: 999px;
                }
                .highlight-wrap {
                    max-width: 1248px;
                    margin: 0 auto;
                    padding: 48px 40px 40px;
                }
                .highlight-intro {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                    margin-bottom: 36px;
                }
                .highlight-intro-art {
                    flex: 0 1 46%;
                    max-width: 520px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 10px 24px rgba(0,0,0,0.12);
                }
                .highlight-intro-art img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .highlight-intro-copy { flex: 1 1 50%; }
                .highlight-callout {
                    background: #e6b136;
                    color: #ffffff;
                    border-radius: 28px;
                    padding: 32px 40px;
                    text-align: center;
                    box-shadow: 0 10px 22px rgba(0,0,0,0.16);
                    margin-bottom: 48px;
                }
                .highlight-callout p {
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 0 0 14px 0;
                }
                .highlight-callout a {
                    color: #1d4ed8;
                    font-weight: 700;
                    font-size: 14px;
                    word-break: break-all;
                }
                .highlight-stats {
                    background: #f8f0dc;
                    padding: 48px 24px 40px;
                    text-align: center;
                }
                .highlight-stats-row {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 28px 56px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .highlight-roles {
                    display: flex;
                    align-items: flex-start;
                    gap: 40px;
                }
                .highlight-roles-art {
                    flex: 0 1 46%;
                    max-width: 520px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 10px 24px rgba(0,0,0,0.12);
                }
                .highlight-roles-art img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .highlight-roles-copy { flex: 1 1 50%; }
                .highlight-purpose {
                    background: #f8f0dc;
                    padding: 48px 40px 56px;
                    text-align: center;
                }
                .highlight-purpose-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                    text-align: left;
                }
                .highlight-previews {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                    margin: 36px 0 56px;
                }
                .highlight-photo {
                    max-width: 902px;
                    margin: 0 auto;
                    border-radius: 40px;
                    overflow: hidden;
                    box-shadow: 0 14px 28px rgba(0,0,0,0.18);
                }
                .highlight-photo img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .highlight-invite {
                    text-align: center;
                    margin: 0 0 56px 0;
                }
                .highlight-invite-title {
                    font-family: Anastasia, serif;
                    font-size: 22px;
                    font-weight: 900;
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                    margin: 0 0 22px 0;
                    line-height: 1.35;
                }
                .invite-prefix { color: #111111; }
                .invite-rest { color: ${GOLD}; }
                .highlight-invite-note {
                    font-size: 13px;
                    color: #4b5563;
                    font-style: italic;
                    margin: -8px 0 20px 0;
                }
                @media (max-width: 900px) {
                    .highlight-wrap { padding: 32px 20px 40px; }
                    .highlight-intro, .highlight-roles { flex-direction: column; }
                    .highlight-intro-art, .highlight-roles-art { max-width: 100%; }
                    .highlight-previews { grid-template-columns: 1fr; }
                    .highlight-callout { padding: 24px 18px; }
                    .highlight-purpose { padding: 36px 20px 44px; }
                    .highlight-invite-title { font-size: 16px; }
                }
            `}</style>

            <div className="highlight-hero">
                <img src={heroBanner} alt="Highlights of the Album" />
                <Link
                    to="/church/participant-registration"
                    className="highlight-hero-link"
                    aria-label='Join "The Universal Royal Law of Love" Project'
                />
            </div>

            <div className="highlight-wrap">
                <div className="highlight-intro">
                    <div className="highlight-intro-art">
                        <img src={introArt} alt="The Universal Royal Law of Love" />
                    </div>
                    <div className="highlight-intro-copy">
                        <h2 style={{ ...headingStyle, fontSize: '24px', marginBottom: '16px' }}>
                            Introduction:<br />The Universal Royal Law of Love
                        </h2>
                        <p style={{ fontSize: '15px', color: BODY, lineHeight: 1.75, margin: '0 0 12px 0' }}>
                            The Universal Royal Law of Love is an extraordinary global audio/visual production created to resonate with all humanity—transcending language, culture, race, religion, and geographical boundaries.
                        </p>
                        <p style={{ fontSize: '15px', color: BODY, lineHeight: 1.75, margin: '0 0 12px 0' }}>
                            At its core, this project is a celebration of unity, love, justice, and universal values of life.
                        </p>
                        <p style={{ fontSize: '15px', color: BODY, lineHeight: 1.75, margin: 0 }}>
                            Through powerful visual storytelling, each theme is brought to life using real-life dramatizations, creating an immersive and emotionally engaging experience that makes timeless truths both visible and relatable to audiences around the world.
                        </p>
                    </div>
                </div>

                <div className="highlight-callout">
                    <p>
                        Click the link below to learn who is eligible to participate, who can register, and how to complete the registration for &quot;The Universal Royal Law of Love&quot; Multilingual Audio/Visual Album.
                    </p>
                    <p>
                        Discover the participation guidelines, eligibility criteria, registration process, and other important information to become a part of this unique multilingual audio/visual initiative. We warmly invite individuals who share this vision to register and participate in spreading a universal message of love, unity, and hope.
                    </p>
                    <a href={DRIVE_URL} target="_blank" rel="noopener noreferrer">
                        {DRIVE_URL}
                    </a>
                </div>
            </div>

            <div className="highlight-stats">
                <h3 style={{ ...headingStyle, fontSize: '26px', marginBottom: '10px' }}>Project Highlights</h3>
                <p style={{ fontSize: '15px', color: '#4b5563', margin: '0 0 36px 0' }}>
                    A Global Collaboration on an Unprecedented Scale
                </p>
                <div className="highlight-stats-row">
                    {stats.map((item) => (
                        <div key={item.label}>
                            <div style={{ fontSize: '36px', fontWeight: 800, color: '#111827', fontFamily: 'Anastasia, serif' }}>
                                {item.number}
                            </div>
                            <div
                                style={{
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: '#374151',
                                    letterSpacing: '1px',
                                    marginTop: '6px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="highlight-wrap" style={{ paddingTop: '48px', paddingBottom: '56px' }}>
                <div className="highlight-roles">
                    <div className="highlight-roles-art">
                        <img src={rolesArt} alt="Participation and roles" />
                    </div>
                    <div className="highlight-roles-copy">
                        <h3 style={{ ...headingStyle, fontSize: '24px', marginBottom: '22px' }}>
                            Participation &amp; Roles
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <RoleItem
                                title="Singers & Personalities"
                                text="Open to all voices worldwide—professionals and newcomers—bringing songs to life through powerful real-life storytelling."
                            />
                            <RoleItem
                                title="Expert Narrations & Guidance"
                                text="Experts and leaders provide meaningful insights and guidance, adding depth and real-world relevance."
                            />
                            <RoleItem
                                title="Creative & Technical Teams"
                                text="A global team of creators and technicians collaborating to deliver a world-class production."
                            />
                            <RoleItem
                                title="Musicians & Instruments"
                                text="Artists from across cultures unite, blending diverse instruments into a universal musical experience."
                            />
                            <RoleItem
                                title="Scale of Participation"
                                text="A massive global collaboration featuring thousands of participants from India and 195 countries."
                            />
                            <RoleItem
                                title="Recognition for Every Participant"
                                text="Every contributor is honored with global recognition, regardless of background or status."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="highlight-purpose">
                <h3
                    style={{
                        ...headingStyle,
                        fontSize: '24px',
                        marginBottom: '28px',
                        color: GOLD_DARK,
                    }}
                >
                    Join, The Only Audio-Visual Production That Suits The Entire World&apos;s Human Races!
                </h3>
                <div className="highlight-purpose-inner">
                    <h4
                        style={{
                            fontSize: '16px',
                            fontWeight: 800,
                            color: '#1f2937',
                            margin: '0 0 14px 0',
                        }}
                    >
                        NOTE: Purpose of These Productions
                    </h4>
                    <p style={{ fontSize: '15px', color: BODY, lineHeight: 1.8, margin: '0 0 16px 0' }}>
                        The productions &quot;<strong>The Universal Royal Law of Love</strong>&quot; and &quot;<strong>The Holy Sabbath</strong>&quot; are created to promote awareness of the growing challenges facing humanity today. They highlight how hatred, violence, greed, corruption, injustice, dishonesty, discrimination, environmental destruction, and the erosion of moral values have gradually crept into society, affecting individuals, families, communities, and nations across the world.
                    </p>
                    <p style={{ fontSize: '15px', color: BODY, lineHeight: 1.8, margin: '0 0 16px 0' }}>
                        These productions encourage people from every nation, culture, language, and background to reflect on the universal values of love, compassion, truth, integrity, justice, respect, responsibility, kindness, forgiveness, and peaceful coexistence. They seek to inspire individuals to make positive choices that strengthen families, build healthier communities, and contribute to a more just, united, and compassionate world.
                    </p>
                    <p style={{ fontSize: '15px', color: BODY, lineHeight: 1.8, margin: 0 }}>
                        The purpose of these productions is not to criticize or target any individual, community, religion, culture, or organization. Instead, they are an invitation to join hands in promoting the universal principles of love, mutual respect, human dignity, and responsible living for the well-being of all humanity and future generations.
                    </p>
                </div>
            </div>

            <div className="highlight-wrap" style={{ paddingTop: '48px', paddingBottom: '24px' }}>
                <h3 style={{ ...headingStyle, fontSize: '24px', textAlign: 'center', marginBottom: '14px' }}>
                    A Global Multilingual Audio/Visual Album<br />For All Humanity Uniting The World Through Music!
                </h3>
                <p
                    style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#4b5563',
                        textAlign: 'center',
                        margin: '0 0 28px 0',
                    }}
                >
                    Welcoming Participants from 2,000+ Ethnic Groups, All 28 States and 8 Union Territories of India, and All 195 Countries of the World
                </p>
                <div style={{ color: BODY, fontSize: '15px', lineHeight: 1.8 }}>
                    <p style={{ margin: '0 0 16px 0' }}>
                        An extraordinary Global Multilingual Audio/Visual Album created for the entire human family, transcending the barriers of language, race, religion, culture, nationality, and geographical distance. This landmark global initiative is designed to unite people through the universal language of music, storytelling, and shared human values, inspiring love, peace, hope, harmony, and mutual respect among people everywhere.
                    </p>
                    <p style={{ margin: '0 0 16px 0' }}>
                        The project features a series of approximately 25-minute Social Impact Musical Short Films, where every theme is brought to life through inspiring songs, compelling storytelling, and practical real-life dramatizations. Each production reflects the realities of human life while presenting messages that encourage truth, compassion, reconciliation, transformation, and the life-changing power of love. Every film is designed to be meaningful, engaging, and relevant to audiences of every generation and culture.
                    </p>
                    <p style={{ margin: '0 0 16px 0' }}>
                        Everyone is invited to participate—regardless of age, status, profession, community, caste, color, creed, religion, language, ethnicity, state, or country. This is a worldwide collaborative movement that welcomes every individual who desires to use their talents and abilities for the good of humanity.
                    </p>
                    <p style={{ margin: '0 0 16px 0' }}>
                        Participants are invited from more than 2,000 ethnic groups, representing all 28 States and 8 Union Territories of India, together with participants from all 195 countries of the world, making this one of the most inclusive and diverse artistic collaborations ever undertaken.
                    </p>
                    <p style={{ margin: '0 0 10px 0' }}>This historic production will bring together:</p>
                    <ul style={{ paddingLeft: '22px', margin: '0 0 16px 0' }}>
                        <li>21+ distinguished lyricists</li>
                        <li>21+ renowned music directors</li>
                        <li>21 accomplished film directors</li>
                        <li>10,000+ celebrated singers, musicians, and voices from the entertainment industry and every section of society</li>
                        <li>Globally recognized artists, performers, educators, professionals, and creative contributors from diverse fields</li>
                    </ul>
                    <p style={{ margin: '0 0 16px 0' }}>
                        Through inspiring music, authentic performances, cinematic excellence, and practical visual dramatizations of real-life situations, this global Audio/Visual Album seeks to touch hearts, strengthen families, promote social transformation, encourage mutual understanding, and foster peace, unity, and love among all people throughout the world.
                    </p>
                    <p style={{ margin: 0, fontWeight: 700, textAlign: 'center', color: GOLD_DARK }}>
                        Together, let us celebrate our diversity, embrace our shared humanity, and unite the world through the universal language of music.
                    </p>
                </div>

                <div className="highlight-previews">
                    <div className="highlight-photo" style={{ maxWidth: 'none' }}>
                        <img src={previewAlbum} alt="A global multilingual audio/visual album" />
                    </div>
                    <div className="highlight-photo" style={{ maxWidth: 'none' }}>
                        <img src={previewSing} alt="Sing for peace" />
                    </div>
                </div>

                {invites.map((item) => (
                    <InviteBlock key={item.title} title={item.title} src={item.src} note={item.note} />
                ))}

                <div className="highlight-photo" style={{ marginBottom: '48px' }}>
                    <img src={closingArt} alt="The Universal Royal Law of Love" />
                </div>
            </div>
        </div>
    );
};

export default Highlights;
