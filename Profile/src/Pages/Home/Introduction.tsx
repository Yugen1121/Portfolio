import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import Cat from "../../assets/Sun.png"

function Introduction(){
    return <>
        <div className="flex flex-row flex-wrap-reverse justify-center items-center">
            <div className="flex flex-col w-full mx-auto justify-center items-center">
                <div>
                    <div className="mx-atuo w-full m-[10px]">
                        About Me
                    </div>
                    <p className="max-w-md w-full m-[10px]">
                        I'm an aspiring Software engineer pursuing Bsc in Computer science specializing on Software Engineering at St Marys University.
                        <br></br>
                    </p>
                    <div className="flex flex-wrap">
                        <div className="sCard">London, UK</div>
                        <a href="https://www.stmarys.ac.uk/" target="_blank" rel="noopener noreferrer">
                        <div className="sCard">St Marys University</div>
                        </a>

                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Avatar 
            src={Cat}
            sx={{width: {sm: "18rem" }, height: {sm: "18rem"}}}
            />
                <h1>
                    Yugen Limbu
                </h1>
                <div>
                    Software Developer | CS student 
                </div>
                <div className="flex flex-wrap">
                    <a className="sCard">
                        LinkedIn
                    </a>
                    <a className="sCard">
                        GitHub
                    </a>
                    <a className="sCard">
                        Gmail
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Introduction;