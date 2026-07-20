import {
    FaPhoneAlt,
    FaWhatsapp,
    FaFilePdf,
} from "react-icons/fa";

import "../../styles/floating-contact.css";

function FloatingContact() {
    return (
        <div
            className="floating-contact-bar"
            aria-label="Contact options"
        >
            <a
                href="tel:8291919189"
                className="floating-contact-item floating-call"
            >
                <FaPhoneAlt aria-hidden="true" />
                <span>Call</span>
            </a>

            <a
                href="https://wa.me/918291919189"
                target="_blank"
                rel="noreferrer"
                className="floating-contact-item floating-whatsapp"
            >
                <FaWhatsapp aria-hidden="true" />
                <span>WhatsApp</span>
            </a>

            <a
                href="/brochure.pdf"
                download
                className="floating-contact-item floating-brochure"
            >
                <FaFilePdf aria-hidden="true" />
                <span>Brochure</span>
            </a>
        </div>
    );
}

export default FloatingContact;