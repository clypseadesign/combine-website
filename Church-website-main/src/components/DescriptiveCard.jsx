const DescriptiveCard = ({ image, name, title, date, quote, description }) => {
    return (
        <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fde68a',
            borderRadius: '24px',
            padding: '40px 30px',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
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
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectFit: "contain" }}
                />
            </div>

            {/* Name and Designation */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937', marginBottom: title || date ? '4px' : '0' }}>
                    {name}
                </h4>
                {title && <p style={{ fontSize: '12px', color: '#374151', fontWeight: '500' }}>{title}</p>}
                {date && <p style={{ fontSize: '12px', color: '#4b5563', marginTop: '2px' }}>{date}</p>}
            </div>

            {/* Description / Bio */}
            {description && (
                <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: quote ? '20px' : '0' }}>
                    {description}
                </div>
            )}

            {/* Quote / Testimonial */}
            {quote && (
                <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', fontStyle: 'italic', textAlign: 'center', width: '100%' }}>
                    {typeof quote === 'string' ? (quote.startsWith('"') || quote.startsWith('“') ? quote : `"${quote}"`) : quote}
                </div>
            )}
        </div>
    );
};

export default DescriptiveCard;