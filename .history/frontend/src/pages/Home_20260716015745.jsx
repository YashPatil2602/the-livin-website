 import "../../styles/hero.css";

 function Hero() {
     const handleSubmit = (event) => {
         event.preventDefault();

         const form = event.currentTarget;
         const formData = new FormData(form);

         const enquiry = {
             name: formData.get("name"),
             phone: formData.get("phone"),
             email: formData.get("email")
         };

         console.log("Enquiry submitted: - Home.jsx:16", enquiry);

         alert(
             "Thank you for your enquiry. Our project advisor will contact you shortly."
         );

         form.reset();
     };

     return ( <
             section id = "home"
             className = "hero" >
             <
             div className = "hero-overlay" / >

             <
             div className = "hero-container" >
             <
             div className = "hero-content" > …[1: 56 am, 16 / 7 / 2026] Pooja Di: import Navbar from "../components/layout/Navbar";
             import Hero from "../sections/Hero";

             function Home() {
                 return ( <
                     >
                     <
                     Navbar / >

                     <
                     main >
                     <
                     Hero / >

                     <
                     section id = "overview"
                     className = "overview-placeholder" >
                     <
                     div className = "section-container" >
                     <
                     p className = "section-eyebrow" >
                     DISCOVER THE PROJECT <
                     /p>

                     <
                     h2 > Welcome to The Livin < /h2>

                     <
                     p >
                     A premium residential development offering thoughtfully designed homes, lifestyle amenities and excellent connectivity in
                     Kalyan West. <
                     /p> <
                     /div> <
                     /section> <
                     /main> <
                     />
                 );
             }

             export default Home;