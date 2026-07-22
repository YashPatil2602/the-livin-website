import { useState } from "react";

import { submitEnquiry } from "../services/enquiryService";
import { openEnquiryPopup } from "../utils/enquiryPopup";

import "../styles/hero.css";


function Hero() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setIsSubmitting(true);
        setStatusMessage("");
        setIsError(false);

        try {
            const response = await submitEnquiry(
                {
                    name: formData.get("name"),
                    phone: formData.get("phone"),
                    email: formData.get("email"),
                    message: "Site visit enquiry from hero form",
                },
                "hero"
            );

            setStatusMessage(response.message);
            form.reset();
        } catch (error) {
            setIsError(true);
            setStatusMessage(
                error.message ||
                    "Unable to submit your enquiry."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleExploreProject = (event) => {
        event.preventDefault();

        openEnquiryPopup({
            type: "details",
            source: "hero-explore-project",
            sectionId: "overview",
        });
    };


    return (
        <section id="home" className="hero">
            <div className="hero-overlay" />

            <div
                className="hero-mobile-image"
                aria-hidden="true"
            />

            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow">
                        {"KALYAN'S FUTURE SYMBOL"}
                    </p>

                    <h1>THE LIVIN</h1>

                    <h2>Boutique Twin Towers</h2>

                    <p className="hero-description">
                        Experience elevated living with thoughtfully designed
                        1 and 2 BHK residences, modern amenities and excellent
                        connectivity in Kalyan West.
                    </p>

                    <div className="hero-features">
                        <span>{"1 & 2 BHK HOMES"}</span>
                        <span>PREMIUM AMENITIES</span>
                        <span>KALYAN WEST</span>
                    </div>

                    <div className="hero-actions">
                        <a
                            href="#overview"
                            className="primary-button"
                            onClick={handleExploreProject}
                        >
                            Explore Project
                        </a>
                    </div>
                </div>

                <div className="enquiry-card">
                    <p className="enquiry-label">
                        Book Your Site Visit
                    </p>

                    <h3>Enquire Now</h3>

                    <p className="enquiry-description">
                        Submit your details and our project advisor will
                        contact you.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="hero-name">
                                Full Name
                            </label>

                            <input
                                id="hero-name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                minLength="2"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hero-phone">
                                Phone Number
                            </label>

                            <input
                                id="hero-phone"
                                name="phone"
                                type="tel"
                                inputMode="numeric"
                                placeholder="Enter 10-digit number"
                                pattern="[0-9]{10}"
                                maxLength="10"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hero-email">
                                Email Address
                            </label>

                            <input
                                id="hero-email"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Request a Callback"}
                        </button>

                        {statusMessage && (
                            <p
                                className={`hero-form-status ${
                                    isError ? "error" : "success"
                                }`}
                            >
                                {statusMessage}
                            </p>
                        )}
                    </form>

                    <small>
                        By submitting, you agree to be contacted regarding
                        this project.
                    </small>
                </div>
            </div>
        </section>
    );
}


export default Hero;
