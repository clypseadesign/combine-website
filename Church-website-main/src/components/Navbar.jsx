import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const navItems = [
        { name: "THE PRODUCER'S 1ST ALBUM", path: "/" },
        { name: "THE PRESENT CONDITION OF THE WORLD", path: "/present-condition" },
        { name: "HIGHLIGHTS OF ALBUM", path: "/highlights" },
        { name: "WHY THE ALBUM IS NEEDED?", path: "/why-needed" },
        { name: "WHO CAN PARTICIPATE?", path: "/who-participate" },
        { name: "PARTICIPANT REGISTRATION", path: "/participant-registration" },
        { name: "BECOME A SPONSOR", path: "/become-sponsor" },
        { name: "YOUR SUPPORT MATTERS", path: "/support-matters" },
        { name: "CREDITS & SINCERE THANKS", path: "/credits" },
        { name: "LISTENER TESTIMONIES", path: "/testimonies" },
    ];

    return (
        <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            {/* Top Logo Header Section */}
            <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '12px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'center' }}>
                    <div style={{ width: '70px', height: '50px' }}>
                        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    <div>
                        <h1 style={{
                            fontSize: '32px',
                            fontFamily: '"Brush Script MT", "Brush Script Std", cursive',
                            fontWeight: 'normal',
                            color: '#2563eb',
                            margin: 0,
                            lineHeight: 1.1,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                        }}>
                            God Cares Ministries
                        </h1>
                        <p style={{
                            fontSize: '10px',
                            letterSpacing: '2.5px',
                            color: '#374151',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            margin: '3px 0 0 0',
                            fontFamily: '"Century Gothic", sans-serif'
                        }}>
                            (A Ministry Rooted in Love)
                        </p>
                    </div>
                </div>
            </div>

            {/* Gold Navigation Bar */}
            <nav style={{ width: '100%', backgroundColor: '#e6b800', overflowX: 'auto', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)' }}>
                <ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: '1400px', margin: '0 auto', listStyle: 'none', padding: '10px 20px', whiteSpace: 'nowrap', gap: '6px' }}>
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                        <li key={index}>
                            <Link
                                to={item.path}
                                style={{
                                    color: 'white',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    letterSpacing: '0.5px',
                                    textDecoration: 'none',
                                    padding: '8px 14px',
                                    display: 'block',
                                    borderBottom: isActive ? '2px solid #ffffff' : '2px solid transparent',
                                    transition: 'all 0.2s ease-in-out',
                                    fontFamily: '"Century Gothic", sans-serif'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#ffffff';
                                    e.target.style.borderColor = '#ffffff';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.borderColor = isActive ? '#ffffff' : 'transparent';
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;