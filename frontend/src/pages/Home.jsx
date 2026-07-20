import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import EnquiryPopup from "../components/common/EnquiryPopup";
import FloatingContact from "../components/common/FloatingContact";

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

            <EnquiryPopup />

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

            <FloatingContact />
        </>
    );
}

export default Home;