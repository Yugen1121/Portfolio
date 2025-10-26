import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { DyClass } from "../../Helper/DyClass";
const defaultProp = {
    style: "",
    children: ""
};
export default function SkillsHighlighter(content = defaultProp) {
    const style = content.style;
    const children = content.children;
    return _jsx(_Fragment, { children: _jsx("div", { className: DyClass("rounded-[5px] bg-amber-200 max-w-8rem px-5 mx-1.5", style), children: children }) });
}
