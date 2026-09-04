import React from 'react';
import JesusCustomSection from '../components/Image';
import OurDecisionAndStudySection from '../components/Decision';
import SectionsIndexComponent from '../components/SectionList';
import SomeMoreInformationComponent from '../components/UrlList';
import RewardAndConfessionsComponent from '../components/UrlReward';
import SectionImage from '../components/SectionImage';

import heroImage from '../assets/producer/hero.png';
import holySabbathSection from '../assets/producer/frame-56.png';
import tenCommandments from '../assets/producer/ten-commandments.png';
import familySection from '../assets/producer/frame-58.png';
import johnPeterSection from '../assets/producer/frame-59.png';
import singersGrid from '../assets/producer/singers-grid.png';
import holySabbathCd from '../assets/producer/holy-sabbath-cd.png';
import bookletCollage from '../assets/producer/pdf_24_1600x558.jpeg';
import spiritualSection from '../assets/producer/spiritual-significance.png';
import fragmentedSection from '../assets/producer/christianity-fragmented.png';
import tablesOfStone from '../assets/producer/tables-of-stone.png';
import noAdditions from '../assets/producer/no-additions.png';
import sabbathAtCreation from '../assets/producer/frame-136.png';
import signOfCreator from '../assets/producer/frame-137.png';
import rememberCommandment from '../assets/producer/remember-commandment.png';
import founderPhoto from '../assets/producer/pdf_42_821x1024.jpeg';
import johnPeterPhoto from '../assets/producer/pdf_49_699x453.jpeg';
import vishaldoPhoto from '../assets/producer/pdf_54_718x991.jpeg';
import sealImage from '../assets/producer/pdf_58_1254x1254.jpeg';
import spiritualArt from '../assets/producer/pdf_04_1238x1271.jpeg';
import noAdditionsArt from '../assets/producer/pdf_00_1672x941.jpeg';

const GOLD = '#c9a227';
const GOLD_DARK = '#b45309';
const BODY = '#333333';

const headingStyle = {
    fontFamily: 'Anastasia, serif',
    color: GOLD,
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    margin: '0 0 28px 0',
    lineHeight: 1.35,
};

const bodyStyle = {
    fontSize: '15px',
    color: BODY,
    lineHeight: 1.8,
    margin: 0,
    fontFamily: '"Century Gothic", sans-serif',
};

const FrameImage = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: 'auto', display: 'block' }}
    />
);

const RoundedGraphic = ({ src, alt, maxWidth = '1100px', radius = '36px' }) => (
    <div style={{ maxWidth, margin: '0 auto 28px auto', borderRadius: radius, overflow: 'hidden' }}>
        <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
);

