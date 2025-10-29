import Tag from "../Components/SkillHighlighter"
import "../../App.css"
import bg1 from "../../assets/orchids.png"
import Python from "../../assets/Python.png"
import Orchid from "../../assets/orchids.png"
import DivBox from "../Components/divBox"
export default function Skills(){
    const skills = ["TypeScript", "JacaScript", "Java", "Python", "Flask", "Django", "Frontened", "Backened", "React"]

    return <>
        
            <h1 className="Highlight red">SKILLS</h1>
            <div className="w-[70%]">
                <ul className="flex flex-row none justify-center gap-4 flex-wrap">
                    {skills.map((e, i)=>(
                        <DivBox key={i} style="border-0 px-4 py-2">{e}</DivBox>
                    )
                    )}
                </ul>
            </div>
                
    </>
}