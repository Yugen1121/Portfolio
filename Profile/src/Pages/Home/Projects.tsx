import ProjectCard from "./ProjectCard";
import "../../App.css"
import ProjectTemplate from "./ProjectTemplate";
function Projects(){

    return <>
        <h1 className="text-[var(--color-9)] pb-20">Proje<span className="Highlight">c</span>ts</h1>

        <div className="ProjectContainer">
            <ProjectTemplate>
                <h1>
                    FitnessHUB
                </h1>
                <div>
                    akdsladnskndlksanlk
                </div>
            </ProjectTemplate>
            <ProjectTemplate>
                <div>
                    FitnessHUb
                </div>
                <div>
                    akdsladnskndlksanlk
                </div>
            </ProjectTemplate>
        </div>

        
    </>
}

export default Projects;