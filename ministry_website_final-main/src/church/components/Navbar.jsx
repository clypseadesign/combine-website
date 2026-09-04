import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Group 17.png';

const Navbar = () => {
    const location = useLocation();
    const navItems = [
        { name: "THE PRODUCER'S 1ST ALBUM", path: "/church" },
        { name: "THE PRESENT CONDITION OF THE WORLD", path: "/church/present-condition" },
        { name: "HIGHLIGHTS OF ALBUM", path: "/church/highlights" },
        { name: "WHY THE ALBUM IS NEEDED?", path: "/church/why-needed" },
        { name: "WHO CAN PARTICIPATE?", path: "/church/who-participate" },
        { name: "PARTICIPANT REGISTRATION", path: "/church/participant-registration" },
        { name: "BECOME A SPONSOR", path: "/church/become-sponsor" },
        { name: "YOUR SUPPORT MATTERS", path: "/church/support-matters" },
        { name: "CREDITS & SINCERE THANKS", path: "/church/credits" },
        { name: "LISTENER TESTIMONIES", path: "/church/testimonies" },
    ];

    return (
        <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            {/* Top Logo Header Section */}
            <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '12px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <img src={logo} alt="God Cares Ministries Logo" style={{ maxWidth: '100%', height: 'auto', maxHeight: '80px' }} />
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