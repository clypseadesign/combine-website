import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '/logo-do-5.png';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'OUR WORK', path: '/our-work' },
    { name: 'UNITS & INITIATIVES', path: '/units-initiatives' },
    { name: 'MEDIA & RESOURCES', path: '/media-resources' },
    { name: 'GET INVOLVED', path: '/get-involved' },
    { name: 'DONATE US', path: '/donate-us' },
    { name: 'CONTACT US', path: '/contact-us' },
    { name: 'TRANSPARENCY & LEGAL', path: '/transparency-legal' },
    { name: 'PERSONAL GRATITUDE & SINCERE THANKS', path: '/gratitude' }
  ];

  return (
    <header className="navbar-sticky">
      {/* Top White Logo Bar */}
      <div className="navbar-top-white">
        <NavLink to="/" className="navbar-centered-brand">
          <img 
            src={logoImg} 
            alt="God Cares Ministries (A MINISTRY ROOTED IN LOVE)" 
            className="header-logo-image"
          />
          <div className="header-logo-textblock">
            <span className="header-logo-text">God Cares Ministries</span>
            <span className="header-logo-tagline">(A Ministry Rooted in Love)</span>
          </div>
        </NavLink>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Main Navigation Bar (Blue Ribbon) */}
      <div className="navbar-bottom-blue">
        <div className="navbar-items-container">
          <ul className={`nav-links-ribbon ${mobileOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `ribbon-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
