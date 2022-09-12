import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HomeHeader} from '../header/Header';
import {Home} from "../home/Home";
import {Description} from "../description/Description";

export default function App() {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <Description/>
        <ToastContainer/>
    </div>
  );
}
