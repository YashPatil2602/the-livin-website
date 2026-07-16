import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import Overview from "../sections/Overview";
import Highlights from "../sections/Highlights";
import Amenities from "../sections/Amenities";
import FloorPlans from "../sections/FloorPlans";
import Gallery from "../sections/Gallery";
import Location from "../sections/Location";
import Contact from "../sections/Contact";

import "../styles/sections.css";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Overview />
                <Highlights />
                <Amenities />
                <FloorPlans />
                <Gallery />
                <Location />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default Home;
