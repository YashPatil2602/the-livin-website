import { FaCheckCircle } from "react-icons/fa";

function Overview() {
    const features = [
        "Thoughtfully designed 1 and 2 BHK residences",
        "Modern architecture with natural light and ventilation",
        "Lifestyle amenities for fitness and recreation",
        "Convenient location in Kalyan West",
    ];

    return ( <
        section id = "overview"
        className = "overview-section" >
        <
        div className = "container overview-grid" >
        <
        div className = "overview-image-wrapper" >
        <
        img src = "/images/banners/hero-mobile.png"
        alt = "The Livin residential tower"
        className = "overview-image" /
        >

        <
        div className = "overview-image-badge" >
        <
        strong > { "1 & 2 BHK" } < /strong> <
        span > Premium Residences < /span> <
        /div> <
        /div>

        <
        div className = "overview-content" >
        <
        p className = "section-kicker" >
        DISCOVER THE PROJECT <
        /p>

        <
        h2 > Welcome to The Livin < /h2>

        <
        p className = "overview-introduction" >
        The Livin is a thoughtfully designed residential development created
        for families looking
        for comfort,
        convenience and an elevated lifestyle in Kalyan West. <
        /p>

        <
        p className = "overview-description" >
        The project offers modern residences with functional layouts, lifestyle amenities and well - planned common spaces.Every detail is designed to provide residents with a comfortable and contemporary living experience. <
        /p>

        <
        ul className = "overview-feature-list" > {
            features.map((feature) => ( <
                li key = { feature } >
                <
                FaCheckCircle / >
                <
                span > { feature } < /span> <
                /li>
            ))
        } <
        /ul>

        <
        a href = "#amenities"
        className = "section-button" >
        Explore Amenities <
        /a> <
        /div> <
        /div> <
        /section>
    );
}

export default Overview