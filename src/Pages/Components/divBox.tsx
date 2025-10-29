import { Children } from "react"
import { DyClass } from "../../Helper/DyClass"
interface prop{
    children?: React.ReactNode
    style?: string
}

const DivBox: React.FC<prop> = ({children, style=""})=>{
    return <div className={DyClass(
        "border-b-8 border inline-block self-start px-2 bg-[var(--color-9)] text-[var(--color-2)]", style
    )}>
        {children}
    </div>
}

export default DivBox;