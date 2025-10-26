import type { ReactNode } from "react";
import "../../App.css"
function Project({children}: {children?:ReactNode}){
    return <>
        <div className="Focus ">
            {children}
        </div>
    </>
}

export default Project;