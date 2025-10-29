import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// Compoonenets
import Home from "./Pages/Home/Index";
import Ripples from "./Pages/Ripples/index";
function App() {
    const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Home, {}) }), _jsx(Route, { path: "/Ripples", element: _jsx(Ripples, {}) })] }) }));
}
export default App;
