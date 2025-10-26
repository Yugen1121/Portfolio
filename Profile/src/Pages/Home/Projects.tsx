import "../../App.css"
import ProjectTemplate from "../Components/ProjectTemplate";
import FH1 from "../../assets/FH1.jpeg"
import FH2 from "../../assets/FH2.jpeg"
import FH3 from "../../assets/FH3.jpeg"
import JavaIMG from "../../assets/Java1.webp"
import VynalIMG from "../../assets/Vynal.png"
import InventoryManagementIMG from "../../assets/InventoryManagement.jpeg"
import FlexCard from "../Components/FlexCard"
import DivBox from "../Components/divBox"
import Network from "../../assets/network.jpg"
import ChattiIMG from "../../assets/Chatti.png"
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { DyClass } from "../../Helper/DyClass";

function Projects(){
    // reference
    const vynalRef = useRef<HTMLImageElement | null>(null);
    // state for the image tag
    const [imgI1, updateImgI1] = useState(0);
    
    // images
    const images1 = [FH1, FH2, FH3];


    useEffect(()=>{
        // changes the image every three seconds
        const intervalID = setInterval(()=>{
            updateImgI1((prev)=> (prev+1)%images1.length)
        }, 4000)

        return ()=> clearInterval(intervalID);
    },
    [])


    // makes the vynal image spin
    useEffect(()=>{
        const vynal = vynalRef.current;
        if (!vynal) return;

        gsap.to(vynal, {
            rotate: 360,
            duration: 3,
            repeat: -1,
            ease: "linear",
            transformOrigin: "center center" 
        })
    }, [])

    const Chatti = ()=> <>
    <div>
                    <h1>Chatti, a chatting website <span className="Highlight">(on progress)</span></h1>
                </div>
                <div>
                    <p>A chat website made using React frontened and django backened. The application allows the user to have a role based chat, allows task allocation, sceduules and many more.</p>
                    <FlexCard>
                        <DivBox>Python</DivBox>
                        <DivBox>React</DivBox>
                        <DivBox>TypeScript</DivBox>
                        <DivBox>Django</DivBox>
                        <DivBox>GSAP</DivBox>
                        <DivBox>JWT auth</DivBox>

                    </FlexCard>
                    <img src={ChattiIMG} />
                    <div>
                        
                    </div>
                </div>
    </>

    const RecordShop = ()=> <>
    <div className="div1">
                    <img ref={vynalRef} src={VynalIMG}/>
                </div>
                <div className="div3">
                    <h2><span className="Highlight">Record</span>Shop, Place for <span className="Highlight">music</span></h2>
                    <hr className="border-3"></hr>
                    <p>An e-commerce website made using flask as a backened and react as frontened. It's a site where you can buy records, or have a wishlist of them.</p>
                    <FlexCard>
                        <DivBox>Frontened</DivBox>
                        <DivBox>React</DivBox>
                        <DivBox>Typescript</DivBox>
                        <DivBox>Python</DivBox>
                        <DivBox>Flask</DivBox>
                        <DivBox>Database</DivBox>

                        
                    </FlexCard>
                    <hr></hr>
                    <a className="sCard Focus" target="_blank"  rel="noopener noreferrer" href="https://github.com/Yugen1121">
                        <i className="fa fa-github"></i>Code
                    </a>
                </div>
    </>

    const JavaInvent = ()=><>
        <       div>
                    <h1>Inventory management using <span className="Highlight ">JAVA</span></h1>
                    <ProjectTemplate>
                        <div>
                            <img src={JavaIMG}/>
                            <FlexCard>
                                <DivBox>Java</DivBox>
                                <DivBox>SQL</DivBox>
                            </FlexCard>
                        </div>
                        <div>

                            <p>
                                Java based console based application used to manage inventory. Features multiple warehouse mangement and CRUD fucntion to control the inventory.
                            </p>
                            <a className="sCard Focus" target="_blank"  rel="noopener noreferrer" href="https://github.com/Yugen1121/CPS4005">
                                <i className="fa fa-github"></i>Code
                            </a>
                        </div>
                        
                    </ProjectTemplate>
                </div>
        </>

    const Insurance = ()=> <>
                        <div>
                            <h1><span className="Highlight">SQL</span> insurance management <span className="text-[var(--color-10)]">network.</span></h1>
                            <ProjectTemplate>
                                <div>
                                <p>An console based network and application made using sqlite3 and python. It's a role based application that allows the user to make claims send messages to other user/insurance adjuster and store datas about the insurance, file claims and connect to benificieries.</p>
                                    <FlexCard>
                                        <DivBox>SQL</DivBox>
                                        <DivBox>Database</DivBox>
                                        <DivBox>Python</DivBox>
                                    </FlexCard>
                                </div>
                                <div>
                                    <img src={Network}/>
                                    <a className="sCard Focus" target="_blank"  rel="noopener noreferrer" href="https://github.com/Yugen1121/CPS4004">
                                        <i className="fa fa-github"></i>Code
                                    </a>
                                </div>
                            </ProjectTemplate>
                    </div>
    </>

    const PythonInvent = ()=><>
                        <div>
                        <h1>Python inventory <span className="Highlight">Management</span></h1>
                        <img src={InventoryManagementIMG} />
                        <p>An consoole and gui base application made using python and csv file. The application takes data from a store franchise in a csv form. The data is then used to control the inventroy and bring up new insights like which store sold the most of a perticular category, most payment methods used etc. It uses a Tkinter based gui for dashboard and some other functions.</p>
                        <FlexCard>
                            <DivBox>Python</DivBox>
                            <DivBox>Tkinter</DivBox>
                            <DivBox>CSV</DivBox>
                        </FlexCard>
                        <a className="sCard Focus" target="_blank"  rel="noopener noreferrer" href="https://github.com/Yugen1121/CPS4003/tree/main/assessment2">
                            <i className="fa fa-github"></i>Code
                        </a>
                    </div>
    </>

    const FitnessHub = ()=> <>
                    <div>
                        
                        <h1>
                            Fitness<span className="Highlight">HUB</span> web application
                        </h1>
                    
                            
                        <p>
                            An interactive react based application. It features functionlaities like meal prepping, calorie counter, recent news about fitness, symptom checker and many more.
                        </p>
                        <FlexCard>
                                <DivBox>Frontened</DivBox>
                                <DivBox>React</DivBox>
                                <DivBox>Typescript</DivBox>
                        </FlexCard>
                        <img src={images1[imgI1]}/>
                        <a className="sCard Focus" target="_blank"  rel="noopener noreferrer" href="https://github.com/Yugen1121/Programming/tree/main/Programming">
                            <i className="fa fa-github"></i>Code
                        </a>
                    </div>
    </>

    return <>

        <div className=" bg-[var(--color-8)] w-[90%] flex  justify-center m-15 ">   
            <h1 className="text-[var(--color-3)] ">Some of my work</h1>
        </div>

        <div className="ProjectNPContainer">
            
            <ProjectTemplate className="div2">
                <Chatti />
            </ProjectTemplate>

            <ProjectTemplate className="bg-[var(--color-5)]">
                <RecordShop />

            </ProjectTemplate>
            <div className="md:col-span-2 col-span-1 div2">
                <div className="ProjectNPContainer">
                    <JavaInvent />
                    <Insurance />
                </div>
            </div>
            <div className={DyClass("ProjectNPContainer md:col-span-2 col-span-1 div2", "")}>
                <ProjectTemplate>
                    <PythonInvent />
                    <FitnessHub />  

                </ProjectTemplate>        
                
            </div>
        </div>
        

        
    </>
}

export default Projects;