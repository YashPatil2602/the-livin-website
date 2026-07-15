function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigationLinks = [{
            id: 1,
            name: "Home",
            href: "#home"
        },
        {
            id: 2,
            name: "Overview",
            href: "#overview"
        },
        {
            id: 3,
            name: "Amenities",
            href: "#amenities"
        },
        {
            id: 4,
            name: "Floor Plans",
            href: "#floor-plans"
        },
        {
            id: 5,
            name: "Gallery",
            href: "#gallery"
        },
        {
            id: 6,
            name: "Location",
            href: "#location"
        }
    ];

    const toggleMenu = () => {
        setMenuOpen((previousState) => !previousState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return ( <
        header className = "navbar" >
        <
        div className = "navbar-container" >
        <
        a href = "#home"
        className = "navbar-logo"
        onClick = { closeMenu } >
        <
        span > THE < /span>
        LIVIN <
        /a>

        <
        nav className = { `navbar-menu ${
                        menuOpen ? "active" : ""
                    }` } >
        {
            navigationLinks.map((link) => ( <
                a key = { link.id }
                href = { link.href }
                onClick = { closeMenu } >
                { link.name } <
                /a>
            ))
        }

        <
        a href = "/brochure.pdf"
        download className = "mobile-brochure-button"
        onClick = { closeMenu } >
        Download Brochure <
        /a> <
        /nav>

        <
        a href = "/brochure.pdf"
        download className = "desktop-brochure-button" >
        Download Brochure <
        /a>

        <
        button type = "button"
        className = "navbar-toggle"
        aria - label = "Toggle navigation menu"
        aria - expanded = { menuOpen }
        onClick = { toggleMenu } >
        { menuOpen ? < FaTimes / > : < FaBars / > } <
        /button> <
        /div> <
        /header>
    );
}

export default Navbar;