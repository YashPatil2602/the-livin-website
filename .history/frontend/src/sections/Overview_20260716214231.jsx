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
        div className = "overview-container" >
        <
        div className = "overview-image-wrapper" >
        <
        img src = "/images/banners/hero-mobile.png"
        alt = "The Livin residential tower"
        className = "overview-image" /
        >

        <
        div className = "overview-badge" >
        <
        strong > { "1 & 2 BHK" } < /strong> <
        span > Premium Residences < /span> <
        /div> <
        /div>

        <
        div className = "overview-content" >
        <
        p className = "overview-kicker" >
        Discover the Project <
        /p>

        <
        h2 > Welcome to The Livin < /h2>

        <
        p className = "overview-introduction" >
        The Livin is a thoughtfully designed residential development created
        for families seeking comfort,
        convenience and an elevated lifestyle in Kalyan West. <
        /p>

        <
        p className = "overview-description" >
        The project combines contemporary architecture,
        functional home layouts and lifestyle amenities to create a comfortable modern living experience. <
        /p>

        <
        ul className = "overview-feature-list" > {
            features.map((feature) => ( <
                li key = { feature } >
                <
                span className = "overview-check" > ✓ < /span> <
                span > { feature } < /span> <
                /li>
            ))
        } <
        /ul>

        <
        a href = "#amenities"
        className = "overview-button" >
        Explore Amenities <
        /a> <
        /div> <
        /div> <
        /section>
    );
}

export default Overview