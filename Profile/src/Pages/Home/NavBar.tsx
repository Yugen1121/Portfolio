import { DyClass } from "../../Helper/DyClass";
import { useEffect, useState } from "react";
import "../../App.css"

const drawerWidth = 240;

function NavBar({Sections}: {Sections: Record<string, string>}) {

    

    const [width, updateWidth] = useState(window.innerWidth)

    

    useEffect(()=>{
        const onWidthChange = ()=>{
        updateWidth(window.innerWidth);
    }

        window.addEventListener("resize", onWidthChange);
        return ()=> window.removeEventListener("resize", onWidthChange)
    },[])
    

    // Used to nav through the page
    const onClickNav = (id: string)=>{
        const section = document.getElementById(id);
        if (section){
            section.scrollIntoView({behavior: "smooth"})
        }
    }
    
    
    const drawer = <>
        <div className={
            DyClass("h-screen fixed")
        }>

        </div>
    </>
    
    return <>
    <div className="flex w-screen justify-end fixed z-1000">
        <div className={
            DyClass(((width<640)? "hidden": "flex"), "p-[8px] pl-[12px]")
        }>
            {Object.keys(Sections).map((i)=>(
                <button  key={i} className="navButton p-[12px]" onClick={()=>onClickNav(i)}>{Sections[i]}</button>
            ))}
        </div>
        <div className={
            DyClass(((width<640)? "flex": "hidden"), "p-[8px] pl-[12px]")
        }>
            <button>Menue</button>
        </div>
        <div>
            {drawer}
        </div>
    </div>

    </>
    }

    export default NavBar;