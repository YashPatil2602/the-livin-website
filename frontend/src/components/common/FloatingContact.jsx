import { useEffect, useState } from "react";

import {
    FaFilePdf,
    FaPhoneAlt,
    FaWhatsapp,
} from "react-icons/fa";

import "../../styles/floating-contact.css";


function FloatingContact() {
    const [isHeroVisible, setIsHeroVisible] =
        useState(true);


    useEffect(() => {
        const heroSection =
            document.getElementById("home");

        if (!heroSection) {
            setIsHeroVisible(false);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeroVisible(
                    entry.isIntersecting
                );
            },
            {
                threshold: 0.12,
            }
        );

        observer.observe(heroSection);

        return () => {
            observer.disconnect();
        };
    }, []);


    const openEnquiryPopup = (action) => {
        window.dispatchEvent(
            new CustomEvent("open-enquiry-popup", {
                detail: action,
            })
        );
    };


    const handleCallClick = () => {
        openEnquiryPopup({
            type: "call",
            source: "floating-call",
            url: "tel:8291919189",
        });
    };


    const handleWhatsAppClick = () => {
        openEnquiryPopup({
            type: "whatsapp",
            source: "floating-whatsapp",
            url: "https://wa.me/918291919189",
        });
    };


    const handleBrochureClick = () => {
        openEnquiryPopup({
            type: "brochure",
            source: "floating-brochure",
            url: "/brochure.pdf",
        });
    };


    return (
        <>
            <div
                className={`floating-contact-icons ${
                    isHeroVisible
                        ? "hero-is-visible"
                        : "floating-icons-visible"
                }`}
                aria-label="Contact options"
            >
                <button
                    type="button"
                    className="floating-round-button floating-call"
                    onClick={handleCallClick}
                    aria-label="Call The Livin"
                    title="Call"
                >
                    <FaPhoneAlt aria-hidden="true" />
                </button>

                <button
                    type="button"
                    className="floating-round-button floating-whatsapp"
                    onClick={handleWhatsAppClick}
                    aria-label="Contact The Livin on WhatsApp"
                    title="WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                </button>
            </div>

            <button
                type="button"
                className="floating-brochure-tab"
                onClick={handleBrochureClick}
                aria-label="View The Livin brochure"
            >
                <FaFilePdf aria-hidden="true" />

                <span>Brochure</span>
            </button>
        </>
    );
}


export default FloatingContact;
