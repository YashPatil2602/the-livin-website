import {
    FaBuilding,
    FaDumbbell,
    FaHome,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Highlights() {
    const highlights = [{
            id: 1,
            icon: < FaBuilding / > ,
            title: "Boutique Twin Towers",
            description: "A distinctive residential development featuring contemporary architecture and thoughtfully planned spaces.",
        },
        {
            id: 2,
            icon: < FaHome / > ,
            title: "1 & 2 BHK Homes",
            description: "Comfortable and functional residences designed for the needs of modern families.",
        },
        {
            id: 3,
            icon: < FaDumbbell / > ,
            title: "Lifestyle Amenities",
            description: "Dedicated spaces for fitness, recreation, relaxation and quality family time.",
        },
        {
            id: 4,
            icon: < FaMapMarkerAlt / > ,
            title: "Kalyan West",
            description: "A convenient location with access to important transport links and everyday facilities.",
        },
    ];

    return ( <
        section id = "highlights"
        className = "highlights-section" >
        <
        div className = "highlights-container" >
        <
        div className = "highlights-heading" >
        <
        p className = "highlights-kicker" >
        Project Highlights <
        /p>

        <
        h2 > Everything You Need
        for Better Living < /h2>

        <
        p >
        Modern residences, lifestyle amenities and convenient connectivity come together at The Livin. <
        /p> < /
        div >

        <
        div className = "highlights-grid" > {
            highlights.map((highlight) => ( <
                article key = { highlight.id }
                className = "highlight-card" >
                <
                span className = "highlight-number" > { String(highlight.id).padStart(2, "0") } <
                /span>

                <
                div className = "highlight-icon" > { highlight.icon } <
                /div>

                <
                h3 > { highlight.title } < /h3>

                <
                p > { highlight.description } < /p> < /
                article >
            ))
        } <
        /div> < /
        div > <
        /section>
    );
}

export default Highlights;