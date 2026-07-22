import { useState } from "react";

import {
    FaBars,
    FaDownload,
    FaPhoneAlt,
    FaTimes,
    FaWhatsapp,
} from "react-icons/fa";

import "../../styles/navbar.css";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    const navigationLinks = [
        {
            id: 1,
            name: "Home",
            href: "#home",
        },
        {
            id: 2,
            name: "Overview",
            href: "#overview",
        },
        {
            id: 3,
            name: "Amenities",
            href: "#amenities",
        },
        {
            id: 4,
            name: "Floor Plans",
            href: "#floor-plans",
        },
        {
            id: 5,
            name: "Gallery",
            href: "#gallery",
        },
        {
            id: 6,
            name: "Location",
            href: "#location",
        },
        {
            id: 7,
            name: "Contact",
            href: "#contact",
            requiresEnquiry: true,
        },
    ];


    const toggleMenu = () => {
        setMenuOpen((currentValue) => !currentValue);
    };


    const closeMenu = () => {
        setMenuOpen(false);
    };


    const openEnquiryPopup = (action) => {
        window.dispatchEvent(
            new CustomEvent("open-enquiry-popup", {
                detail: action,
            })
        );
    };


    const handleNavigationClick = (
        event,
        link
    ) => {
        closeMenu();

        if (!link.requiresEnquiry) {
            return;
        }

        event.preventDefault();

        openEnquiryPopup({
            type: "contact",
            source: "navbar-contact",
            sectionId: "contact",
        });
    };


    const handleCallClick = (event) => {
        event.preventDefault();

        openEnquiryPopup({
            type: "call",
            source: "navbar-call",
            url: "tel:8291919189",
        });
    };


    const handleWhatsAppClick = (event) => {
        event.preventDefault();

        openEnquiryPopup({
            type: "whatsapp",
            source: "navbar-whatsapp",
            url: "https://wa.me/918291919189",
        });
    };


    const handleBrochureClick = (event) => {
        event.preventDefault();
        closeMenu();

        openEnquiryPopup({
            type: "brochure",
            source: "navbar-brochure",
            url: "/brochure.pdf",
        });
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
                            onClick={(event) =>
                                handleNavigationClick(
                                    event,
                                    link
                                )
                            }
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="/brochure.pdf"
                        className="mobile-brochure-button"
                        onClick={handleBrochureClick}
                    >
                        <FaDownload aria-hidden="true" />

                        <span>
                            Download Brochure
                        </span>
                    </a>
                </nav>

                <div className="navbar-actions">
                    <a
                        href="tel:8291919189"
                        className="navbar-contact-button navbar-call-button"
                        aria-label="Call The Livin"
                        onClick={handleCallClick}
                    >
                        <FaPhoneAlt aria-hidden="true" />

                        <span>Call</span>
                    </a>

                    <a
                        href="https://wa.me/918291919189"
                        className="navbar-contact-button navbar-whatsapp-button"
                        aria-label="Contact The Livin on WhatsApp"
                        onClick={handleWhatsAppClick}
                    >
                        <FaWhatsapp aria-hidden="true" />

                        <span>WhatsApp</span>
                    </a>

                    <a
                        href="/brochure.pdf"
                        className="desktop-brochure-button"
                        onClick={handleBrochureClick}
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
                        {menuOpen ? (
                            <FaTimes />
                        ) : (
                            <FaBars />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}


export default Navbar;
