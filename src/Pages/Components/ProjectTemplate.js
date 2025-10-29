import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { DyClass } from "../../Helper/DyClass";
function ProjectTemplate({ children, className }) {
    return _jsx(_Fragment, { children: _jsx("div", { className: DyClass("ProjectSubContainer", className), children: children }) });
}
export default ProjectTemplate;
