import { DyClass } from "../../Helper/DyClass";
import "../../App.css"
import gsap from "gsap/all"
import ModifiersPlugin from "gsap/all"
import Whale from "../../assets/FloatingWhale.png"
import Koi from "../../assets/TwoKoi.png"
import Sun from "../../assets/Sun.png"
import { useEffect, useRef } from "react";
import Cat from "../../assets/PeakingCat.png"
import Clouds from "../../assets/Clouds.png"

gsap.registerPlugin(ModifiersPlugin);
function Home(){

    const whaleRef = useRef(null);
    const koiRef = useRef(null);
    const sunRef = useRef(null);
    const catRef = useRef(null);

    useEffect(()=>{
        gsap.to(whaleRef.current, {
            x: window.innerWidth+300,
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
                DyClass("relative h-screen w-screen Hl1 z-0")
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

            <div className="absolute z-50 h-screen w-screen flex">
                <div className="flex-1 flex justify-center items-center flex-col ">
                        <div className="w-[25vw]">
                            <h2>
                                Yugen Limbu
                            </h2>
                            <ul>
                                <li><h1 className="">Undergrad student</h1></li>
                                <hr></hr>
                                <li>Computer science specialziing in software engineering.</li>
                            </ul>
                        </div>
                
                </div>
                <div className=" flex-1 flex justify-center items-center ">
                    <div>
                        <h3>
                            About me 
                        </h3>
                        <div className={
                        DyClass("card")
                    }>
                        <h3>
                            Hello hi bye
                        </h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        
    </>
}

export default Home;