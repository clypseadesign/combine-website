import React from 'react';
import book from '../assets/producer/pdf_13_261x360.jpeg'
import decision from '../assets/producer/remember-commandment.png'

const OurDecisionAndStudySection = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: '"Century Gothic", sans-serif', color: '#1f2937' }}>

            {/* Part 1: Our Decision */}
            <section style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '450px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                        <img
                            src={decision}
                            alt="Our Decision Sabbath Worship"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '480px' }}>
                        <h2 style={{ fontSize: '20px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            OUR DECISION
                        </h2>
                        <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '10px', listStyleType: 'disc' }}>
                            <li>We choose God's Word above human tradition.</li>
                            <li>We choose the Creator above the traditions of men.</li>
                            <li>We choose to honor His holy Seventh-day Sabbath—the sign between God and His people.</li>
                        </ul>
                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginTop: '15px', fontStyle: 'italic' }}>
                            "Choose you this day whom ye will serve... but as for me and my house, we will serve the Lord." — Joshua 24:15 (KJV)
                        </p>
                    </div>
                </div>
            </section>

            <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />

            {/* Part 2: For More Study on the 7th Day Sabbath & The Law of God */}
            <section style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '900', fontFamily: "Anastasia", color: '#b45309', marginBottom: '30px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    FOR MORE STUDY ON THE 7TH DAY SABBATH & THE LAW OF GOD:
                </h2>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'left' }}>
                    <div style={{ flex: '0 0 auto', maxWidth: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                        <img
                            src={book}
                            alt="Bible Readings for the Home"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '550px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '900', fontFamily: "Anastasia", color: '#b45309', marginBottom: '12px', textTransform: 'uppercase' }}>
                            "BIBLE READINGS FOR THE HOME"
                        </h3>
                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '15px' }}>
                            Read this book which will answer nearly 4,000 Bible questions in a simple question and answer format. The 201 Bible Topics have been prepared in a simple question and answer format, with the answer from the Bible. 790 pages. <a href="https://www.preparingforeternity.com/br1914/brhccontents.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>Bible Readings for the Home Circle - 1914 Edition</a>
                        </p>

                        <h4 style={{ fontSize: '14px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', marginBottom: '8px', textTransform: 'uppercase' }}>
                            CLICK TO READ THE BOOK ONLINE
                        </h4>
                        <p style={{ fontSize: '13px', marginBottom: '15px', wordBreak: 'break-all' }}>
                            <a href="https://www.preparingforeternity.com/br1914/brhccontents.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                                https://www.preparingforeternity.com/br1914/brhccontents.htm
                            </a>
                        </p>

                        <h4 style={{ fontSize: '14px', fontWeight: '900', fontFamily: "Anastasia", color: '#b45309', marginBottom: '8px', textTransform: 'uppercase' }}>
                            CLICK TO DOWNLOAD THE ENTIRE PDF BOOK "BIBLE READINGS FOR THE HOME CIRCLE - 1914 EDITION"
                        </h4>
                        <p style={{ fontSize: '13px', marginBottom: '20px' }}>
                            <a href="https://www.preparingforeternity.com/br1914/brhccontents.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                                Click to download the entire pdf book "Bible Readings for the Home Circle"
                            </a>
                        </p>

                        <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginTop: '20px' }}>
                            Read, understand and know the truth...
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurDecisionAndStudySection;