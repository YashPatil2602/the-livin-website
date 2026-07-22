import { useEffect, useState } from "react";

import {
    FaArrowRight,
    FaBuilding,
    FaCheckCircle,
    FaFilePdf,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaShieldAlt,
    FaWhatsapp,
} from "react-icons/fa";

import { submitEnquiry } from "../../services/enquiryService";

import "../../styles/popup.css";


const STORAGE_KEY = "theLivinRegisteredUser";

const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
};


const actionDetails = {
    call: {
        icon: FaPhoneAlt,
        kicker: "Speak With Us",
        title: "Connect With Our Advisor",
        description:
            "Complete this quick form before connecting with our project advisor.",
        buttonLabel: "Continue to Call",
    },

    whatsapp: {
        icon: FaWhatsapp,
        kicker: "Chat With Us",
        title: "Connect on WhatsApp",
        description:
            "Share your details before continuing to WhatsApp for quick project assistance.",
        buttonLabel: "Continue to WhatsApp",
    },

    brochure: {
        icon: FaFilePdf,
        kicker: "Project Brochure",
        title: "Download The Livin Brochure",
        description:
            "Complete your details to access project plans, amenities and specifications.",
        buttonLabel: "View Brochure",
    },

    contact: {
        icon: FaMapMarkerAlt,
        kicker: "Plan Your Visit",
        title: "Schedule a Project Visit",
        description:
            "Share your details and continue to our project enquiry section.",
        buttonLabel: "Continue to Contact",
    },

    details: {
        icon: FaBuilding,
        kicker: "Project Details",
        title: "Explore The Livin",
        description:
            "Register your interest before viewing complete project details.",
        buttonLabel: "Continue to Details",
    },

    location: {
        icon: FaMapMarkerAlt,
        kicker: "Project Location",
        title: "Visit The Livin",
        description:
            "Share your details before viewing the project location and directions.",
        buttonLabel: "View Location",
    },

    default: {
        icon: FaBuilding,
        kicker: "Exclusive Residences",
        title: "Discover Your Future Home",
        description:
            "Register your interest and receive complete project details from our advisor.",
        buttonLabel: "Continue",
    },
};


function getSavedRegistration() {
    try {
        const savedRegistration =
            localStorage.getItem(STORAGE_KEY);

        if (!savedRegistration) {
            return null;
        }

        return JSON.parse(savedRegistration);
    } catch {
        return null;
    }
}


