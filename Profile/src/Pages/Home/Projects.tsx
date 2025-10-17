import ProjectCard from "./ProjectCard";
function Projects(){

    return <>
        <h1>Projects</h1>
        <div className="w-[70%]  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-8">
            <div className="">
                <ProjectCard Content={{header: "Postfolio", body: "sdnjfdsknfdsnjkabdjasbdjksabdksadjsakbdkasjdsanxjnhancbuehakcnshknbackjsbajkwbakjsnbckjanskjbcjsk", git: "sjfndsfnjk"}} />
            </div>
            <div>
                <ProjectCard Content={{header: "Postfolio", body: "sdnjfdsknfdsnjk", git: "sjfndsfnjk"}} />
            </div>
            <div>
                <ProjectCard Content={{header: "Postfolio", body: "sdnjfdsknfdsnjk", git: "sjfndsfnjk"}} />
            </div>
            <div>
                <ProjectCard Content={{header: "Postfolio", body: "sdnjfdsknfdsnjk", git: "sjfndsfnjk"}} />
            </div>
            <div>
                <ProjectCard Content={{header: "Postfolio", body: "sdnjfdsknfdsnjk", git: "sjfndsfnjk"}} />
            </div>
            
        </div>
    </>
}

export default Projects;