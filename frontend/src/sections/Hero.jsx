import "../styles/hero.css";

function Hero() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const enquiry = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
        };

        console.log("Enquiry submitted:", enquiry);

        alert(
            "Thank you for your enquiry. Our project advisor will contact you shortly."
        );

        form.reset();
    };

    return (
        <section id="home" className="hero">
            <div className="hero-overlay" />

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
                        <a href="#overview" className="primary-button">
                            Explore Project
                        </a>

                        <a
                            href="/brochure.pdf"
                            download
                            className="secondary-button"
                        >
                            Download Brochure
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
                        >
                            Request a Callback
                        </button>
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