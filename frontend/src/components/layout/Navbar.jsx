import { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaPhoneAlt,
    FaWhatsapp,
    FaDownload,
} from "react-icons/fa";

import "../../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigationLinks = [
        { id: 1, name: "Home", href: "#home" },
        { id: 2, name: "Overview", href: "#overview" },
        { id: 3, name: "Amenities", href: "#amenities" },
        { id: 4, name: "Floor Plans", href: "#floor-plans" },
        { id: 5, name: "Gallery", href: "#gallery" },
        { id: 6, name: "Location", href: "#location" },
    ];

    const toggleMenu = () => {
        setMenuOpen((currentValue) => !currentValue);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    <span>THE</span>
                    LIVIN
                </a>

                <nav
                    className={
                        menuOpen
                            ? "navbar-menu active"
                            : "navbar-menu"
                    }
                    aria-label="Main navigation"
                >
                    {navigationLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="/brochure.pdf"
                        download
                        className="mobile-brochure-button"
                        onClick={closeMenu}
                    >
                        <FaDownload aria-hidden="true" />
                        Download Brochure
                    </a>
                </nav>

                <div className="navbar-actions">
                    <a
                        href="tel:8291919189"
                        className="navbar-contact-button navbar-call-button"
                        aria-label="Call The Livin"
                    >
                        <FaPhoneAlt aria-hidden="true" />
                        <span>Call</span>
                    </a>

                    <a
                        href="https://wa.me/918291919189"
                        target="_blank"
                        rel="noreferrer"
                        className="navbar-contact-button navbar-whatsapp-button"
                        aria-label="Contact The Livin on WhatsApp"
                    >
                        <FaWhatsapp aria-hidden="true" />
                        <span>WhatsApp</span>
                    </a>

                    <a
                        href="/brochure.pdf"
                        download
                        className="desktop-brochure-button"
                    >
                        <FaDownload aria-hidden="true" />
                        <span>Brochure</span>
                    </a>

                    <button
                        type="button"
                        className="navbar-toggle"
                        onClick={toggleMenu}
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;