import { DyClass } from "../../Helper/DyClass";
import "../../App.css"
import gsap from "gsap/all"
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";
import Ripples from "../Ripples";
import Footer from "./Footer"
import AboutMe from "./aboutMe";



    
function Home(){
    const bg1Ref = useRef(null);

    // NavBar
    const Nav = {
        "About": "About me",
        "Projects": "Projects",
        "Skills": "Skills"
    }



    return <>
            <NavBar Sections={Nav}/>
            <section ref={bg1Ref} className="ScreenSize relative bg1 flex justify-center flex-col items-center">


                <div className="absoulte z-100 flex justify-center flex-col items-center"><Introduction /></div>
                
            </section>
            <section id="About"  className="relative ScreenSize bg2 justify-center items-center flex ">
                <AboutMe />
            </section>
            <section id="Projects" className={
                DyClass("relative  z-[0] \
                max-w-screen min-w-screen flex \
                justify-center flex-col items-center bg-[var(--color-3)] \
                pb-20 min-h-screen")}>
                
                <Projects />
                
                
                
            </section>
            <section id="Skills" className="bg1 flex flex-wrap justify-center flex-col items-center py-20">
                    <Skills />
            </section>
            <hr></hr>
            <Footer/>
    </>
}

export default Home;