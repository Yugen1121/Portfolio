import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(_jsx(HashRouter, { children: _jsx(StrictMode, { children: _jsx(App, {}) }) }));
