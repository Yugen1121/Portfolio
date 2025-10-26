import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import img from "../../assets/PFP.png";
import { DyClass } from "../../Helper/DyClass";
import "../../App.css";
import { useEffect, useRef } from "react";
export default function AboutMe() {
    //<img src={noImg} className="w-[50%] h-[50%]"/>
    const imgRef = useRef(null);
    const bgRef = useRef(null);
    useEffect(() => {
        const x = bgRef.current;
        const y = imgRef.current;
        if (!y || !x)
            return;
        const handleResize = () => {
            if (x.offsetWidth > x.offsetHeight) {
                y.style.width = "50%";
                y.style.height = "auto";
            }
            else {
                y.style.height = "50%";
                y.style.width = "auto";
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return _jsxs(_Fragment, { children: [_jsx("div", { ref: bgRef, className: "pfp absolute z-10 w-full h-full", children: _jsx("img", { ref: imgRef, src: img }) }), _jsxs("div", { className: "absolute z-20 AboutLayout1 w-full h-full", children: [_jsx("div", { className: "flex-1" }), _jsxs("div", { className: "AboutContainer flex-1", children: [_jsxs("div", { className: DyClass("mx-atuo text-8xl text-[var(--color-9)]"), children: [_jsx("span", { className: "font-bold", children: "About" }), _jsx("span", { className: "text-red-700", children: "Me" })] }), _jsxs("div", { className: "flex items-center flex-col mb-8", children: [_jsxs("p", { className: "inline-block text-4xl m-3 bg-[var(--color-4)]", children: ["I'am an aspiring ", _jsx("span", { className: "Focus text-red-700", children: "Software Engineer" }), " pursuing Bsc in Computer science specializing on Software Engineering at St Marys University."] }), _jsx("p", { className: "inline-block text-4xl m-3 bg-[var(--color-4)]", children: "Passionate about building efficient, scalable, and user-centered applications, I constantly explore new technologies and methodologies to enhance my skills and deliver exceptional software solutions." })] }), _jsxs("div", { className: "w-full flex felx flex-wrap gap-4", children: [_jsx("div", { children: _jsx("div", { className: "bg-[var(--color-4)]", children: _jsx("a", { href: "", target: "_blank", rel: "noopener noreferrer", children: "London, UK" }) }) }), _jsx("div", { children: _jsx("div", { className: "bg-[var(--color-4)]", children: _jsx("a", { target: "_blank", rel: "noopener noreferrer", href: "", children: "St Mary's University" }) }) }), _jsx("div", { children: _jsx("div", { className: "bg-[var(--color-4)]", children: _jsx("a", { target: "_blank", rel: "noopener noreferrer", href: "", children: "BSc Computer Science" }) }) }), _jsx("div", { children: _jsx("div", { className: "bg-[var(--color-4)]", children: _jsx("a", { target: "_blank", rel: "noopener noreferrer", href: "", children: "Software Development" }) }) })] })] })] })] });
}
