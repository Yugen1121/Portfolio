import { DyClass } from "../../Helper/DyClass";
import { useEffect, useState } from "react";
import "../../App.css"

const drawerWidth = 240;

function NavBar({Sections}: {Sections: Record<string, string>}) {

    const [menue, updateMenue] = useState(false)

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

    // Used to toggle the menue
    const handleMenueToggle = ()=>{
        updateMenue(prev=>!prev)
        console.log(menue)
    }
    

    const Menue = ()=> <>
            <div className="absolute z-10 top-full right-10 w-40">
                <ul className={
                DyClass("gap-3", "p-[8px] pl-[12px]")
            }>
                {Object.keys(Sections).map((i)=>(
                    <li  key={i} >
                        <button className="navButton Focus p-[12px]" onClick={()=>onClickNav(i)}>
                            <h4>
                            {Sections[i]}
                            </h4>
                        </button>
                        </li>
                ))}
                </ul>
            </div>
    </>
    
    return <>
    <div className="Nav1 flex w-screen justify-end fixed z-1000">
        <ul className={
            DyClass(((width<640)? "hidden": "flex flex-row gap-3"), "p-[8px] pl-[12px]")
        }>
            {Object.keys(Sections).map((i)=>(
                <li  key={i} >
                    <button className="navButton Focus p-[12px]" onClick={()=>onClickNav(i)}>
                        <h4>
                        {Sections[i]}
                        </h4>
                    </button>
                    </li>
            ))}
        </ul>
        <div className={
            DyClass(((width>640) && "hidden"), "relative p-[8px] pl-[12px]")
        }>
            <button onClick={handleMenueToggle} className="relative z-20">Menue</button>
            {menue && <Menue/>}
        </div>
            

    </div>

    </>
    }

    export default NavBar;