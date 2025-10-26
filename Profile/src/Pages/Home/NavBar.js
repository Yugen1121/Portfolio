import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DyClass } from "../../Helper/DyClass";
import { useEffect, useState } from "react";
import "../../App.css";
const drawerWidth = 240;
function NavBar({ Sections }) {
    const [menue, updateMenue] = useState(false);
    const [width, updateWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onWidthChange = () => {
            updateWidth(window.innerWidth);
        };
        window.addEventListener("resize", onWidthChange);
        return () => window.removeEventListener("resize", onWidthChange);
    }, []);
    // Used to nav through the page
    const onClickNav = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    // Used to toggle the menue
    const handleMenueToggle = () => {
        updateMenue(prev => !prev);
        console.log(menue);
    };
    const Menue = () => _jsx(_Fragment, { children: _jsx("div", { className: "absolute z-10 top-full right-10 w-40", children: _jsx("ul", { className: DyClass("gap-3", "p-[8px] pl-[12px]"), children: Object.keys(Sections).map((i) => (_jsx("li", { children: _jsx("button", { className: "navButton Focus p-[12px]", onClick: () => onClickNav(i), children: _jsx("h4", { children: Sections[i] }) }) }, i))) }) }) });
    return _jsx(_Fragment, { children: _jsxs("div", { className: "Nav1 flex w-screen justify-end fixed z-1000", children: [_jsx("ul", { className: DyClass(((width < 640) ? "hidden" : "flex flex-row gap-3"), "p-[8px] pl-[12px]"), children: Object.keys(Sections).map((i) => (_jsx("li", { children: _jsx("button", { className: "navButton Focus p-[12px]", onClick: () => onClickNav(i), children: _jsx("h4", { children: Sections[i] }) }) }, i))) }), _jsxs("div", { className: DyClass(((width > 640) && "hidden"), "relative p-[8px] pl-[12px]"), children: [_jsx("button", { onClick: handleMenueToggle, className: "relative z-20", children: "Menue" }), menue && _jsx(Menue, {})] })] }) });
}
export default NavBar;
