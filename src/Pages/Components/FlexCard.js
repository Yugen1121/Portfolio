import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const Card = ({ children = "" }) => {
    return _jsx(_Fragment, { children: _jsx("div", { className: "w-full flex flex-wrap max-h-full my-3 gap-2", children: children }) });
};
export default Card;
