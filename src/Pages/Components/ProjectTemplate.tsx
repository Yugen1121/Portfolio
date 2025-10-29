import type { ReactNode } from "react";
import { DyClass } from "../../Helper/DyClass";

function ProjectTemplate({children, className}: {children?: ReactNode, className?: string}){
    return <>
            <div className={DyClass("ProjectSubContainer", className)}>
                {children}
            </div>
    </>
}

export default ProjectTemplate;