import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DyClass } from "../../Helper/DyClass";
import "../../App.css";
import { useRef } from "react";
import NavBar from "./NavBar";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import AboutMe from "./aboutMe";
function Home() {
    const bg1Ref = useRef(null);
    // NavBar
    const Nav = {
        "About": "About me",
        "Projects": "Projects",
        "Skills": "Skills"
    };
    return _jsxs(_Fragment, { children: [_jsx(NavBar, { Sections: Nav }), _jsx("section", { ref: bg1Ref, className: "ScreenSize relative bg1 flex justify-center flex-col items-center", children: _jsx("div", { className: "absoulte z-100 flex justify-center flex-col items-center", children: _jsx(Introduction, {}) }) }), _jsx("section", { id: "About", className: "relative ScreenSize bg2 justify-center items-center flex ", children: _jsx(AboutMe, {}) }), _jsx("section", { id: "Projects", className: DyClass("relative  z-[0] \
                max-w-screen min-w-screen flex \
                justify-center flex-col items-center bg-[var(--color-3)] \
                pb-20 min-h-screen"), children: _jsx(Projects, {}) }), _jsx("section", { id: "Skills", className: "bg1 flex flex-wrap justify-center flex-col items-center py-20", children: _jsx(Skills, {}) }), _jsx("hr", {}), _jsx(Footer, {})] });
}
export default Home;
