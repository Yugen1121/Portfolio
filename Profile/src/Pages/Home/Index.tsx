import { DyClass } from "../../Helper/DyClass";
import "../../App.css"
import gsap from "gsap/all"
import ModifiersPlugin from "gsap/all"
import Whale from "../../assets/FloatingWhale.png"
import Koi from "../../assets/TwoKoi.png"
import Sun from "../../assets/Sun.png"
import Cat from "../../assets/PeakingCat.png"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ModifiersPlugin);
function Home(){

    const whaleRef = useRef(null);
    const koiRef = useRef(null);
    const sunRef = useRef(null);
    const catRef = useRef(null);
    const navigator = useNavigate();

    // When the Python project is clicked shows all the python projects
    const handleOnClickPython = ()=>{
        navigator("/Python");
    }

    // When the react project is clicked it directa to the 
    const handleOnClickReact = ()=>{
        navigator("/React");
    }

    // When the java project is clicked it directs to the route /java
    const handelOnClickJava = ()=>{
        navigator("/Java");
    }

    // Main menue page
    const p1 = <>
        <ul>
        <li onClick={handleOnClickPython}><i className="fa-brands fa-python text-6xl"></i>Python projects</li>
        <li onClick={handleOnClickReact}><i className="fa-brands fa-react text-6xl" ></i>React projects</li>
        <li onClick={handelOnClickJava}><i className="fa-brands fa-java text-6xl"></i>Java projects</li>
        <li>Certificates</li>
        <hr></hr>
        <li>Harvard CS50x</li>
        </ul>
    </>

    const [menue, updateMenue]= useState(p1)

    useEffect(()=>{
        gsap.to(whaleRef.current, {
            x: window.innerWidth,
            duration: 15,
            ease: "none",
            repeat: -1,
            
        })
        gsap.to(whaleRef.current,{
            rotate: -30,
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })

        gsap.to(koiRef.current, {
            rotate: "-=360",
            duration: 6,
            repeat: -1,
            ease: "none",
            
        })

        gsap.to(sunRef.current, {
            rotate: "+=360",
            duration: 8,
            repeat: -1,
            ease: "none",
        })

        gsap.to(".card", {
            boxShadow: "0px 0px 20px #978942",
            duration: 2,
            ease: "none",
            repeat: -1,
            yoyo: true
        })
    }, [])

    
    
    return <>
        <div
            className={
                DyClass("relative h-[100vh] w-[100vw] Hl1 z-0")
            }
        >
            <div className="relative z-20">
                <img ref={whaleRef} src={Whale} className={DyClass("absolute left-[-8rem] w-[8rem] Shadow")}/>
                <div>

                </div>
                
            </div>

            

            <div className="absolute z-40 w-screen h-screen flex justify-center items-center">
                <img ref={catRef} src={Cat} className="absolute " />
                <img ref={sunRef} src={Sun} className="absolute rotate-[30deg]"/>
                <img src={Sun} className="absolute "/>
            </div>

            <div className="absolute z-50 h-screen w-screen flex flex-wrap">
                <div className="flex-[1_0_400px] flex justify-center items-center flex-col ">
                        <div className="w-[25vw]">
                            <h2>
                                Yugen Limbu
                            </h2>
                            <ul>
                                <li><h1>Undergrad student</h1></li>
                                <hr></hr>
                                <li>Computer science specialziing in software engineering.</li>
                                <li><div className="flex">
                                    <div>Frontened</div>
                                    <div>Backened</div> 
                                    </div></li>
                            </ul>
                        </div>
                
                </div>
                <div className=" flex-[1_0_300px]  flex justify-center items-center ">
                    <div className="">
                        <h3>
                            Experience
                        </h3>
                        <div className={
                        DyClass("card overflow-y-scroll overflow-x-hidden")
                    }>
                        <h3>
                            {menue}
                        </h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        
    </>
}

export default Home;