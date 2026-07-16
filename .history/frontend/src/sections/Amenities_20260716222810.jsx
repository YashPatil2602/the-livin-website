const amenities = [{
        id: 1,
        title: "Fitness Centre",
        description: "A modern fitness space designed for an active and healthy lifestyle.",
        image: "/images/amenities/gym.jpg",
    },
    {
        id: 2,
        title: "Yoga Deck",
        description: "A peaceful open space designed for yoga, meditation and relaxation.",
        image: "/images/amenities/yoga-deck.jpg",
    },
    {
        id: 3,
        title: "Rooftop Recreation",
        description: "An attractive rooftop space for relaxation and leisure activities.",
        image: "/images/amenities/rooftop.jpg",
    },
    {
        id: 4,
        title: "Children's Play Area",
        description: "A colourful and secure recreational space created for children.",
        image: "/images/amenities/kids-play-area.jpg",
    },
    {
        id: 5,
        title: "Indoor Games",
        description: "A dedicated indoor games area for entertainment and recreation.",
        image: "/images/amenities/indoor-games.jpg",
    },
];

function Amenities() {
    return ( <
        section id = "amenities"
        className = "amenities-section" >
        <
        div className = "amenities-container" >
        <
        div className = "amenities-heading" >
        <
        p className = "amenities-kicker" >
        Lifestyle Amenities <
        /p>

        <
        h2 > Designed
        for Better Living < /h2>

        <
        p >
        Enjoy thoughtfully planned spaces
        for fitness,
        relaxation, recreation and quality family time. <
        /p> <
        /div>

        <
        div className = "amenities-grid" > {
            amenities.map((amenity) => ( <
                article key = { amenity.id }
                className = "amenity-card" >
                <
                div className = "amenity-image-wrapper" >
                <
                img src = { amenity.image }
                alt = { amenity.title }
                className = "amenity-image" /
                >

                <
                div className = "amenity-image-overlay" / >
                <
                /div>

                <
                div className = "amenity-content" >
                <
                span className = "amenity-number" > { String(amenity.id).padStart(2, "0") } <
                /span>

                <
                h3 > { amenity.title } < /h3> <
                p > { amenity.description } < /p> <
                /div> <
                /article>
            ))
        } <
        /div> <
        /div> <
        /section>
    );
}

export default Amenities;