function EnquiryPopup() {
    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState(
        initialFormData
    );

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [submissionComplete, setSubmissionComplete] =
        useState(false);

    const [pendingAction, setPendingAction] =
        useState(null);


    const currentAction =
        actionDetails[pendingAction?.type] ||
        actionDetails.default;

    const ActionIcon = currentAction.icon;


    const openPopup = (action = null) => {
        const savedRegistration =
            getSavedRegistration();

        setPendingAction(action);
        setIsSubmitting(false);

        if (savedRegistration) {
            setFormData({
                ...initialFormData,
                ...savedRegistration,
            });

            setStatus({
                type: "existing",
                message:
                    "You have already submitted an enquiry. " +
                    "Our project advisor will contact you shortly.",
            });

            setSubmissionComplete(true);
        } else {
            setFormData(initialFormData);

            setStatus({
                type: "",
                message: "",
            });

            setSubmissionComplete(false);
        }

        setIsOpen(true);
    };


    useEffect(() => {
        const handleOpenEnquiry = (event) => {
            openPopup(event.detail || null);
        };

        window.addEventListener(
            "open-enquiry-popup",
            handleOpenEnquiry
        );

        return () => {
            window.removeEventListener(
                "open-enquiry-popup",
                handleOpenEnquiry
            );
        };
    }, []);


    useEffect(() => {
        if (sessionStorage.getItem("popupClosed")) {
            return undefined;
        }

        const timer = setTimeout(() => {
            openPopup();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const originalOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.body.style.overflow =
                originalOverflow;

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen]);


    const closePopup = () => {
        sessionStorage.setItem(
            "popupClosed",
            "true"
        );

        setIsOpen(false);
    };


    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closePopup();
        }
    };


    const handleChange = (event) => {
        const { name, value } = event.target;

        let updatedValue = value;

        if (name === "phone") {
            updatedValue = value
                .replace(/\D/g, "")
                .slice(0, 10);
        }

        setFormData((currentData) => ({
            ...currentData,
            [name]: updatedValue,
        }));

        setStatus({
            type: "",
            message: "",
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.phone.trim() ||
            !formData.email.trim()
        ) {
            setStatus({
                type: "error",
                message:
                    "Please complete all required fields.",
            });

            return;
        }

        setIsSubmitting(true);

        setStatus({
            type: "",
            message: "",
        });

        try {
            const response = await submitEnquiry(
                formData,
                pendingAction?.source || "popup"
            );

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                })
            );

            setStatus({
                type: response.already_exists
                    ? "existing"
                    : "success",
                message: response.message,
            });

            setSubmissionComplete(true);
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error.message ||
                    "Unable to submit your enquiry.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    const startNewEnquiry = () => {
        localStorage.removeItem(STORAGE_KEY);

        setFormData(initialFormData);

        setStatus({
            type: "",
            message: "",
        });

        setSubmissionComplete(false);
    };


    const continueAction = () => {
        const action = pendingAction;

        if (!action) {
            closePopup();
            return;
        }

        if (action.type === "call") {
            window.location.href =
                action.url || "tel:8291919189";

            setIsOpen(false);
            return;
        }

        if (action.type === "whatsapp") {
            window.open(
                action.url ||
                    "https://wa.me/918291919189",
                "_blank",
                "noopener,noreferrer"
            );

            setIsOpen(false);
            return;
        }

        if (action.type === "brochure") {
            window.open(
                action.url || "/brochure.pdf",
                "_blank",
                "noopener,noreferrer"
            );

            setIsOpen(false);
            return;
        }

        if (action.sectionId) {
            setIsOpen(false);

            setTimeout(() => {
                const targetSection =
                    document.getElementById(
                        action.sectionId
                    );

                targetSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 150);

            return;
        }

        if (action.url) {
            window.open(
                action.url,
                action.target || "_blank",
                "noopener,noreferrer"
            );

            setIsOpen(false);
            return;
        }

        setIsOpen(false);
    };


    if (!isOpen) {
        return null;
    }


    return (
        <div
            className="popup-overlay"
            onMouseDown={handleOverlayClick}
        >
            <div
                className="popup-shell"
                role="dialog"
                aria-modal="true"
                aria-labelledby="enquiry-popup-title"
            >
                <button
                    type="button"
                    className="popup-close"
                    onClick={closePopup}
                    aria-label="Close enquiry popup"
                >
                    ×
                </button>

                <aside className="popup-visual-panel">
                    <div className="popup-visual-decoration" />

                    <div className="popup-brand">
                        <span className="popup-brand-icon">
                            <FaBuilding />
                        </span>

                        <div>
                            <strong>The Livin</strong>
                            <span>Premium Residences</span>
                        </div>
                    </div>

                    <div className="popup-visual-content">
                        <p className="popup-visual-kicker">
                            Live Beautifully
                        </p>

                        <h3>
                            Your Premium Address in
                            Kalyan West
                        </h3>

                        <p>
                            Thoughtfully designed 1 &amp; 2
                            BHK residences offering modern
                            comfort, connectivity and
                            lifestyle amenities.
                        </p>
                    </div>

                    <div className="popup-benefits">
                        <div>
                            <FaCheckCircle />
                            <span>
                                Premium 1 &amp; 2 BHK Homes
                            </span>
                        </div>

                        <div>
                            <FaMapMarkerAlt />
                            <span>
                                Prime Kon Gaon Location
                            </span>
                        </div>

                        <div>
                            <FaShieldAlt />
                            <span>
                                Secure Project Assistance
                            </span>
                        </div>
                    </div>
                </aside>

                <section className="popup-form-panel">
                    <div className="popup-action-icon">
                        <ActionIcon />
                    </div>

                    <p className="popup-kicker">
                        {currentAction.kicker}
                    </p>

                    <h2 id="enquiry-popup-title">
                        {currentAction.title}
                    </h2>

                    <p className="popup-description">
                        {currentAction.description}
                    </p>

                    {submissionComplete ? (
                        <div
                            className={`popup-result popup-result-${status.type}`}
                        >
                            <span className="popup-result-icon">
                                <FaCheckCircle />
                            </span>

                            <h3>
                                {status.type === "existing"
                                    ? "You’re Already Registered"
                                    : "Enquiry Received"}
                            </h3>

                            <p>{status.message}</p>

                            <div className="popup-result-actions">
                                <button
                                    type="button"
                                    className="popup-submit"
                                    onClick={continueAction}
                                >
                                    <span>
                                        {pendingAction
                                            ? currentAction.buttonLabel
                                            : "Close"}
                                    </span>

                                    <FaArrowRight />
                                </button>

                                <button
                                    type="button"
                                    className="popup-secondary-button"
                                    onClick={startNewEnquiry}
                                >
                                    Use Different Details
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form
                            className="popup-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="popup-field">
                                <label htmlFor="popup-name">
                                    Full Name
                                    <span>*</span>
                                </label>

                                <input
                                    id="popup-name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="popup-form-row">
                                <div className="popup-field">
                                    <label htmlFor="popup-phone">
                                        Phone Number
                                        <span>*</span>
                                    </label>

                                    <input
                                        id="popup-phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="10-digit number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        inputMode="numeric"
                                        autoComplete="tel"
                                        maxLength="10"
                                        required
                                    />
                                </div>

                                <div className="popup-field">
                                    <label htmlFor="popup-email">
                                        Email Address
                                        <span>*</span>
                                    </label>

                                    <input
                                        id="popup-email"
                                        type="email"
                                        name="email"
                                        placeholder="name@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="popup-field">
                                <label htmlFor="popup-message">
                                    Your Requirement
                                    <small>Optional</small>
                                </label>

                                <textarea
                                    id="popup-message"
                                    name="message"
                                    rows="3"
                                    placeholder="Tell us about your preferred home or site visit..."
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            {status.message && (
                                <p
                                    className={`popup-status popup-status-${status.type}`}
                                    role="alert"
                                >
                                    {status.message}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="popup-submit"
                                disabled={isSubmitting}
                            >
                                <span>
                                    {isSubmitting
                                        ? "Submitting..."
                                        : "Register Your Interest"}
                                </span>

                                {!isSubmitting && (
                                    <FaArrowRight />
                                )}
                            </button>

                            <p className="popup-privacy">
                                <FaShieldAlt />

                                <span>
                                    Your details are secure and
                                    will only be used for project
                                    communication.
                                </span>
                            </p>
                        </form>
                    )}
                </section>
            </div>
        </div>
    );
}


export default EnquiryPopup;
