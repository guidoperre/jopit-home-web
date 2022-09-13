import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from "../home/Home";
import {Description} from "../description/Description";
import {Header} from "../header/Header";

export default function App() {
    return (
        <div>
            <Header/>
            <Home/>
            <Description/>
            <ToastContainer/>
        </div>
    );
}
