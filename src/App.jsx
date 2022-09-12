import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {HomeHeader} from './header/Header';
import {Home} from "./home/Home";

export default function App() {
  return (
    <div>
        <HomeHeader/>
        <Home/>
        <ToastContainer/>
    </div>
  );
}
