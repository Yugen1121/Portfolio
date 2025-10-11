type ProjectProps = {
    header: string;
    body: string;
    footer: String[]
}   


function ProjectCard({header, body, footer}: ProjectProps){
    return <>
        <div>
            <div>
                {header}
            </div>
            <div>
                {body}
            </div>
            <div className="flex flex-row">
                {footer.map((e, i)=>(
                    <div key={i}>{e}</div>
                ))}
            </div>
        </div>
    </>
}

export default ProjectCard;