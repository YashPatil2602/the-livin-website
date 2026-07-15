import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "Overview", href: "#overview" },
        { name: "Amenities", href: "#amenities" },
        { name: "Floor Plans", href: "#floor-plans" },
        { name: "Gallery", href: "#gallery" },
        { name: "Location", href: "#location" }
    ];

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return ( <
        header className = "navbar" >
        <
        div className = "navbar-container" >
        <
        a href = "#home"
        className = "navbar-logo" >
        <
        span > THE < /span>
        LIVIN <
        /a>

        <
        nav className = { navbar - menu $ { menuOpen ? "active" : "" } } > {
            links.map((link) => ( <
                a key = { link.name }
                href = { link.href }
                onClick = { closeMenu } > { link.name } <
                /a>
            ))
        }

        <
        a href = "/brochure.pdf"
        download className = "mobile-brochure-button"
        onClick = { closeMenu } >
        Download Brochure <
        /a> < /
        nav >

        <
        a href = "/brochure.pdf"
        download className = "desktop-brochure-button" >
        Download Brochure <
        /a>

        <
        button type = "button"
        className = "navbar-toggle"
        aria - label = "Toggle navigation menu"
        onClick = {
            () => setMenuOpen((previous) => !previous)
        } > { menuOpen ? < FaTimes / > : < FaBars / > } <
        /button> < /
        div > <
        /header>
    );
}

export default Navbar;