import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

// Accessible inline SVGs (100% React 19 compatible, zero external context overhead)
const MenuIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
);

const CloseIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ChevronRightIcon = ({ size = 16, style = {} }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 2-line stacked structure matching the exact reference design
    const navItems = [
        { line1: "THE PRODUCER'S", line2: "1ST ALBUM", full: "THE PRODUCER'S 1ST ALBUM", path: "/" },
        { line1: "THE PRESENT CONDITION", line2: "OF THE WORLD", full: "THE PRESENT CONDITION OF THE WORLD", path: "/present-condition" },
        { line1: "HIGHLIGHTS OF", line2: "ALBUM", full: "HIGHLIGHTS OF ALBUM", path: "/highlights" },
        { line1: "WHY THE ALBUM", line2: "IS NEEDED?", full: "WHY THE ALBUM IS NEEDED?", path: "/why-needed" },
        { line1: "WHO CAN", line2: "PARTICIPATE?", full: "WHO CAN PARTICIPATE?", path: "/who-participate" },
        { line1: "PARTICIPANT", line2: "REGISTRATION", full: "PARTICIPANT REGISTRATION", path: "/participant-registration" },
        { line1: "BECOME A", line2: "SPONSOR", full: "BECOME A SPONSOR", path: "/become-sponsor" },
        { line1: "YOUR SUPPORT", line2: "MATTERS", full: "YOUR SUPPORT MATTERS", path: "/support-matters" },
        { line1: "CREDITS & SINCERE", line2: "THANKS", full: "CREDITS & SINCERE THANKS", path: "/credits" },
        { line1: "LISTENER", line2: "TESTIMONIES", full: "LISTENER TESTIMONIES", path: "/testimonies" },
    ];

    // Automatically close mobile menu on page transition
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const activeItem = navItems.find((item) => item.path === location.pathname);

    return (
        <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}>
            {/* Top Logo Header Section */}
            <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '10px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'center', textDecoration: 'none' }}>
                    <div style={{ width: '65px', height: '48px' }}>
                        <img src={logo} alt="God Cares Ministries Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                </Link>
            </div>

            {/* Gold Navigation Bar matching the exact screenshot design */}
            <nav
                className="no-scrollbar"
                aria-label="Main Navigation"
                style={{
                    width: '100%',
                    backgroundColor: '#e6a800',
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                }}
            >
                {/* Desktop Menu: Single Row, 2-line stacked items evenly distributed */}
                <ul
                    className="nav-desktop-container no-scrollbar"
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: '1440px',
                        margin: '0 auto',
                        listStyle: 'none',
                        padding: '8px 12px',
                        gap: '6px',
                        flexWrap: 'nowrap',
                    }}
                >
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={index} style={{ flex: '1 1 0', textAlign: 'center', minWidth: 0 }}>
                                <Link
                                    to={item.path}
                                    style={{
                                        color: '#ffffff',
                                        fontSize: 'clamp(9px, 0.82vw, 11px)',
                                        fontWeight: 700,
                                        letterSpacing: '0.3px',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        lineHeight: 1.25,
                                        fontFamily: '"Century Gothic", sans-serif',
                                        whiteSpace: 'nowrap',
                                        transition: 'opacity 0.15s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.opacity = '0.85';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                    }}
                                >
                                    <span>{item.line1}</span>
                                    <span
                                        style={{
                                            borderBottom: isActive ? '2px solid #ffffff' : '2px solid transparent',
                                            paddingBottom: '2px',
                                            display: 'inline-block',
                                        }}
                                    >
                                        {item.line2}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile / Tablet Compact Bar (< 880px) */}
                <div
                    className="nav-mobile-bar"
                    style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 16px',
                        maxWidth: '1440px',
                        margin: '0 auto',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
                        <span style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            fontFamily: '"Century Gothic", sans-serif',
                            maxWidth: '220px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                            {activeItem ? activeItem.full : 'Navigation'}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMobileMenuOpen}
                        style={{
                            background: 'rgba(255, 255, 255, 0.22)',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 700,
                            fontFamily: '"Century Gothic", sans-serif',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            transition: 'background 0.2s ease',
                        }}
                    >
                        {isMobileMenuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
                        <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Animated Dropdown Drawer */}
            {isMobileMenuOpen && (
                <div
                    style={{
                        backgroundColor: '#d4a000',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                        maxHeight: '75vh',
                        overflowY: 'auto',
                    }}
                    className="no-scrollbar"
                >
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={index} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '13px 20px',
                                            minHeight: '44px',
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            fontSize: '12px',
                                            letterSpacing: '0.4px',
                                            fontWeight: isActive ? 700 : 500,
                                            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                                            fontFamily: '"Century Gothic", sans-serif',
                                            transition: 'background 0.15s ease',
                                        }}
                                    >
                                        <span>{item.full}</span>
                                        <ChevronRightIcon size={16} style={{ opacity: isActive ? 1 : 0.5, flexShrink: 0 }} />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;