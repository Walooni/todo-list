import React,{ StrictMode } from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import App from "./component/App"
// import { StrictMode } from 'react';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);