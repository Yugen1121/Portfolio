import { DyClass } from "../../Helper/DyClass";
import "../../App.css"
import gsap from "gsap/all"
import ModifiersPlugin from "gsap/all"
import Whale from "../../assets/FloatingWhale.png"
import Koi from "../../assets/TwoKoi.png"
import Sun from "../../assets/Sun.png"
import Cat from "../../assets/PeakingCat.png"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material"

function Home(){

    return <>
    <div>
        Yugen Limbu
    </div>
    <div>
        Software Developer | CS student 
    </div>
    <div>
        <Button variant="outlined">
            LinkedIn
        </Button>
        <Button variant="outlined">
            GitHub
        </Button>
        <Button variant="outlined">
            Gmail
        </Button>
    </div>
    </>
}

export default Home;