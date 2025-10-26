import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "../../App.css";
import ProjectTemplate from "../Components/ProjectTemplate";
import FH1 from "../../assets/FH1.jpeg";
import FH2 from "../../assets/FH2.jpeg";
import FH3 from "../../assets/FH3.jpeg";
import JavaIMG from "../../assets/Java1.webp";
import VynalIMG from "../../assets/Vynal.png";
import InventoryManagementIMG from "../../assets/InventoryManagement.jpeg";
import FlexCard from "../Components/FlexCard";
import DivBox from "../Components/divBox";
import Network from "../../assets/network.jpg";
import ChattiIMG from "../../assets/Chatti.png";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { DyClass } from "../../Helper/DyClass";
function Projects() {
    // reference
    const vynalRef = useRef(null);
    // state for the image tag
    const [imgI1, updateImgI1] = useState(0);
    // images
    const images1 = [FH1, FH2, FH3];
    useEffect(() => {
        // changes the image every three seconds
        const intervalID = setInterval(() => {
            updateImgI1((prev) => (prev + 1) % images1.length);
        }, 4000);
        return () => clearInterval(intervalID);
    }, []);
    // makes the vynal image spin
    useEffect(() => {
        const vynal = vynalRef.current;
        if (!vynal)
            return;
        gsap.to(vynal, {
            rotate: 360,
            duration: 3,
            repeat: -1,
            ease: "linear",
            transformOrigin: "center center"
        });
    }, []);
    const Chatti = () => _jsxs(_Fragment, { children: [_jsx("div", { children: _jsxs("h1", { children: ["Chatti, a chatting website ", _jsx("span", { className: "Highlight", children: "(on progress)" })] }) }), _jsxs("div", { children: [_jsx("p", { children: "A chat website made using React frontened and django backened. The application allows the user to have a role based chat, allows task allocation, sceduules and many more." }), _jsxs(FlexCard, { children: [_jsx(DivBox, { children: "Python" }), _jsx(DivBox, { children: "React" }), _jsx(DivBox, { children: "TypeScript" }), _jsx(DivBox, { children: "Django" }), _jsx(DivBox, { children: "GSAP" }), _jsx(DivBox, { children: "JWT auth" })] }), _jsx("img", { src: ChattiIMG }), _jsx("div", {})] })] });
    const RecordShop = () => _jsxs(_Fragment, { children: [_jsx("div", { className: "div1", children: _jsx("img", { ref: vynalRef, src: VynalIMG }) }), _jsxs("div", { className: "div3", children: [_jsxs("h2", { children: [_jsx("span", { className: "Highlight", children: "Record" }), "Shop, Place for ", _jsx("span", { className: "Highlight", children: "music" })] }), _jsx("hr", { className: "border-3" }), _jsx("p", { children: "An e-commerce website made using flask as a backened and react as frontened. It's a site where you can buy records, or have a wishlist of them." }), _jsxs(FlexCard, { children: [_jsx(DivBox, { children: "Frontened" }), _jsx(DivBox, { children: "React" }), _jsx(DivBox, { children: "Typescript" }), _jsx(DivBox, { children: "Python" }), _jsx(DivBox, { children: "Flask" }), _jsx(DivBox, { children: "Database" })] }), _jsx("hr", {}), _jsxs("a", { className: "sCard Focus", target: "_blank", rel: "noopener noreferrer", href: "https://github.com/Yugen1121", children: [_jsx("i", { className: "fa fa-github" }), "Code"] })] })] });
    const JavaInvent = () => _jsx(_Fragment, { children: _jsxs("div", { children: [_jsxs("h1", { children: ["Inventory management using ", _jsx("span", { className: "Highlight ", children: "JAVA" })] }), _jsxs(ProjectTemplate, { children: [_jsxs("div", { children: [_jsx("img", { src: JavaIMG }), _jsxs(FlexCard, { children: [_jsx(DivBox, { children: "Java" }), _jsx(DivBox, { children: "SQL" })] })] }), _jsxs("div", { children: [_jsx("p", { children: "Java based console based application used to manage inventory. Features multiple warehouse mangement and CRUD fucntion to control the inventory." }), _jsxs("a", { className: "sCard Focus", target: "_blank", rel: "noopener noreferrer", href: "https://github.com/Yugen1121/CPS4005", children: [_jsx("i", { className: "fa fa-github" }), "Code"] })] })] })] }) });
    const Insurance = () => _jsx(_Fragment, { children: _jsxs("div", { children: [_jsxs("h1", { children: [_jsx("span", { className: "Highlight", children: "SQL" }), " insurance management ", _jsx("span", { className: "text-[var(--color-10)]", children: "network." })] }), _jsxs(ProjectTemplate, { children: [_jsxs("div", { children: [_jsx("p", { children: "An console based network and application made using sqlite3 and python. It's a role based application that allows the user to make claims send messages to other user/insurance adjuster and store datas about the insurance, file claims and connect to benificieries." }), _jsxs(FlexCard, { children: [_jsx(DivBox, { children: "SQL" }), _jsx(DivBox, { children: "Database" }), _jsx(DivBox, { children: "Python" })] })] }), _jsxs("div", { children: [_jsx("img", { src: Network }), _jsxs("a", { className: "sCard Focus", target: "_blank", rel: "noopener noreferrer", href: "https://github.com/Yugen1121/CPS4004", children: [_jsx("i", { className: "fa fa-github" }), "Code"] })] })] })] }) });
    const PythonInvent = () => _jsx(_Fragment, { children: _jsxs("div", { children: [_jsxs("h1", { children: ["Python inventory ", _jsx("span", { className: "Highlight", children: "Management" })] }), _jsx("img", { src: InventoryManagementIMG }), _jsx("p", { children: "An consoole and gui base application made using python and csv file. The application takes data from a store franchise in a csv form. The data is then used to control the inventroy and bring up new insights like which store sold the most of a perticular category, most payment methods used etc. It uses a Tkinter based gui for dashboard and some other functions." }), _jsxs(FlexCard, { children: [_jsx(DivBox, { children: "Python" }), _jsx(DivBox, { children: "Tkinter" }), _jsx(DivBox, { children: "CSV" })] }), _jsxs("a", { className: "sCard Focus", target: "_blank", rel: "noopener noreferrer", href: "https://github.com/Yugen1121/CPS4003/tree/main/assessment2", children: [_jsx("i", { className: "fa fa-github" }), "Code"] })] }) });
    const FitnessHub = () => _jsx(_Fragment, { children: _jsxs("div", { children: [_jsxs("h1", { children: ["Fitness", _jsx("span", { className: "Highlight", children: "HUB" }), " web application"] }), _jsx("p", { children: "An interactive react based application. It features functionlaities like meal prepping, calorie counter, recent news about fitness, symptom checker and many more." }), _jsxs(FlexCard, { children: [_jsx(DivBox, { children: "Frontened" }), _jsx(DivBox, { children: "React" }), _jsx(DivBox, { children: "Typescript" })] }), _jsx("img", { src: images1[imgI1] }), _jsxs("a", { className: "sCard Focus", target: "_blank", rel: "noopener noreferrer", href: "https://github.com/Yugen1121/Programming/tree/main/Programming", children: [_jsx("i", { className: "fa fa-github" }), "Code"] })] }) });
    return _jsxs(_Fragment, { children: [_jsx("div", { className: " bg-[var(--color-8)] w-[90%] flex  justify-center m-15 ", children: _jsx("h1", { className: "text-[var(--color-3)] ", children: "Some of my work" }) }), _jsxs("div", { className: "ProjectNPContainer", children: [_jsx(ProjectTemplate, { className: "div2", children: _jsx(Chatti, {}) }), _jsx(ProjectTemplate, { className: "bg-[var(--color-5)]", children: _jsx(RecordShop, {}) }), _jsx("div", { className: "md:col-span-2 col-span-1 div2", children: _jsxs("div", { className: "ProjectNPContainer", children: [_jsx(JavaInvent, {}), _jsx(Insurance, {})] }) }), _jsx("div", { className: DyClass("ProjectNPContainer md:col-span-2 col-span-1 div2", ""), children: _jsxs(ProjectTemplate, { children: [_jsx(PythonInvent, {}), _jsx(FitnessHub, {})] }) })] })] });
}
export default Projects;
