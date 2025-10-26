import { jsx as _jsx } from "react/jsx-runtime";
import { DyClass } from "../../Helper/DyClass";
const DivBox = ({ children, style = "" }) => {
    return _jsx("div", { className: DyClass("border-b-8 border inline-block self-start px-2 bg-[var(--color-9)] text-[var(--color-2)]", style), children: children });
};
export default DivBox;
