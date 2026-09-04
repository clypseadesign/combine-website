import React from 'react';

const SectionsIndexComponent = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: '"Century Gothic", sans-serif', color: '#1f2937' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>

                {/* Left Card: Section 8 */}
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '450px', backgroundColor: '#fef3c7', borderRadius: '24px', padding: '40px 30px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #fde68a' }}>
                    <h3 style={{ fontSize: '18px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        SECTION 8 - THE LAW OF GOD
                    </h3>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '1.6', color: '#374151' }}>
                        <li>81. The Law of God.....369</li>
                        <li>82. Perpetuity of the Law.....374</li>
                        <li>83. Why the Law was Given at Sinai.....379</li>
                        <li>84. Penalty for Transgression.....383</li>
                        <li>85. The Law of God in the Patriarch Age.....386</li>
                        <li>86. The Law of God in the New Testament.....389</li>
                        <li>87. The Moral and Ceremonial Laws.....393</li>
                        <li>88. The Two Covenants.....397</li>
                        <li>89. What was Abolished by Christ.....405</li>
                        <li>90. The Law and the Gospel.....409</li>
                    </ul>
                </div>

                {/* Right Card: Section 9 */}
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '450px', backgroundColor: '#fef3c7', borderRadius: '24px', padding: '40px 30px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #fde68a' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: "Anastasia" }}>
                        SECTION 9 - THE SABBATH
                    </h3>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '1.6', color: '#374151' }}>
                        <li>91. Institution of the Sabbath.....415</li>
                        <li>92. God's Memorial.....418</li>
                        <li>93. Reasons for Sabbath-Keeping.....421</li>
                        <li>94. Manner of Observing the Sabbath.....425</li>
                        <li>95. Christ and the Sabbath.....430</li>
                        <li>96. The Sabbath in the New Testament.....435</li>
                        <li>97. The Change of the Sabbath.....439</li>
                        <li>98. Seal of God & The Mark of Apostasy.....446</li>
                        <li>99. The Lord's Day.....451</li>
                        <li>100. Walking as He Walked.....454</li>
                        <li>101. The Sabbath In History.....457</li>
                        <li>102. Sabbath Reform.....463</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SectionsIndexComponent;