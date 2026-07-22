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
            url: "https://www.google.com/maps/place/1+Bhk+%26+2+Bhk+in+Kalyan/@19.2450653,73.1119457,17z/data=!4m16!1m9!3m8!1s0x3be795e12b5bc395:0xcf6c345e0d0cd578!2s1+Bhk+%26+2+Bhk+in+Kalyan!8m2!3d19.2450653!4d73.1119457!9m1!1b1!16s%2Fg%2F11kpsvr17w!3m5!1s0x3be795e12b5bc395:0xcf6c345e0d0cd578!8m2!3d19.2450653!4d73.1119457!16s%2Fg%2F11kpsvr17w!18m1!1e1",
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
                        href="https://www.google.com/maps/place/1+Bhk+%26+2+Bhk+in+Kalyan/@19.2450653,73.1119457,17z/data=!4m16!1m9!3m8!1s0x3be795e12b5bc395:0xcf6c345e0d0cd578!2s1+Bhk+%26+2+Bhk+in+Kalyan!8m2!3d19.2450653!4d73.1119457!9m1!1b1!16s%2Fg%2F11kpsvr17w!3m5!1s0x3be795e12b5bc395:0xcf6c345e0d0cd578!8m2!3d19.2450653!4d73.1119457!16s%2Fg%2F11kpsvr17w!18m1!1e1"
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
                        src="https://www.google.com/maps?q=19.2450653,73.1119457&z=17&output=embed"
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
