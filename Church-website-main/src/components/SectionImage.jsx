import React from 'react';
import leftCard from '../assets/producer/christianity-fragmented.png';
import rightCard from '../assets/producer/tables-of-stone.png';

const ComeOutOfHerSection = () => {
    return (
        <section style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '20px', fontFamily: 'Anastasia', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                "COME OUT OF HER, MY PEOPLE": GOD'S FINAL CALL TO REFORMATION:
            </h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto 25px auto' }}>
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '520px', borderRadius: '24px', overflow: 'hidden' }}>
                    <img src={leftCard} alt="Come Out of Her My People Part 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '520px', borderRadius: '24px', overflow: 'hidden' }}>
                    <img src={rightCard} alt="Come Out of Her My People Part 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
            </div>
        </section>
    );
};

export default ComeOutOfHerSection;
