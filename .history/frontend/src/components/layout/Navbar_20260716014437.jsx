{\
    rtf1\ ansi\ ansicpg1252\ cocoartf2870\ cocoatextscaling0\ cocoaplatform0 {\ fonttbl\ f0\ froman\ fcharset0 Times - Roman; } {\
        colortbl;\
        red255\ green255\ blue255;\
        red0\ green0\ blue0;
    } {\ * \expandedcolortbl;;\
        cssrgb\ c0\ c0\ c0;
    }\
    paperw11900\ paperh16840\ margl1440\ margr1440\ vieww34000\ viewh18300\ viewkind0\ deftab720\ pard\ pardeftab720\ partightenfactor0

    \ f0\ fs24\ cf0\ expnd0\ expndtw0\ kerning0\ outl0\ strokewidth0\ strokec2
    import\ { useState\ } from "react";\
    import\ { FaBars, FaTimes\ } from "react-icons/fa";\
    import "../../styles/navbar.css";\\
    function Navbar()\ {\
        const [menuOpen, setMenuOpen] = useState(false);\\
        const links = [\\{ name: "Home", href: "#home"\ }, \\ { name: "Overview", href: "#overview"\ }, \\ { name: "Amenities", href: "#amenities"\ }, \\ { name: "Floor Plans", href: "#floor-plans"\ }, \\ { name: "Gallery", href: "#gallery"\ }, \\ { name: "Location", href: "#location"\ }\];\\
        const closeMenu = () => \{\
            setMenuOpen(false);\\
        };\\
        return (\ <
            header className = "navbar" > \
            <
            div className = "navbar-container" > \
            <
            a href = "#home"
            className = "navbar-logo" > \
            <
            span > THE < /span>\
            LIVIN\ <
            /a>\\ <
            nav className = \ { `navbar-menu $\{menuOpen ? "active" : ""\}`\ } > \\{
                links.map((link) => (\ <
                    a\ key = \ { link.name\ }\
                    href = \ { link.href\ }\
                    onClick = \ { closeMenu\ }\ > \\{ link.name\ }\ <
                    /a>\
                ))\
            }\\ <
            a\ href = "/brochure.pdf"\
            download\ className = "mobile-brochure-button"\
            onClick = \ { closeMenu\ }\ > \
            Download Brochure\ <
            /a>\ < /
            nav > \\ <
            a\ href = "/brochure.pdf"\
            download\ className = "desktop-brochure-button"\ > \
            Download Brochure\ <
            /a>\\ <
            button\ type = "button"\
            className = "navbar-toggle"\
            aria - label = "Toggle navigation menu"\
            onClick = \ {
                () => setMenuOpen((previous) => !previous)\
            }\ > \\{ menuOpen ? < FaTimes / > : < FaBars / > \ }\ <
            /button>\ < /
            div > \ <
            /header>\
        );\\
    }\\
    export default Navbar;
}