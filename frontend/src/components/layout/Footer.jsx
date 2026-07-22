import { openEnquiryPopup } from "../../utils/enquiryPopup";

﻿function Footer() {
    const currentYear = new Date().getFullYear();


    const handleContactClick = (event) => {
        event.preventDefault();

        openEnquiryPopup({
            type: "contact",
            source: "footer-contact",
            sectionId: "contact",
        });
    };


    const handleBrochureClick = (event) => {
        event.preventDefault();

        openEnquiryPopup({
            type: "brochure",
            source: "footer-brochure",
            url: "/brochure.pdf",
        });
    };


    const handleMapClick = (event) => {
        event.preventDefault();

        openEnquiryPopup({
            type: "location",
            source: "footer-google-maps",
            url: "https://maps.app.goo.gl/rz7yRhMNLx2KFBG29",
            target: "_blank",
        });
    };


    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span>THE</span> LIVIN
                        </a>

                        <p>
                            Thoughtfully designed 1 and 2 BHK residences,
                            lifestyle amenities and excellent connectivity
                            in Kalyan West.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Explore</h3>

                        <a href="#overview">Overview</a>
                        <a href="#amenities">Amenities</a>
                        <a href="#floor-plans">Floor Plans</a>
                        <a href="#gallery">Gallery</a>
                    </div>

                    <div className="footer-column">
                        <h3>Project</h3>

                        <a href="#location">Location</a>
                        <a
                            href="#contact"
                            onClick={handleContactClick}
                        >
                            Contact
                        </a>

                        <a
                            href="/brochure.pdf"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleBrochureClick}
                        >
                            Download Brochure
                        </a>
                    </div>

                    <div className="footer-column footer-address">
                        <h3>Visit Us</h3>

                        <p>
                            Kalyan-Bhiwandi Road,
                            Kon Gaon, Kalyan West,
                            Maharashtra.
                        </p>

                        <a
                            href="https://maps.app.goo.gl/rz7yRhMNLx2KFBG29"
                            target="_blank"
                            rel="noreferrer"
                            onClick={handleMapClick}
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        Copyright {currentYear} The Livin.
                        All rights reserved.
                    </p>

                    <p>
                        Project information is for representation purposes
                        and subject to confirmation.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