const ProducerAlbum = () => {
    const topics = [
        'The Change of Sabbath',
        'Institution of Sabbath',
        'Reasons for Sabbath Keeping',
        'Manner of Observing the Sabbath',
        'Sabbath in Old Testament',
        'Sabbath & Christ',
        'Sabbath in History',
        'Sabbath Reform',
        'Seal of God',
        'Sabbath in Eternity',
    ];

    return (
        <div
            className="producer-album-page"
            style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                minHeight: '100vh',
                width: '100%',
                overflowX: 'hidden',
                fontFamily: '"Century Gothic", sans-serif',
            }}
        >
            <style>{`
                .producer-album-page, .producer-album-page * { box-sizing: border-box; }
                .producer-album-page img { max-width: 100%; }
                .producer-hero {
                    width: 100%;
                    height: auto;
                    min-height: 280px;
                    display: block;
                }
                .producer-wrap {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 48px 48px 80px;
                }
                .topic-card {
                    background: #f6ead2;
                    border-radius: 14px;
                    padding: 18px 16px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-height: 88px;
                }
                .topic-note {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: #e6a817;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    flex-shrink: 0;
                }
                .topic-grid {
                    display: grid;
                    grid-template-columns: repeat(5, minmax(0, 1fr));
                    gap: 14px;
                    margin-bottom: 28px;
                }
                @media (max-width: 1024px) {
                    .producer-wrap { padding: 36px 24px 60px; }
                    .producer-two-col, .producer-profile { flex-direction: column !important; }
                    .topic-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                }
                @media (max-width: 768px) {
                    .producer-wrap { padding: 24px 16px 48px; }
                    .producer-intro { font-size: 18px !important; line-height: 1.4 !important; }
                    .topic-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                }
            `}</style>

            <img className="producer-hero" src={heroImage} alt="The Universal Royal Law of Love" />

            <div className="producer-wrap">
                <p
                    className="producer-intro"
                    style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#111',
                        lineHeight: '32px',
                        letterSpacing: '0.8px',
                        margin: '0 0 56px 0',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}
                >
                    CLICK ALL THE LINKS PROVIDED ABOVE TO DISCOVER, ENROLL, JOIN, MAKE PAYMENTS, AND PARTICIPATE IN THE AUDIO/VISUAL ALBUM.
                </p>

                <h2 style={{ ...headingStyle, fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>
                    THE FIRST PRODUCTION OF THE PRODUCER
                </h2>

                <div className="producer-profile" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', textAlign: 'left', marginBottom: '56px' }}>
                    <div style={{ width: '280px', flexShrink: 0, borderRadius: '22px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
                        <img src={founderPhoto} alt="C. James White" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                            PRODUCED IN LOVING SERVICE FOR THE UNITY OF HUMANITY
                        </p>
                        <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 16px 0' }}>C. JAMES WHITE</h3>
                        <p style={{ ...bodyStyle, marginBottom: '18px' }}>
                            This project is a spiritual, musical, and visual movement that reinterprets timeless moral truths through powerful storytelling, music, and global collaboration.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: BODY }}>
                            {[
                                'Featured 14 renowned singers delivering soul-stirring performances',
                                'Composed, arranged, and written by M. John Peter with world-class quality',
                                'Contains 745 meticulously crafted music tracks across 10 thematic songs',
                                'Built on a strong theological message centered on the Sabbath truth',
                                'Designed to inspire listeners to revisit and rediscover the Word of God',
                                'Blends classical, contemporary, and spiritual music elements',
                            ].map((item) => (
                                <li key={item} style={{ display: 'flex', gap: '10px' }}>
                                    <span style={{ color: GOLD, fontWeight: 700 }}>✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f8ebd8', padding: '48px 48px 56px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ ...headingStyle, fontSize: '28px', textAlign: 'center', color: GOLD_DARK }}>
                        PURPOSE AND MISSION OF THE ALBUMS
                    </h2>
                    {[
                        'The lyrics of the albums The Holy Sabbath and The Universal Royal Law of Love have been written to convey the exact and deeper meaning of the Ten Commandments. They seek to magnify the divine principles of God\'s law by illustrating how the violation of each commandment has contributed to divisions among thousands of religious denominations and throughout human society. The breaking of God\'s law has fostered enmity within families, among relatives, villages, towns, states, and nations, resulting in hatred, jealousy, riots, conflicts, and wars that have destroyed countless human lives. Every human life is precious and invaluable.',
                        'These albums have been created solely with a sincere desire to promote love, peace, unity, and harmony among all people throughout the world. They seek to call humanity back to the eternal principles of love, obedience, peace, justice, mercy, and respect for God and for one another as revealed in the Ten Commandments.',
                        'These albums are not intended to hurt, offend, criticize, or condemn any individual, denomination, sect, religion, culture, or community, nor are they produced to please or favor any individual, organization, or group. Rather, they are presented with a pure, genuine, impartial, and prayerful heart, with the sincere desire to uplift humanity by drawing attention to the timeless moral principles of the Ten Commandments.',
                        'The purpose of these albums is to encourage every person to recognize the sacredness of human life, cultivate love for God and love for one another, strengthen families and communities, promote mutual respect and understanding, and inspire peace, unity, and harmony throughout the world. It is our earnest prayer that these songs will encourage thoughtful reflection, foster reconciliation where there is division, and inspire lives characterized by love, righteousness, and obedience to God for the blessing of all humanity.',
                    ].map((p) => (
                        <p key={p.slice(0, 40)} style={{ ...bodyStyle, marginBottom: '18px' }}>{p}</p>
                    ))}
                </div>
            </div>

            <div className="producer-wrap">
                <div className="producer-two-col" style={{ display: 'flex', alignItems: 'center', gap: '36px', marginBottom: '28px' }}>
                    <div style={{ flex: '0 0 46%', borderRadius: '24px', overflow: 'hidden' }}>
                        <img src={tenCommandments} alt="The Ten Commandments" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <h2 style={{ ...headingStyle, fontSize: '30px', marginBottom: '8px' }}>"THE HOLY SABBATH"</h2>
                        <h3 style={{ ...headingStyle, fontSize: '18px', marginBottom: '18px' }}>(4TH OF THE TEN COMMANDMENTS)</h3>
                        <p style={{ fontSize: '16px', fontStyle: 'italic', color: GOLD_DARK, fontWeight: 700, lineHeight: 1.6, margin: '0 0 8px 0' }}>
                            "He who from the heart obeys the fourth commandment will obey the whole law".
                        </p>
                        <p style={{ fontSize: '13px', color: GOLD_DARK, fontWeight: 700, margin: '0 0 16px 0' }}>
                            Counsels for the Church, Page 262.
                        </p>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>"SABBATH" (Exodus 20:8–11 KJV)</h4>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', ...bodyStyle, marginBottom: '64px' }}>
                    <p>
                        The Fourth Commandment—one of the longest among the Ten Commandments, containing 94 words—is found in the Holy Bible in Book of Exodus. Despite its divine importance, it continues to be overlooked by many, though it was established by God at Creation itself, before sin entered the world, with a sacred and eternal purpose as a <strong>SIGN</strong> that He is our Creator God and that we are His people.
                    </p>
                    <p>
                        God Himself wrote the Ten Commandments upon tables of stone with His own finger, signifying their divine authority, permanence, and sacred importance, as recorded in Book of Exodus and Book of Deuteronomy. The Holy Scriptures also reveal that God's law exists in the Heavenly Sanctuary, where the ark of His testament was seen in heaven, as written in Book of Revelation.
                    </p>
                    <p style={{ fontWeight: 700 }}>
                        "The Holy Sabbath" album stands as a magnificent witness proclaiming that all people are the children of God.
                    </p>
                    <p>
                        The video production of <strong>"The Holy Sabbath"</strong> album has now expanded beyond Tamil into <strong>English, Hebrew, Mandarin Chinese, Modern Standard Arabic, Spanish, French, Russian, Sinhala, Finnish, Nepali, Assamese, Malayalam, Kannada, Tulu, Telugu, Bengali, Punjabi, Odia, Marathi, Hindi, Gujarati,</strong> and <strong>Urdu</strong>.
                    </p>
                    <p>
                        Efforts are also underway to produce and share the album in as many languages of the world as possible, so that its message of truth, peace, love, and unity may reach people across every nation, culture, and tongue.
                    </p>
                    <p>
                        Through music, this global initiative seeks to remind humanity of God's everlasting love, His holy Sabbath, and the unity of all people under the Creator.
                    </p>
                </div>

                <h2 style={{ ...headingStyle, fontSize: '28px' }}>SABBATH: THE SEAL OF THE LIVING GOD.</h2>
                <div className="producer-two-col" style={{ display: 'flex', alignItems: 'flex-start', gap: '36px', marginBottom: '24px' }}>
                    <div style={{ width: '280px', flexShrink: 0 }}>
                        <img src={sealImage} alt="Creator Lord Thy God 7th Day Sabbath" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', ...bodyStyle }}>
                        <p>
                            The book of Revelation describes God's faithful people as being sealed with the <strong>SEAL OF GOD</strong> (Revelation 7:2–4; 9:4), while an opposing power enforces a <strong>MARK</strong> upon its followers (Revelation 13:16–17; 14:9–11; 15:2; 16:2; 19:20; 20:4).
                        </p>
                        <p style={{ fontWeight: 700 }}>In Ezekiel, God identifies the Sabbath as a sign between Himself and His people:</p>
                        <blockquote style={{ margin: 0, paddingLeft: '16px', borderLeft: `3px solid ${GOLD}`, fontStyle: 'italic' }}>
                            "Moreover also I gave them my sabbaths, to be a sign between me and them, that they might know that I am the LORD that sanctify them." (Ezekiel 20:12)
                        </blockquote>
                        <blockquote style={{ margin: 0, paddingLeft: '16px', borderLeft: `3px solid ${GOLD}`, fontStyle: 'italic' }}>
                            "And hallow my sabbaths; and they shall be a sign between me and you, that ye may know that I am the LORD your God." (Ezekiel 20:20)
                        </blockquote>
                        <p style={{ fontWeight: 700 }}>Isaiah also connects God's law with His seal:</p>
                        <blockquote style={{ margin: 0, paddingLeft: '16px', borderLeft: `3px solid ${GOLD}`, fontStyle: 'italic' }}>
                            "Bind up the testimony, <strong>seal the law</strong> among my disciples." (Isaiah 8:16)
                        </blockquote>
                    </div>
                </div>
                <p style={bodyStyle}>The Sabbath commandment (Exodus 20:8–11) contains the essential elements of a royal seal:</p>
                <ul style={{ ...bodyStyle, margin: '12px 0 18px 0' }}>
                    <li><strong>Name:</strong> The LORD thy God</li>
                    <li><strong>Title:</strong> Creator</li>
                    <li><strong>Territory:</strong> Heaven, Earth, Sea, and all that is in them</li>
                </ul>
                <p style={{ ...bodyStyle, marginBottom: '12px' }}>
                    Because the Sabbath commandment identifies God as the Creator and bears the characteristics of His authority, many Christians understand it to be God's sign or seal among His people.
                </p>
                <p style={{ ...bodyStyle, marginBottom: '12px' }}>
                    For a comprehensive and systematic study of "The Law of God" and "The Sabbath," please refer to Section 8 – The Law of God and Section 9 – The Sabbath at the link provided below.
                </p>
                <a href="https://www.preparingforeternity.com/br1914/brhccontents.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 700, wordBreak: 'break-all' }}>
                    https://www.preparingforeternity.com/br1914/brhccontents.htm
                </a>

                <div style={{ marginTop: '72px' }}>
                    <FrameImage src={familySection} alt="The family behind God Cares Ministries" />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <FrameImage src={johnPeterSection} alt="M. John Peter, lyricist and music director" />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <FrameImage src={singersGrid} alt="Fourteen singers of The Holy Sabbath album" />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <FrameImage src={holySabbathCd} alt="The Holy Sabbath audio CD" />
                </div>

                <h2 style={{ ...headingStyle, fontSize: '26px', textAlign: 'center', marginTop: '64px' }}>THE 10 TOPICS COVERED</h2>
                <div className="topic-grid">
                    {topics.map((topic, index) => (
                        <div key={topic} className="topic-card">
                            <div className="topic-note">♪</div>
                            <div>
                                <div style={{ fontSize: '11px', color: GOLD_DARK, fontWeight: 700 }}>{String(index + 1).padStart(2, '0')}</div>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>{topic}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <RoundedGraphic src={bookletCollage} alt="The Holy Sabbath booklet and credits" maxWidth="100%" radius="8px" />

                <div className="producer-two-col" style={{ display: 'flex', alignItems: 'center', gap: '36px', marginTop: '56px' }}>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                        <h2 style={{ ...headingStyle, fontSize: '26px' }}>A VISION ONCE THOUGHT IMPOSSIBLE BECAME REALITY.</h2>
                        <p style={bodyStyle}>
                            For years, the effort to produce "The Holy Sabbath" album in multiple languages and bring it into video format seemed nearly impossible. However, the association and dedicated support of <strong>Vishaldo J. Mathinan</strong> opened the way for the successful video production and the expansion of the album into many languages.
                        </p>
                    </div>
                    <div style={{ width: '240px', flexShrink: 0, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}>
                        <img src={vishaldoPhoto} alt="Vishaldo J. Mathinan" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>

                <div style={{ marginTop: '56px' }}>
                    <FrameImage src={spiritualSection} alt="Spiritual significance of the Sabbath" />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <FrameImage src={fragmentedSection} alt="Christianity is fragmented — why?" />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <FrameImage src={tablesOfStone} alt="God wrote with His own finger on two tables of stone" />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <FrameImage src={noAdditions} alt="No additions. No alterations." />
                </div>
                <RoundedGraphic src={noAdditionsArt} alt="God's Word is complete and perfect" />
                <div style={{ marginTop: '24px' }}>
                    <FrameImage src={sabbathAtCreation} alt="Sabbath at creation" />
                </div>
                <div style={{ marginTop: '24px' }}>
                    <FrameImage src={signOfCreator} alt="The Sabbath: the sign of our Creator" />
                </div>
                <div style={{ marginTop: '24px' }}>
                    <FrameImage src={rememberCommandment} alt="The only commandment that begins with Remember" />
                </div>

                <h2 style={{ ...headingStyle, fontSize: '24px', textAlign: 'center', marginTop: '64px' }}>SABBATH WAS MADE FOR MANKIND</h2>
                <p style={{ ...bodyStyle, maxWidth: '980px', margin: '0 auto 48px auto' }}>
                    "And he said unto them, The sabbath was made for man, and not man for the sabbath." — Mark 2:27
                </p>

                <h2 style={{ ...headingStyle, fontSize: '24px', textAlign: 'center' }}>SABBATH: GOD'S TEST OF LOYALTY</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', ...bodyStyle, maxWidth: '980px', margin: '0 auto 48px auto', textAlign: 'left' }}>
                    <p>Throughout every age, God has revealed the loyalty of His people through the test of obedience.</p>
                    <p>In the Garden of Eden, the test centered on the tree of the knowledge of good and evil. God freely gave Adam and Eve every tree in the garden except one (Genesis 2:16–17). There was nothing special about the fruit itself. The real issue was whether they would trust God's word enough to obey His command completely.</p>
                    <p>Obedience was the evidence of loyalty.</p>
                    <p>This principle is repeated throughout the Bible. Noah was instructed to build an ark. Abraham was called to offer Isaac. Israel was commanded to march around the walls of Jericho. In every case, the test was not the act itself but whether God's authority would be trusted and obeyed.</p>
                    <p>According to our understanding, the same principle will be seen in the closing events of earth's history.</p>
                    <p>The book of Revelation portrays a worldwide conflict over worship and allegiance. God's faithful end-time people are described as those who "keep the commandments of God, and the faith of Jesus" (Revelation 14:12).</p>
                    <p>Just as the tree of the knowledge of good and evil served as the test of loyalty in Eden, we understand the biblical seventh-day Sabbath to be God's sign of loyalty in the final conflict. It points to Him as the Creator (Genesis 2:1-3; Exodus 20:8–11; Revelation 14:7) and distinguishes the commandments of God from the traditions and commandments of men.</p>
                    <p>God's principle has never changed.</p>
                    <p>He calls His people to loving, wholehearted obedience, while Satan continually seeks to replace divine authority with human authority.</p>
                    <p>The final question is essentially the same as the first: Will we obey God or men?</p>
                    <p style={{ fontWeight: 700 }}>"We ought to obey God rather than men." — Acts 5:29</p>
                </div>

                <h2 style={{ ...headingStyle, fontSize: '22px', textAlign: 'center' }}>
                    THE MANNA AND THE SABBATH TEST OF EXODUS 16 OCCURRED BEFORE THE TEN COMMANDMENTS WERE WRITTEN ON THE STONE TABLETS
                </h2>
                <h3 style={{ ...headingStyle, fontSize: '20px', textAlign: 'center', color: GOLD_DARK }}>
                    2,080 WEEKLY MIRACLES CONFIRMED GOD'S HOLY SABBATH BEFORE SINAI...
                </h3>
                <div style={{ ...bodyStyle, maxWidth: '980px', margin: '0 auto 40px auto', textAlign: 'left' }}>
                    <p style={{ marginBottom: '16px' }}>
                        For forty years, God provided a double portion of manna on the sixth day and withheld it on the seventh day, proving the sanctity of the Sabbath and testing Israel's obedience (Exodus 16:4, 22–30).
                    </p>
                    <p style={{ marginBottom: '16px' }}>
                        If we take the biblical record that the manna was given for 40 years and that it fell every day except the Sabbath, we can estimate the number of Sabbaths very simply.
                    </p>
                    <p style={{ fontWeight: 700, marginBottom: '8px' }}>Calculation</p>
                    <ul>
                        <li>1 year ≈ 52 weekly Sabbaths</li>
                        <li>40 years × 52 Sabbaths = 2,080 Sabbaths</li>
                    </ul>
                    <p style={{ margin: '16px 0' }}>Total weekly Sabbaths during the manna period: ≈ 2,080</p>
                    <p style={{ fontWeight: 700 }}>What this means</p>
                    <p>During those approximately 2,080 Sabbaths:</p>
                    <ul>
                        <li>God did not send manna on the Sabbath.</li>
                        <li>On the sixth day (Friday) He gave a double portion.</li>
                        <li>This miracle was repeated every week for forty years.</li>
                    </ul>
                    <p style={{ fontWeight: 700, marginTop: '16px' }}>Therefore:</p>
                    <ul>
                        <li>About 2,080 times God reminded Israel that the seventh day was His holy Sabbath.</li>
                        <li>About 2,080 times there was no manna on the Sabbath.</li>
                        <li>About 2,080 times there was a double miracle on the sixth day, providing enough food for two days without spoiling.</li>
                    </ul>
                    <p style={{ marginTop: '16px' }}>
                        For approximately 2,080 consecutive Sabbaths over forty years, God performed a weekly miracle—providing a double portion of manna on the sixth day and withholding manna on the seventh day—to prove whether Israel would keep His commandments (Exodus 16:4, 22–30).
                    </p>
                    <p style={{ marginTop: '16px' }}>
                        This makes the manna experience one of the longest continuous miracles recorded in Scripture, emphasizing the sanctity of the seventh-day Sabbath long before the giving of the law at Sinai.
                    </p>
                </div>
            </div>

            <JesusCustomSection
                title="IT WAS THE CUSTOM OF JESUS CHRIST TO KEEP THE SABBATH HOLY:"
                imageUrl={spiritualArt}
                imageAlt="Jesus custom to keep the Sabbath holy"
            />
            <JesusCustomSection
                title="IT WAS THE CUSTOM OF PAUL AND OTHERS TO KEEP THE SABBATH HOLY."
                imageUrl={johnPeterPhoto}
                imageAlt="Paul and others kept the Sabbath holy"
            />
            <SectionImage />
            <JesusCustomSection
                title="TOGETHER IN ONE ACCORD. UNITY IN THE BODY OF CHRIST."
                imageUrl={signOfCreator}
                imageAlt="Together in one accord"
            />
            <JesusCustomSection
                title="COMMANDMENT-KEEPING PEOPLE WILL ENTER HEAVEN."
                imageUrl={tablesOfStone}
                imageAlt="Commandment-keeping people will enter heaven"
            />
            <JesusCustomSection
                title="COMMANDMENTS-KEEPING PEOPLE WILL WORSHIP GOD EVERY SABBATH IN THE NEW HEAVENS AND THE NEW EARTH."
                imageUrl={sabbathAtCreation}
                imageAlt="Worship every Sabbath in the new earth"
            />
            <JesusCustomSection
                title="FOLLOW THE EXAMPLE OF JESUS"
                imageUrl={rememberCommandment}
                imageAlt="Follow the example of Jesus"
            />
            <JesusCustomSection
                title="AS A NATION'S FLAG IDENTIFIES ITS CITIZENS, GOD'S SABBATH IS THE DIVINE SIGN THAT IDENTIFIES HIS PEOPLE, DECLARING THAT WE BELONG TO HIM AND ARE HIS CHILDREN:"
                imageUrl={sealImage}
                imageAlt="The Sabbath is the divine sign of God's people"
            />
            <JesusCustomSection
                title="THE TEN COMMANDMENTS AND THE BEATITUDES. A PERFECT HARMONY."
                imageUrl={holySabbathSection}
                imageAlt="The Ten Commandments and the Beatitudes"
            />
            <OurDecisionAndStudySection />
            <SectionsIndexComponent />
            <SomeMoreInformationComponent />
            <RewardAndConfessionsComponent />
        </div>
    );
};

export default ProducerAlbum;
