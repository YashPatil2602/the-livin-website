import { useEffect, useState } from "react";

import { submitEnquiry } from "../../services/enquiryService";
import "../../styles/popup.css";


const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
};


function EnquiryPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [statusMessage, setStatusMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("popupClosed")) {
            return;
        }

        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        sessionStorage.setItem("popupClosed", "true");
        setIsOpen(false);
    };

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
                "popup"
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

    if (!isOpen) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-card">
                <button
                    type="button"
                    className="popup-close"
                    onClick={closePopup}
                    aria-label="Close enquiry popup"
                >
                    ×
                </button>

                <p className="popup-kicker">
                    The Livin
                </p>

                <h2>Enquire Now</h2>

                <p className="popup-description">
                    Submit your details and our project
                    advisor will contact you.
                </p>

                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="popup-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Submitting..."
                            : "Request Callback"}
                    </button>

                    {statusMessage && (
                        <p className="popup-status">
                            {statusMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}


export default EnquiryPopup;
