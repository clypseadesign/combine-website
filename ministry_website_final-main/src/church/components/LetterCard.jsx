const LetterCard = ({ content }) => {
    return (
        <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fde68a',
            borderRadius: '24px',
            padding: '40px 35px',
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            textAlign: 'left'
        }}>
            <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {content}
            </div>
        </div>
    );
};
export default LetterCard;