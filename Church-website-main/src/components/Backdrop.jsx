import { Link } from 'react-router-dom';
import heroBgImage from '../assets/backdrop-cloud.png';
export default function Backdrop({ title }) {
    return <div>
        {/* <div style={{
            backgroundImage: `url(${heroBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '70px 20px',
            textAlign: 'center',
            position: 'relative',

        }}> */}
        <div
            className="backdrop"
            style={{
                backgroundImage: `url(${heroBgImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat-y',
                padding: '70px 20px',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(245, 158, 11, 0.4)',
                zIndex: 1
            }}></div>

            <div style={{ position: 'relative', zIndex: 2 }}>
                <h1 style={{ fontSize: '36px', fontFamily: "Anastasia", fontWeight: '900', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase', textShadow: '2px 2px 6px rgba(0,0,0,0.4)', marginBottom: '20px' }}>
                    {title}
                </h1>

                <Link 
                    to="/participant-registration"
                    style={{ 
                        display: 'inline-block', 
                        backgroundColor: '#ffffff', 
                        padding: '10px 24px', 
                        borderRadius: '30px', 
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }}
                >
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Join "The Universal Royal Law of Love" Project &rarr;
                    </span>
                </Link>
            </div>
        </div>
    </div>
}

