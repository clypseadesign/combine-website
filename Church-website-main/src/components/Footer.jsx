import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {

    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'color 0.2s ease, padding-left 0.2s ease',
    };

    const handleMouseOver = (e) => {
        e.currentTarget.style.color = '#fffbeb';
        e.currentTarget.style.paddingLeft = '4px';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.paddingLeft = '0px';
    };

    return (
        <>
            {/* GLOBAL RESPONSIVE CSS */}
            <style>
                {`
                    html,
                    body,
                    #root {
                        width: 100%;
                        max-width: 100%;
                        margin: 0;
                        padding: 0;
                        overflow-x: hidden;
                    }

                    *,
                    *::before,
                    *::after {
                        box-sizing: border-box;
                    }

                    img {
                        max-width: 100%;
                    }

                    /* =========================
                       FOOTER
                    ========================= */

                    .footer {
                        width: 100%;
                        max-width: 100%;
                        background-color: #e6b800;
                        color: #000000;
                        padding: 50px 20px 20px;
                        font-family: "Century Gothic", sans-serif;
                        overflow: hidden;
                    }

                    .footer-container {
                        width: 100%;
                        max-width: 1200px;
                        margin: 0 auto;
                    }

                    /* =========================
                       LOGO SECTION
                    ========================= */

                    .footer-logo-section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 40px;
                        text-align: center;
                    }

                    .footer-logo {
                        width: auto;
                        height: 55px;
                        max-width: 100%;
                        margin-bottom: 8px;
                        object-fit: contain;
                    }

                    .footer-title {
                        font-size: 30px;
                        font-family: "Brush Script MT", "Brush Script Std", cursive;
                        font-weight: normal;
                        color: #ffffff;
                        margin: 0;
                        line-height: 1.1;
                        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
                    }

                    .footer-subtitle {
                        font-size: 12px;
                        letter-spacing: 0.5px;
                        color: #fffbeb;
                        font-weight: 400;
                        text-transform: none;
                        margin: 3px 0 0;
                        font-family: "Century Gothic", sans-serif;
                    }

                    /* =========================
                       FOOTER GRID
                    ========================= */

                    .footer-grid {
                        display: grid;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                        gap: 40px;
                        margin-bottom: 50px;
                        font-size: 13px;
                        width: 100%;
                    }

                    .footer-column {
                        min-width: 0;
                        width: 100%;
                    }

                    .footer-column h3 {
                        font-weight: bold;
                        font-size: 15px;
                        margin: 0 0 15px;
                        color: #ffffff;
                    }

                    .footer-column ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }

                    .footer-column li {
                        max-width: 100%;
                        overflow-wrap: break-word;
                    }

                    .footer-column a {
                        overflow-wrap: anywhere;
                    }

                    .footer-column p {
                        margin: 0 0 10px;
                        overflow-wrap: anywhere;
                        color: #ffffff;
                    }

                    /* =========================
                       COPYRIGHT
                    ========================= */

                    .footer-copyright {
                        border-top: 1px solid rgba(0, 0, 0, 0.15);
                        padding-top: 20px;
                        text-align: center;
                        font-size: 12px;
                        letter-spacing: 1px;
                        font-weight: bold;
                        color: #fffbeb;
                        font-family: "Century Gothic", sans-serif;
                        overflow-wrap: break-word;
                    }

                    /* =========================
                       TABLET
                    ========================= */

                    @media (max-width: 1024px) {

                        .footer {
                            padding: 45px 30px 20px;
                        }

                        .footer-grid {
                            grid-template-columns: repeat(2, minmax(0, 1fr));
                            gap: 35px 50px;
                        }

                        .footer-logo {
                            height: 52px;
                        }

                        .footer-title {
                            font-size: 26px;
                        }
                    }

                    /* =========================
                       MOBILE
                    ========================= */

                    @media (max-width: 768px) {

                        .footer {
                            padding: 40px 20px 18px;
                        }

                        .footer-logo-section {
                            margin-bottom: 35px;
                        }

                        .footer-logo {
                            height: 48px;
                        }

                        .footer-title {
                            font-size: 24px;
                        }

                        .footer-subtitle {
                            font-size: 8px;
                            letter-spacing: 2px;
                        }

                        .footer-grid {
                            grid-template-columns: 1fr;
                            gap: 30px;
                            margin-bottom: 40px;
                        }

                        .footer-column {
                            text-align: center;
                        }

                        .footer-column h3 {
                            font-size: 16px;
                            margin-bottom: 12px;
                        }

                        .footer-column ul {
                            align-items: center;
                        }

                        .footer-column p {
                            text-align: center;
                        }

                        .footer-copyright {
                            font-size: 10px;
                            letter-spacing: 0.7px;
                            line-height: 1.5;
                            padding-top: 18px;
                        }
                    }

                    /* =========================
                       SMALL MOBILE
                    ========================= */

                    @media (max-width: 480px) {

                        .footer {
                            padding: 35px 15px 15px;
                        }

                        .footer-logo {
                            height: 44px;
                        }

                        .footer-title {
                            font-size: 22px;
                        }

                        .footer-subtitle {
                            font-size: 7px;
                            letter-spacing: 1.5px;
                        }

                        .footer-grid {
                            gap: 28px;
                        }

                        .footer-column {
                            font-size: 12px;
                        }

                        .footer-column h3 {
                            font-size: 15px;
                        }

                        .footer-copyright {
                            font-size: 9px;
                        }
                    }
                `}
            </style>

            <footer className="footer">

                <div className="footer-container">

                    {/* LOGO */}
                    <div className="footer-logo-section">

                        <img
                            src={logo}
                            alt="God Cares Ministries Logo"
                            className="footer-logo"
                        />

                        <h2 className="footer-title">
                            God Cares Ministries
                        </h2>

                        <p className="footer-subtitle">
                            (A Ministry Rooted in Love)
                        </p>

                    </div>


                    {/* FOOTER LINKS */}
                    <div className="footer-grid">

                        {/* IMPORTANT LINKS */}
                        <div className="footer-column">

                            <h3>
                                Important Links
                            </h3>

                            <ul>

                                <li>
                                    <Link
                                        to="/highlights"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Highlights of the Album
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/why-needed"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Why the album is needed?
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/who-participate"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Who can participate?
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/become-sponsor"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Became a Sponsor
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/credits"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Credits & Sincere thanks
                                    </Link>
                                </li>

                            </ul>

                        </div>


                        {/* COMPANY */}
                        <div className="footer-column">

                            <h3>
                                Company
                            </h3>

                            <ul>

                                <li>
                                    <Link
                                        to="/"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        The Producer of the Album
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/participant-registration"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Participants Registration
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/support-matters"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Your Support Matters
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/testimonies"
                                        style={linkStyle}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Testimonies
                                    </Link>
                                </li>

                            </ul>

                        </div>


                        {/* POLICIES */}
                        <div className="footer-column">

                            <h3>
                                Policies
                            </h3>

                            <ul>

                                <li>
                                    <span
                                        style={{ ...linkStyle, cursor: 'pointer' }}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Privacy Policy
                                    </span>
                                </li>

                                <li>
                                    <span
                                        style={{ ...linkStyle, cursor: 'pointer' }}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Refund Policy
                                    </span>
                                </li>

                                <li>
                                    <span
                                        style={{ ...linkStyle, cursor: 'pointer' }}
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        Terms & Conditions
                                    </span>
                                </li>

                            </ul>

                        </div>


                        {/* CONTACT */}
                        <div className="footer-column">

                            <h3>
                                Contact
                            </h3>

                            <p>
                                support@theuniversalroyallawoflove.org
                            </p>

                            <p>
                                +91-88923 36400
                            </p>

                        </div>

                    </div>


                    {/* COPYRIGHT */}
                    <div className="footer-copyright">
                        © 2026 GODS CARES MINISTRIES
                    </div>

                </div>

            </footer>
        </>
    );
};

export default Footer;