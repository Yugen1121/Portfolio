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

            
                <div className="text-[var(--color-10)]">
                    <h3>Hi, my name is</h3>
                    <span className="Focus Highlight LText">
                        Yugen Limbu
                    </span>
                </div>
               
                <h2 className="Focus text-[var(--color-3)]">
                    Software Developer | CS student 
                </h2>
                <div className="flex flex-wrap p-6 gap-3">
                    
                    
                    <a ref={focusRef} className="sCard Focus" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yugen-limbu-aa869b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <i className="fa fa-linkedin-square"></i>   
                        LinkedIn
                    </a>
                    
                    
                    <a className="sCard Focus" target="_blank"  rel="noopener noreferrer" href="https://github.com/Yugen1121">
                        <i className="fa fa-github"></i>
                        GitHub
                    </a>
                    
                    
                    <a className="sCard Focus" href="mailto:yugenlimbu777@2gamil.com">
                        <i className="fa fa-envelope"></i>
                        Gmail
                    </a>
                    
                </div>

    
    </>
}

export default Introduction;