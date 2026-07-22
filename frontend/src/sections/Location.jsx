import { openEnquiryPopup } from "../utils/enquiryPopup";

﻿const locationHighlights = [
    {
        id: 1,
        title: "Connected Location",
        description:
            "Located in Kon Gaon, Kalyan West with convenient access to Kalyan-Bhiwandi Road.",
    },
    {
        id: 2,
        title: "Everyday Convenience",
        description:
            "Schools, hospitals, shopping destinations and daily essentials are available in the surrounding area.",
    },
    {
        id: 3,
        title: "Growing Infrastructure",
        description:
            "The neighbourhood benefits from developing road and public-transport connectivity.",
    },
];

function Location() {
    const handleMapClick = (event) => {
        event.preventDefault();

        openEnquiryPopup({
            type: "location",
            source: "location-google-maps",
            url: "https://maps.app.goo.gl/rz7yRhMNLx2KFBG29",
            target: "_blank",
        });
    };


    return (
        <section id="location" className="location-section">
            <div className="location-container">
                <div className="location-content">
                    <p className="location-kicker">
                        Well Connected
                    </p>

                    <h2>A Location That Keeps You Connected</h2>

                    <p className="location-introduction">
                        The Livin offers a convenient residential address in
                        Kon Gaon, Kalyan West, providing access to important
                        roads and everyday facilities.
                    </p>

                    <div className="location-address">
                        <span>Project Address</span>

                        <p>
                            Opp. Janki Ram Mandir and Shiv Mandir, near
                            Ceremony Banquet Hall and Shitala Mata Mandir,
                            Kalyan-Bhiwandi Road, Kon Gaon, Kalyan West.
                        </p>
                    </div>

                    <div className="location-highlights">
                        {locationHighlights.map((item) => (
                            <article
                                key={item.id}
                                className="location-highlight"
                            >
                                <span>
                                    {String(item.id).padStart(2, "0")}
                                </span>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <a
                        href="https://maps.app.goo.gl/rz7yRhMNLx2KFBG29"
                        target="_blank"
                        rel="noreferrer"
                        className="location-button"
                        onClick={handleMapClick}
                    >
                        Open in Google Maps
                    </a>
                </div>

                <div className="location-map-wrapper">
                    <iframe
                        title="The Livin project location"
                        src="https://www.google.com/maps?q=Kon+Gaon+Kalyan+West&output=embed"
                        className="location-map"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <div className="location-map-card">
                        <span>The Livin</span>
                        <strong>Kon Gaon, Kalyan West</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;
