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

    const [isContactVisible, setIsContactVisible] =
        useState(false);


    useEffect(() => {
        const heroSection =
            document.getElementById("home");

        const contactSection =
            document.getElementById("contact");

        const observers = [];

        const observeSection = (
            section,
            setVisibility
        ) => {
            if (!section) {
                return;
            }

            const observer = new IntersectionObserver(
                ([entry]) => {
                    setVisibility(entry.isIntersecting);
                },
                {
                    threshold: 0.12,
                }
            );

            observer.observe(section);
            observers.push(observer);
        };

        observeSection(
            heroSection,
            setIsHeroVisible
        );

        observeSection(
            contactSection,
            setIsContactVisible
        );

        if (!heroSection) {
            setIsHeroVisible(false);
        }

        return () => {
            observers.forEach((observer) => {
                observer.disconnect();
            });
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
        window.open(
            "https://wa.me/918291919189",
            "_blank",
            "noopener,noreferrer"
        );
    };


    const handleBrochureClick = () => {
        openEnquiryPopup({
            type: "brochure",
            source: "floating-brochure",
            url: "/brochure.pdf",
        });
    };


    const shouldHideFloatingUi =
        isHeroVisible || isContactVisible;

    const visibilityClass =
        shouldHideFloatingUi
            ? "floating-ui-hidden"
            : "floating-ui-visible";


    return (
        <>
            <div
                className={`floating-contact-icons ${visibilityClass}`}
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
                className={`floating-brochure-tab ${visibilityClass}`}
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
