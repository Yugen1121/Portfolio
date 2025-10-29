import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "../../App.css";
import DivBox from "../Components/divBox";
export default function Skills() {
    const skills = ["TypeScript", "JacaScript", "Java", "Python", "Flask", "Django", "Frontened", "Backened", "React"];
    return _jsxs(_Fragment, { children: [_jsx("h1", { className: "Highlight red", children: "SKILLS" }), _jsx("div", { className: "w-[70%]", children: _jsx("ul", { className: "flex flex-row none justify-center gap-4 flex-wrap", children: skills.map((e, i) => (_jsx(DivBox, { style: "border-0 px-4 py-2", children: e }, i))) }) })] });
}
