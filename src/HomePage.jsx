import React from "react";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Navigation from "./Navigation";



 function HomePage() {
    return(
        <>

                <Navigation/>
                
                <LandingPage/>
                <About/>
                <Projects/>
                <Contact/>
         
        </>
    );
}
export default HomePage;