import {
    FaBuilding,
    FaDumbbell,
    FaHome,
    FaMapMarkerAlt,
}
from "react-icons/fa";

function Highlights() {
    const highlights = [{
            id: 1,
            icon: < FaBuilding / > ,
            title: "Boutique Twin Towers",
            description: "A distinctive residential development with contemporary architecture.",
        },
        {
            id: 2,
            icon: < FaHome / > ,
            title: "1 & 2 BHK Homes",
            description: "Thoughtfully planned residences designed for modern families.",
        },
        {
            id: 3,
            icon: < FaDumbbell / > ,
            title: "Lifestyle Amenities",
            description: "Dedicated spaces for fitness, recreation, relaxation and family time.",
        },
        {
            id: 4,
            icon: < FaMapMarkerAlt / > ,
            title: "Kalyan West",
            description: "A well-connected location with access to important daily conveniences.",
        },
    ];

    return ( <
        section className = "highlights-section" >
        <
        div className = "container" >
        <
        div className = "section-heading" >
        <
        p className = "section-kicker" > PROJECT HIGHLIGHTS < /p>

        <
        h2 > Everything You Need
        for Better Living < /h2>

        <
        p >
        Discover a residential experience that combines modern homes, useful amenities and everyday convenience. <
        /p> < /
        div >

        <
        div className = "highlights-grid" > {
            highlights.map((highlight) => ( <
                article key = { highlight.id }
                className = "highlight-card" >
                <
                div className = "highlight-number" > { String(highlight.id).padStart(2, "0") } <
                /div>

                <
                div className = "highlight-icon" > { highlight.icon } <
                /div>

                <
                h3 > { highlight.title } < /h3> <
                p > { highlight.description } < /p> < /
                article >
            ))
        } <
        /div> < /
        div > <
        /section>
    );
}

export default Highligh