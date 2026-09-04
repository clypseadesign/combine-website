const TestimonyCard = ({ image, name, title, date, content }) => {
    return (
        <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fde68a',
            borderRadius: '24px',
            padding: '40px 30px',
            flex: '1 1 450px',
            maxWidth: '480px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left'
        }}>
            {/* Profile Image */}
            <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #d1d5db',
                backgroundColor: '#f3f4f6',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                marginBottom: '20px'
            }}>
                <img
                    src={image}
                    alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
            </div>

            {/* Name and Designation */}
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#b45309', marginBottom: '4px', textTransform: 'uppercase' }}>
                    {name}
                </h4>
                {title && <p style={{ fontSize: '12px', color: '#374151', fontWeight: '500' }}>{title}</p>}
                {date && <p style={{ fontSize: '12px', color: '#4b5563', marginTop: '2px' }}>{date}</p>}
            </div>

            {/* Testimonial Content */}
            <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                {content}
            </div>
        </div>
    );
};

export default TestimonyCard;