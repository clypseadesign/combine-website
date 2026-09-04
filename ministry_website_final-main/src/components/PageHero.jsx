import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
import cloudBg from '/assets/all-pages-banner.png';

export default function PageHero({
  title,
  subtitle,
  bgImage,
  showButton = true,
  buttonText = 'Join "The Universal Royal Law of Love" Project',
  buttonLink = '/donate-us'
}) {
  return (
    <div className="hero-cloud-banner">
      <img src={bgImage || cloudBg} alt="Header Overlay" className="hero-cloud-bg" />
      <div className="hero-content">
        {subtitle && <span className="hero-tag">{subtitle}</span>}
        <h1 className="hero-title">{title}</h1>
        {showButton && (
          <Link
            to={buttonLink}
            className="hero-button-gold"
            aria-label={buttonText}
          >
            <span>{buttonText}</span>
            <ArrowRightCircle size={20} aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
