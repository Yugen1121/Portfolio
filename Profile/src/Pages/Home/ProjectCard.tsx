import NoImg from "../../assets/no-image-available-icon-vector.jpg"
import {useEffect, useRef} from "react"

type Content = {
  Image?: string
  git?: string
  demo?: string
  header?: string
  body?: string
}

const defaultContent: Content = {
  Image: "NoImg",
  git: "",
  demo: "",
  header: "",
  body: ""
}




function ProjectCard({Content = defaultContent}: {Content: Content}){

    const imgRef = useRef(null);

    useEffect(()=>{
        const img = imgRef.current
        const handleEnter = ()=>{
        img.style.transform = "scale(1.1)"
        img.style.transition = "transform 2 ease-in"
        }

        const handleLeave = ()=>{
            img.style.transform = "scale(1)"
            img.style.transition = "transform 2 ease-in"
        }

        img.addEventListener("mouseenter", handleEnter)
        img.addEventListener("mouseleave", handleLeave)
        return ()=>{
            document.removeEventListener("mouseenter", handleEnter)
            document.removeEventListener("mouseleave", handleLeave)
        }
        
    }, [])
    
    
    return <>
        <div className="h-full w-full bg-amber-800 flex flex-col  pb-5 rounded-[10px] shadow-2xl">
            <div className="w-full max-h-64 overflow-hidden">
                <img ref={imgRef} src={Content.Image ? Content.Image: NoImg} className="w-full max-h-64"/>
            </div>
            <div className="p-5">
                <div><h3>{Content.header}</h3></div>
                <p className="w-full break-words ">
                    {Content.body}
                    
                </p>
                <div>
                    {Content.git && <a href={Content.git}>Git</a>}
                    {Content.demo && <a href={Content.demo}></a>}
                </div>
            </div>
        </div>
    </>
}

export default ProjectCard;