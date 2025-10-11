import "../../App.css"
import Logo from "../../assets/PythonLogo.png"
import ProjectCard from "./ProjectCard";

function Python(){
    const exp = [
        ["Record shop", 
            "Harvard cs50x final project made using flask. The page has authentication system and hashes the user credential and stores the users data in the shop using SQL.",
            ["flask", "Frontened", "Backened", "Python"]
        ],
        [
            "Shop inventory management.",
            "First year university project using python. The app has both console based UI and GUI made using Tkinter. It uses CSV files for data and allows the users to generate new insights and patterns from existing data.",
            ["Tkinter", "Python", "SQL", "CSV"]
        ],
        [
            "Django Chat app (Ongoing)",
            "Self project under work. The app is mainly centered towards business owners. I found that chat apps like whatsapp, telegram etc lack team management feature. It sparked and interest in me to build such chat that not only focuses on individuals and groups but also work and work place functionality like rota, tasks, roles etc.",
            ["Django", "Backened", "Froentened", "React", "SQL",]
        ]
    ]
    return <>
    <div className="w-[100%] h-[100%] ">   
        <div className="Header flex flex-row">
            <div><img src={Logo} className="MainLogo"/></div>
            <div>Python</div>
        </div>
        <div>
            {
                exp.map((e, i)=>(
                    <ProjectCard key={i} header={e[0]} body={e[1]} footer={e[2]} />
                ))
            }
        </div>
    </div>
    </>
}


export default Python;