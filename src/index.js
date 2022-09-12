import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css'
//import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// const textReducer = (state = "", action) => {
//     switch (action.type) {
//         case "ADDTEXT":
//             return state;
//         case "REMOVETEXT":
//             return state
//     }
// }

// let store = createStore(textReducer);