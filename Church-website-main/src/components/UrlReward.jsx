import React from 'react';
import dollar from '../assets/dollar.png';

const RewardAndConfessionsComponent = () => {
    return (
        <div style={{ maxWidth: '950px', margin: '0 auto', padding: '20px 20px 60px', fontFamily: '"Century Gothic", sans-serif', color: '#1f2937' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>

                {/* Left: $1000 Cash Reward Image */}
                <div style={{ flex: '1', minWidth: '320px', maxWidth: '440px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 20px -3px rgba(0,0,0,0.12), 0 4px 6px -4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
                    <img
                        src={dollar}
                        alt="$1,000 Reward for the Missing Bible Text"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                {/* Right: Links & Titles */}
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px', lineHeight: '1.5' }}>
                    <div>
                        <strong style={{ display: 'block', color: '#111827', marginBottom: '2px' }}>$1,000 Reward for the Missing Bible Text Take the challenge!</strong>
                        <a href="https://www.preparingforeternity.com/reward.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all' }}>
                            https://www.preparingforeternity.com/reward.htm
                        </a>
                    </div>

                    <div>
                        <strong style={{ display: 'block', color: '#111827', marginBottom: '2px' }}>Jesus Kept Saturday, the Seventh Day Sabbath Holy, Should We?</strong>
                        <a href="https://www.preparingforeternity.com/100sabfc.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all' }}>
                            https://www.preparingforeternity.com/100sabfc.htm
                        </a>
                    </div>

                    <div>
                        <strong style={{ display: 'block', color: '#111827', marginBottom: '2px' }}>How Sunday Keeping Started</strong>
                        <a href="https://www.preparingforeternity.com/howsunkeepstarted.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all' }}>
                            https://www.preparingforeternity.com/howsunkeepstarted.htm
                        </a>
                    </div>

                    <div>
                        <strong style={{ display: 'block', color: '#111827', marginBottom: '2px' }}>7 Facts About the Seventh Day, That Can Not Be Refuted</strong>
                        <a href="https://www.preparingforeternity.com/7sabfact.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all' }}>
                            https://www.preparingforeternity.com/7sabfact.htm
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Full-Width Text */}
            <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
                <strong style={{ display: 'block', color: '#111827', marginBottom: '4px' }}>
                    Candid Confessions - on What the Baptists, Catholics, Church of Christ, Lutherans, Methodists, Presbyterians, and Other Churches Say About Sunday Sacredness...
                </strong>
                <a href="https://www.preparingforeternity.com/candid.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all' }}>
                    https://www.preparingforeternity.com/candid.htm
                </a>
            </div>
        </div>
    );
};

export default RewardAndConfessionsComponent;