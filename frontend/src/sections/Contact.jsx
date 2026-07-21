import { useState } from "react";

import { submitEnquiry } from "../services/enquiryService";


const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
};


function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [statusMessage, setStatusMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));

        setStatusMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.phone.trim() ||
            !formData.email.trim()
        ) {
            setStatusMessage(
                "Please complete all required fields."
            );
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("");

        try {
            const response = await submitEnquiry(
                formData,
                "contact"
            );

            setStatusMessage(response.message);
            setFormData(initialFormData);
        } catch (error) {
            setStatusMessage(
                error.message ||
                    "Unable to submit your enquiry."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <p className="contact-kicker">
                        Plan Your Visit
                    </p>

                    <h2>
                        Find Your Future Home at The Livin
                    </h2>

                    <p className="contact-description">
                        Connect with our project advisor to learn more about
                        available residences, floor plans, amenities and site
                        visits.
                    </p>

                    <div className="contact-information">
                        <div>
                            <span>Project</span>
                            <strong>The Livin</strong>
                        </div>

                        <div>
                            <span>Configuration</span>
                            <strong>
                                {"1 & 2 BHK Residences"}
                            </strong>
                        </div>

                        <div>
                            <span>Location</span>
                            <strong>
                                Kon Gaon, Kalyan West
                            </strong>
                        </div>
                    </div>

                    <div className="contact-address">
                        <span>Project Address</span>

                        <p>
                            Opp. Janki Ram Mandir and Shiv Mandir, near
                            Ceremony Banquet Hall, Kalyan-Bhiwandi Road,
                            Kon Gaon, Kalyan West.
                        </p>
                    </div>
                </div>

                <div className="contact-form-card">
                    <p className="contact-form-kicker">
                        Request a Callback
                    </p>

                    <h3>Enquire Now</h3>

                    <p className="contact-form-description">
                        Submit your details and our project advisor will
                        contact you.
                    </p>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="contact-form-group">
                            <label htmlFor="contact-name">
                                Full Name
                            </label>

                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="contact-phone">
                                Phone Number
                            </label>

                            <input
                                id="contact-phone"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter 10-digit number"
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                maxLength="10"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="contact-email">
                                Email Address
                            </label>

                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="contact-message">
                                Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us how we can assist you"
                                rows="4"
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact-submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Request a Callback"}
                        </button>

                        {statusMessage && (
                            <p className="contact-status-message">
                                {statusMessage}
                            </p>
                        )}

                        <small>
                            By submitting, you agree to be contacted regarding
                            this project.
                        </small>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default Contact;
