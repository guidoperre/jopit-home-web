import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from "../home/Home";
import {Description} from "../description/Description";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {Price} from "../price/Price";
import {FAQ} from "../faq/FAQ";
import {Contact} from "../contact/Contact";

export default function App() {
    return (
        <div>
            <Header/>
            <Home/>
            <Description/>
            <Price/>
            <FAQ/>
            <Contact/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
}
