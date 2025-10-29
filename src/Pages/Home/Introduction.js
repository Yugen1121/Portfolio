import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useLayoutEffect, useRef } from "react";
import "../../App.css";
import gsap from "gsap";
function Introduction() {
    const focusRef = useRef(null);
    useLayoutEffect(() => {
        if (!focusRef.current)
            return;
        gsap.to(focusRef.current, {
            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
        });
    }, []);
    return _jsxs(_Fragment, { children: [_jsxs("div", { className: "text-[var(--color-10)]", children: [_jsx("h3", { children: "Hi, my name is" }), _jsx("span", { className: "Focus Highlight LText", children: "Yugen Limbu" })] }), _jsx("h2", { className: "Focus text-[var(--color-3)]", children: "Software Developer | CS student" }), _jsxs("div", { className: "flex flex-wrap p-6 gap-3", children: [_jsxs("a", { ref: focusRef, className: "sCard Focus", target: "_blank", rel: "noopener noreferrer", href: "https://www.linkedin.com/in/yugen-limbu-aa869b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", children: [_jsx("i", { className: "fa fa-linkedin-square" }), "LinkedIn"] }), _jsxs("a", { className: "sCard Focus", target: "_blank", rel: "noopener noreferrer", href: "https://github.com/Yugen1121", children: [_jsx("i", { className: "fa fa-github" }), "GitHub"] }), _jsxs("a", { className: "sCard Focus", href: "mailto:yugenlimbu777@2gamil.com", children: [_jsx("i", { className: "fa fa-envelope" }), "Gmail"] })] })] });
}
export default Introduction;
