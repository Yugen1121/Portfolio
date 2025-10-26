import type { HtmlHTMLAttributes } from "react";
import { DyClass } from "../../Helper/DyClass";

type Components = {
    style: string,
    children:string
}

const defaultProp: Components ={
    style: "",
    children: ""
}

export default function SkillsHighlighter(content = defaultProp){
    const style = content.style;
    const children = content.children
    return <>
        <div className={
            DyClass("rounded-[5px] bg-amber-200 max-w-8rem px-5 mx-1.5", style)
        }>
            {children}
        </div>
    </>
    
}

