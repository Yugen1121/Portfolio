import { DyClass } from "../../Helper/DyClass";
import "../../App.css"
import gsap from "gsap/all"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";

function Home(){
    // NavBar
    const Nav = {
        "About": "About",
        "Projects": "Projects",
        "Skills": "Skills"
    }

    return <>
    <NavBar Sections={Nav} />
    <div id="Home" className="ScreenSize flex justify-center flex-col items-center">

        <Introduction />
        
    </div>
    <div id="About" className="ScreenSize Center">
    </div>
    </>
}

export default Home;