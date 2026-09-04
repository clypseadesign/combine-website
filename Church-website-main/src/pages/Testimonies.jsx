import React from 'react';
import Backdrop from '../components/Backdrop';
import TestimonyCard from "../components/TestimonyCard";
import DescriptiveCard from "../components/DescriptiveCard"
import LetterCard from "../components/LetterCard";
import dinakaran from '../assets/testimonies/dinakaran.png';
import president from '../assets/testimonies/president.png';
import laza from '../assets/testimonies/laza.png';
import sister from '../assets/testimonies/sister.png';
import athisiyanathan from '../assets/testimonies/athisiyanathan.png';
import mary from '../assets/testimonies/mary.png';
import santhakumar from '../assets/testimonies/santhakumar.png';
import robert from '../assets/testimonies/robert.png';
import joseph from '../assets/testimonies/joseph.png';
import watt from '../assets/testimonies/watt.png';
import john from '../assets/testimonies/john.png';
import paul from '../assets/testimonies/paul.png';
import donald from '../assets/testimonies/donald.png';
import anbiah from '../assets/testimonies/anbiah.png';
import sundaram from '../assets/testimonies/sundaram.png';
import isaiah from '../assets/testimonies/isaiah.png';
import sekhar from '../assets/testimonies/sekhar.png';
import tj from '../assets/testimonies/tj.png';
import padma from '../assets/testimonies/padma.png';
import vijai from '../assets/testimonies/vijai.png';
import jona from '../assets/testimonies/jona.png';
import dani from '../assets/testimonies/dani.png';
import mohan from '../assets/testimonies/mohan.png';
const Testimonies = () => {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <Backdrop title="Listner Testimones" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: '"Century Gothic", sans-serif' }}>
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '26px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>
                        Voices of Transformation & Grace
                    </h2>
                    <p style={{ maxWidth: '850px', margin: '0 auto 40px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        We humbly share a few testimonies from individuals whose lives have been deeply touched through "The Holy Sabbath", "The Universal Royal Law of Love", and the ongoing service of this mission. These personal reflections stand as a powerful witness to the transforming impact of faith, the strength of love, and the work of divine grace—bringing hope, renewal, and spiritual awakening to many.
                    </p>

                    <h3 style={{ fontSize: '22px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>
                        Views & Opinion on Audio Productions
                    </h3>
                    <p style={{ fontSize: '13px', color: '#374151', marginBottom: '8px' }}>
                        Views & Opinion on God Cares Ministries, The Holy Sabbath album The Ten Commandments Project
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151', marginBottom: '8px' }}>
                        C. James White is also known by this SABBATH album!
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151' }}>
                        Continues to get the appreciations and encouragements from many in person & phone too.
                    </p>
                </div>

                {/* Testimonies Cards Flex Container */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Card 1 */}
                    <TestimonyCard
                        image={dinakaran}
                        name="Dr. D. G. S. Dhinakaran,"
                        title="Founder Jesus Calls."
                        date="November, 07, 1998."
                        content={
                            <>
                                <p>My Dear Brother in Christ,</p>
                                <p>Loving greetings!</p>
                                <p>
                                    I sincerely thank you for your kind letter. I am happy to hear that you are planning to bring out a cassette on Ten Commandments. <strong>I am praying much for God to prosper all that you do. I believe that He will do it.</strong> (Psalm 1:3.)
                                </p>
                                <p>
                                    Dr. D. G. S. Dhinakaran, Founder Jesus Calls.<br />
                                    November, 07, 1998.
                                </p>
                            </>
                        }
                    />

                    {/* Card 2 */}
                    <TestimonyCard
                        image={president}
                        name="Bro. Jack Stout, President"
                        title="Turn to Jesus Ministries"
                        date="United States of America."
                        content={
                            <>
                                <p>Brother James,</p>
                                <p>
                                    I see that you are moving along on your Ten Commandment Project. <strong>I WILL KEEP YOU IN PRAYER ON THIS PROJECT BECAUSE SATAN DOES NOT LIKE GOD'S COMMANDMENTS.</strong> May the Lord bless you greatly on this project.
                                </p>
                                <p><strong>Bro. Jack Stout</strong></p>
                            </>
                        }
                    />
                    <TestimonyCard
                        image={sister}
                        name="Sister Dorothy E Watts"
                        title="Associate Secretary, SUD, Hosur, Tamil Nadu, India."
                        date="November 16, 1998."
                        content={
                            <>

                                <p>
                                    “Dear Brother White, Your desire to compose songs and music, one for each of the Ten Commandments is a very good idea and I hope you will be successful in reaching your goal. “Commit your plans unto the Lord and He will bring it to pass”. We want you to know we appreciate all of your dedication to God and His work and we know that you are working hard. Our prayers are with you.”
                                </p>

                            </>
                        }
                    />
                    <TestimonyCard
                        image={laza}
                        name=" T. J. Lazarus"
                        title="Turn to Jesus Ministries"
                        date="United States of America."
                        content={
                            <>
                                <p>
                                    Dear brother James, I do appreciate your interest in spreading the gospel work. I am sure the books you are publishing will be a great blessings to all the people. May God bless you as you are reaching the public through music and publications. Closing with love and affection.
                                </p>
                                <div style={{ textAlign: 'right' }}>
                                    <p>Sincerely yours,</p>
                                    <p>T. J. Lazarus.</p>
                                    <p>30th April 2002.</p>
                                </div>
                                <p>
                                    Dear brother James, I tell you, you are a talented young man. God is using you to preach the gospel. May God continue to bless you and your ministry. Closing with love and affection. Sincerely yours, T. J. Lazarus. 4th June 2002.
                                </p>
                            </>
                        }
                    />
                    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                        {/* Letter 1 */}
                        <LetterCard
                            content={
                                <>
                                    <p>Dear James,</p>
                                    <p>
                                        Initially I had wondered if you were my uncle, James White. But I read your story on the website and now I know. God bless your ministry. I'm honored to help out however I can. Please get in contact with me and I'll see what else I can do that would help you.
                                    </p>
                                    <p>Thanks,</p>
                                    <p>Jonathan Natiuk, It Is Written 11 Oct 2004.</p>
                                </>
                            }
                        />

                        {/* Letter 2 */}
                        <LetterCard
                            content={
                                <>
                                    <p>Dear Brother White,</p>
                                    <p>Greetings from the United States!</p>
                                    <p>
                                        I am very impressed with your ministry. I looked at the links you emailed me and am encouraged by all the things you are doing in your ministry. I really want to help you. I am more than happy to exchange your By His Word discs for the newest New Beginnings PowerPoint with Indian culturized graphics. I was just moved to go ahead and send you a complete set of New Beginnings without you sending back what you have.
                                    </p>
                                    <p>With warm regards,</p>
                                    <p>Jennifer, It Is Written. October 13, 2004.</p>
                                </>
                            }
                        />

                    </div>
                    <TestimonyCard
                        image={robert}
                        name="Pr. Robert J Kloosterhuis,"
                        title="Special Assistant to the President"
                        date="GC, United States of America"
                        content={
                            <>
                                <p>
                                    A statement of <strong>Pr. Robert J Kloosterhuis, Special Assistant to the President GC, United States of America</strong> on <strong>C. James White’s family</strong> on 3rd September 2013.
                                </p>
                                <p>
                                    “I know these days seem very dark, without hope, and it appears that God does not care. He does, but He sees the broader issues and His providence will direct events to vindicate His children and that man cannot always mock God. Remember the experience of Job. He went through terrible sufferings but in the end he was doubly blessed. God knows, understands and eventually the WHITE FAMILY will be vindicated.”
                                </p>
                            </>
                        }
                    />
                    <TestimonyCard
                        image={athisiyanathan}
                        name="S. Athisayanathan,"
                        title="Church Auditor-Tamil Nadu, SUD."
                        date=""
                        content={
                            <>
                                <p>
                                    “My son James, I am proud and privileged to pen few lines to ponder, on your chosen missionary journey and the very call as an effective witness for the cross of Jesus, as the most humble servant... Ever since your call to ministry, I know you and your family members never slept well facing Satan's diabolical games... Your struggles in church is beyond human language and epithets... Your faith is splendid. May God bless your call in His ministry.”
                                </p>
                            </>
                        }
                    />
                    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                        <DescriptiveCard
                            image={santhakumar}
                            name={
                                <>
                                    <div style={{ fontSize: '16px', fontWeight: '900', color: '#1f2937', textTransform: 'uppercase', marginBottom: '4px' }}>
                                        PR. D. SANTHAKUMAR
                                    </div>
                                    <div style={{ fontSize: '13px', fontWeight: '500', color: '#4b5563' }}>
                                        Director, Publishing Ministries
                                    </div>
                                    <div style={{ fontSize: '13px', color: '#4b5563' }}>
                                        STC, Madurai, Tamil Nadu, India
                                    </div>
                                </>
                            }
                            description="Dear Bro. C. James White, You are one, whom I longed to see in my life after hearing the songs produced by you on the “Holy Sabbath” in Tamil language in the year 1999, a marvelous and commendable work which no one else have done in the past or now. It is a production found to be fearfully and theologically written and wonderfully made... I understand that God had called you for this purpose. You have covered the entire history of the Sabbath in 10 songs from Eden to Eden with more than 14 top singers. I also use to often think that “I AM YOUR FAN” to that extent your songs have touched my heart and impressed that reminds our Creator God. I wanted to tell you, I have not at all heard all in my life such a meaningful songs produced on Sabbath... I can see, you have been called by God for an important ministry in India. I know Satan will not allow you and he will work to even destroy you and all your efforts. But remember brother, God is with you and He will give you the strength ... Never be discouraged..."
                        />
                    </div>
                    <TestimonyCard
                        image={mary}
                        name="MRS. Mary Edward Daniel"
                        title="Madurai, Tamil Nadu"
                        date=""
                        content={
                            <>
                                <p>
                                    “The Audio Album “<strong>The Holy Sabbath</strong>” Produced by <strong>Bro. C. James White</strong> in Tamil seems to me as <strong>a Silver Cup placed on a Golden Plate</strong>
                                </p>
                                <p>
                                    “You should have more than just one star on the fame path!”
                                </p>
                            </>
                        }
                    />

                </div>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                    <DescriptiveCard
                        image={joseph}
                        name={
                            <>
                                <div style={{ fontSize: '16px', fontWeight: '900', color: '#1f2937', textTransform: 'uppercase', marginBottom: '4px' }}>
                                    Pr. Joseph Veedaveeran
                                </div>
                                <div style={{ fontSize: '13px', fontWeight: '500', color: '#4b5563' }}>
                                    Church Pastor, CMC, Pammal,
                                </div>
                                <div style={{ fontSize: '13px', color: '#4b5563' }}>
                                    Chennai, Tamil Nadu, India.
                                </div>
                            </>
                        }
                        description={
                            <>
                                <p>
                                    The music and every lines of the songs have been touching my heart to this day. It covers the entire history of the Sabbath at the creation and of the 7th day Sabbath and its observance at Eden and through the history and of the 7th day Sabbath observance even in heaven brought on 10 songs.
                                </p>
                                <p>
                                    Music is amazingly well arranged professionally which attracts the hearts of one who listens. Every line of the lyrics are heart touching that covers the truth and facts of the Sabbath with true facts in thousands what the Holy Bible teaches.
                                </p>
                                <p>
                                    I pray that God’s grace be upon you and wish that many pearls be added to your crown for producing such an amazing album and also to <em>Mr. M. John Peter</em>, the music director for such a lovely creation of music and tunes. Every lines of the songs are like pearls that makes me listen over and over every day.
                                </p>
                                <p>
                                    Also, you are the only one from the entire world to whom this concept of producing the entire Sabbath history on music is come. God had used you miraculously.
                                </p>
                                <p>
                                    It only reminds me again and again of you as one, “one among many names that are not written in the Holy Bible”.
                                </p>
                                <p>
                                    The music and every lines of the songs have been touching my heart to this day. Music is amazingly well arranged professionally which attracts the hearts of one who listens. Every line of the lyrics are heart touching that covers the truth and facts of the Sabbath with true facts in thousands what the Holy Bible teaches. Also, you are the only one from the entire world to whom this concept of producing the entire Sabbath history on music is come. God had used you miraculously.
                                </p>
                                <p>
                                    Your album covers the entire history of the Sabbath at the creation and of the 7th day Sabbath and its observance at Eden and through the history and of the 7th day Sabbath observance even in heaven brought on 10 songs. I pray that God’s grace be upon you and wish that many pearls be added to your crown for producing such an amazing album and also to <em>Mr. M. John Peter</em>, the music director for such a lovely creation of music and tunes. Every lines of the songs are like pearls that makes me listen over and over every day. It only reminds me again and again of you as one, “one among many names that are not written in the Holy Bible”.
                                </p>
                            </>
                        }
                    />
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <TestimonyCard
                    image={watt}
                    name="Pr. D. R. Watts, President,"
                    title="SUD, Hosur, Tamil Nadu, India."
                    date="13th December 1999 & 27th November 2004."
                    content={
                        <>
                            <p>
                                “I had the opportunity to release the Cassette before and now the CD produced by Bro. James White. I pray that this production on Sabbath be a blessings to all who listen. God bless him, his family and the ministry”
                            </p>
                        </>
                    }
                />

                {/* Card 2 */}
                <TestimonyCard
                    image={john}
                    name="Pr. R. John, President,"
                    title="SUD, Hosur, Tamil Nadu, India."
                    date="28th October 2010."
                    content={
                        <>
                            <p>
                                “... His cassette ministry is well appreciated, especially the one on “Sabbath”. <strong>I HAVE NO HESITATION IN RECOMMENDING HIM FOR YOUR PRAYERS AND SUPPORT.</strong> We wish him God's blessings. Many souls have been added to the church as a result of God Cares Ministries.”
                            </p>
                        </>
                    }
                />
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                <DescriptiveCard
                    image={donald}
                    name="Dr. J. Robert Donald"
                    quote="Highly skilled... I am short of words. Your skill, hard work and dedication to serve the Lord has preserved and strengthened your resolve to forge ahead despite many challenges and opposition. I am sure the Good Lord will carry you through!"
                    description="After 42 years of honest and upright service in the Church such as College Registrar, Professor, SIU Education Director, College Principal and as Director of Public Affairs & Religious Liberty at SUD, Hosur, after his retirement in May 2015, he is called to be associated with the International Human Rights Association ® as its International Director; connected with Universal Institute of Human Rights Education, Anti-Corruption and he is utilized by the International Accreditation Association, Texas, USA."
                />
            </div>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                <DescriptiveCard
                    image={paul}
                    name="Pr. E. Paul Edison, Secretary"
                    quote="Highly skilled... I am short of words. Your skill, hard work and dedication to serve the Lord has preserved and strengthened your resolve to forge ahead despite many challenges and opposition. I am sure the Good Lord will carry you through!"
                    description="After 42 years of honest and upright service in the Church such as College Registrar, Professor, SIU Education Director, College Principal and as Director of Public Affairs & Religious Liberty at SUD, Hosur, after his retirement in May 2015, he is called to be associated with the International Human Rights Association ® as its International Director; connected with Universal Institute of Human Rights Education, Anti-Corruption and he is utilized by the International Accreditation Association, Texas, USA."
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: "40px", flexWrap: 'wrap' }}>
                <TestimonyCard
                    image={anbiah}
                    name="Pr. J. Jothi Anbiah"
                    title={<>Former General Vice-President, SUD<br />Hosur, Tamil Nadu, India.</>}
                    date="5th February 2015"
                    content={
                        <p>
                            “I am pleased to know that after years of gap you have started a new production based on the “Ten Commandments” of the Bible. A song on each of the commandment will speak to the mind and hearts of the listeners the important and its relevance in these last days. Your ministry of bringing these valuable truths in simple song is a blessing to those who listen.”
                        </p>
                    }
                />

                {/* Card 2 */}
                <TestimonyCard
                    image={sundaram}
                    name="Pr. S. Sundaram, Director"
                    title={<>Administrative Assistant to President<br />SUD, Hosur, Tamil Nadu, India.</>}
                    date="19th September 2002 & other dates."
                    content={
                        <p>
                            “Thank you very much for the CDs you sent. I appreciate your thoughtfulness. I enjoy listening to the CDs. It has received good appreciation from the people. Songs written about Sabbath is very much appreciated by the Church members. I wish you God's blessings on this. I pray for your ministry.”
                        </p>
                    }
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <TestimonyCard
                    image={isaiah}
                    name="Pr. Paulraj Isaiah, Director"
                    title={<>Ministerial Association/Stewardship<br />SUD, Hosur, Tamil Nadu, India.</>}
                    date="21st February 2003."
                    content={
                        <p>
                            “We often listen to your CD. I hope you have advertised elsewhere and it is being marketed. I also will talk about it whenever opportunity arises.”
                        </p>
                    }
                />

                {/* Card 2 */}
                <TestimonyCard
                    image={sekhar}
                    name="Pr. Shekar Philips"
                    title={<>Former President, South Karnataka Section, Bangalore.<br />Director, Adventist Mission, SUD, India.</>}
                    content={
                        <p>
                            “The album, THE HOLY SABBATH is purely THEOLOGICAL and the message in the Sabbath album is one that will drive a man to read the Word of God all over again.”
                        </p>
                    }
                />
            </div>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                <DescriptiveCard
                    image={tj}
                    name="Pr. T. J. Lazarus,"
                    description="served for 35 years with the Church as Principal for High Schools and President of Lowry Memorial College (day & residential) and as Director for Education and Health Departments for SIU (Tamil Nadu, Karnataka, Kerala, Goa & Pondicherry)."
                    quote="“I know that you did a commendable job in your previous production entitled “The Holy Sabbath”. The 10 spirit filled meaningful messaging songs covering topic of the Holy Sabbath has touched the hearts of the listeners. At present I am glad to know that you have undertaken another project work on the “Ten Commandments” presenting the same through messaging song.”"
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <TestimonyCard
                    image={padma}
                    name="Pr. D. Padmaraj, President"
                    title="SCIU, Bangalore, Karnataka, India."
                    content={
                        <p>
                            May God richly bless you as you study with the people and establish many more congregations. We appreciate the great interest that you show to evangelize, Karnataka through this CDs. It is amazing to know how the Lord is leading and directing you in preparing these CDs in the last days to reach the unreached and bring them to the Adventist faith. May God richly bless you.
                        </p>
                    }
                />

                {/* Card 2 */}
                <TestimonyCard
                    image={vijai}
                    name="Mr. Vijai Amirtharaj"
                    title="India."
                    content={
                        <>
                            <p>
                                Dear Pastor Joseph Vethaveeran!!! I'm a prime fan of the songs of Remnant Church composers and writers. They're my favorites. I've been impressed by your posts, from the album SABBATH composed by Mr. James White and the songs from by Pr. Jeeva.
                            </p>
                            <p>
                                They're all appropriate, admonishing, affirmative, awakening, cautioning, inspiring and truth filled, verses of the scriptures. I've been overwhelmed with joy listening to them. Thank you so much. If every Remnant Church Pastor and member prioritize the writings, the songs, musics, musicians and sermons of Remnant Church, our church would certainly step up to the next level of our mission. I'm sure about it.
                            </p>
                        </>
                    }
                />
            </div>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                <DescriptiveCard
                    image={jona}
                    name="Pr. Jonathan Paulraj"
                    quote="Highly skilled... I am short of words. Your skill, hard work and dedication to serve the Lord has preserved and strengthened your resolve to forge ahead despite many challenges and opposition. I am sure the Good Lord will carry you through!"
                    description="After 42 years of honest and upright service in the Church such as College Registrar, Professor, SIU Education Director, College Principal and as Director of Public Affairs & Religious Liberty at SUD, Hosur, after his retirement in May 2015, he is called to be associated with the International Human Rights Association ® as its International Director; connected with Universal Institute of Human Rights Education, Anti-Corruption and he is utilized by the International Accreditation Association, Texas, USA."
                />
            </div>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                <DescriptiveCard
                    image={dani}
                    name="Pr. J. Daniel "
                    quote="Highly skilled... I am short of words. Your skill, hard work and dedication to serve the Lord has preserved and strengthened your resolve to forge ahead despite many challenges and opposition. I am sure the Good Lord will carry you through!"
                    description="After 42 years of honest and upright service in the Church such as College Registrar, Professor, SIU Education Director, College Principal and as Director of Public Affairs & Religious Liberty at SUD, Hosur, after his retirement in May 2015, he is called to be associated with the International Human Rights Association ® as its International Director; connected with Universal Institute of Human Rights Education, Anti-Corruption and he is utilized by the International Accreditation Association, Texas, USA."
                />
            </div>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>
                <DescriptiveCard
                    image={mohan}
                    name="Mr. Mohan Kumar. G"
                    quote="Highly skilled... I am short of words. Your skill, hard work and dedication to serve the Lord has preserved and strengthened your resolve to forge ahead despite many challenges and opposition. I am sure the Good Lord will carry you through!"
                    description="After 42 years of honest and upright service in the Church such as College Registrar, Professor, SIU Education Director, College Principal and as Director of Public Affairs & Religious Liberty at SUD, Hosur, after his retirement in May 2015, he is called to be associated with the International Human Rights Association ® as its International Director; connected with Universal Institute of Human Rights Education, Anti-Corruption and he is utilized by the International Accreditation Association, Texas, USA."
                />
            </div>
        </div>
    );
};

export default Testimonies;