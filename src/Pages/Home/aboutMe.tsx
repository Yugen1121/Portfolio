import img from "../../assets/PFP.png"

import { DyClass } from "../../Helper/DyClass"
import "../../App.css"
import { useEffect, useRef} from "react"
export default function AboutMe(){
    //<img src={noImg} className="w-[50%] h-[50%]"/>
    const imgRef = useRef<HTMLImageElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        
            const x = bgRef.current;
            const y = imgRef.current;
            if (!y || !x)return;

            const handleResize = ()=>{
                if (x.offsetWidth > x.offsetHeight){
                    y.style.width = "50%";
                    y.style.height= "auto";
                }
                else {
                    y.style.height = "50%";
                    y.style.width= "auto";
                }
            }

            handleResize(); 
            window.addEventListener("resize", handleResize)
            return ()=>window.removeEventListener("resize", handleResize);
    }, [])
    return <>
                <div ref={bgRef} className="pfp absolute z-10 w-full h-full">
                    <img ref={imgRef} src={img}/>
                </div>
                <div className="absolute z-20 AboutLayout1 w-full h-full">
                    <div className="flex-1"></div>
                    <div className="AboutContainer flex-1">
                        <div className={
                            DyClass("mx-atuo text-8xl text-[var(--color-9)]")}>

                            <span className="font-bold">About</span>
                                 <span className="text-red-700">Me</span>
                        </div>
                        <div className="flex items-center flex-col mb-8">
                            <p  className="inline-block md:text-4xl text-2xl m-3 bg-[var(--color-4)]">
                                I'am an aspiring <span className="Focus text-red-700">Software Engineer</span> pursuing
                                 Bsc in Computer science specializing on Software Engineering at St Marys University.
                            </p>
                            <p className="inline-block md:text-4xl text-2xl m-3 bg-[var(--color-4)]">
                                Passionate about building efficient, scalable, and user-centered applications, I constantly explore new technologies and methodologies to enhance my skills and deliver exceptional software solutions.
                            </p>

                            
                        </div>
                        <div className="w-full flex felx flex-wrap gap-4">
                            <div>
                                <div className="bg-[var(--color-4)]">
                                    <a href="" target="_blank" rel="noopener noreferrer">London, UK</a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[var(--color-4)]">
                                    <a target="_blank" rel="noopener noreferrer" href="">St Mary's University</a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[var(--color-4)]">
                                    <a target="_blank" rel="noopener noreferrer" href="">BSc Computer Science</a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[var(--color-4)]">
                                    <a target="_blank" rel="noopener noreferrer" href="">Software Development</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
    </>
}