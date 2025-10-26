import type { ReactNode } from "react";

interface myProp {
    children?: React.ReactNode
}

const Card: React.FC<myProp> = ({children=""})=>{
    return <>
        <div className="w-full flex flex-wrap max-h-full my-3 gap-2">
            {children}
        </div>
    </>
}

export default Card;