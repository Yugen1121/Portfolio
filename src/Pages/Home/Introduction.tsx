import { useLayoutEffect, useRef } from "react";
import "../../App.css"
import DivBox from "../Components/divBox";
import gsap from "gsap";

function Introduction(){
    const focusRef = useRef<HTMLAnchorElement | null>(null)

    useLayoutEffect(()=>{
        if (!focusRef.current) return;
        
        gsap.to(focusRef.current, {
            

            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
        })
    }, [])
    return <>

            
                <div className="text-[var(--color-10 Focus Highlight LText">
                        Yugen Limbu
                </div>
               
                <div className="Focus sm:text-2xl md:text-3xl lg:text-4xl text-2xl text-[var(--color-3)]">
                    Software Developer | CS student 
                </div>
                <div className="flex justify-center items] flex-wrap p-6 gap-3">
                    
                    
                    <a ref={focusRef} className="sCard Focus" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yugen-limbu-aa869b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <i className="fa fa-linkedin-square"></i>   
                        LinkedIn
                    </a>
                    
                    
                    <a className="sCard Focus" target="_blank"  rel="noopener noreferrer" href="https://github.com/Yugen1121">
                        <i className="fa fa-github"></i>
                        GitHub
                    </a>
                    
                    
                    <a className="sCard Focus" href="mailto:yugenlimbu777@gamil.com">
                        <i className="fa fa-envelope"></i>
                        Gmail
                    </a>
                    
                </div>

    
    </>
}

export default Introduction;