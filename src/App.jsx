import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import {useState,useLayoutEffect} from "react"
import MainPage from "./comtainers/MainPage";
import About from "./comtainers/About";
import Header from "./comtainers/Header";
import Notes from "./comtainers/Notes";


function App() {
  return (
    <>
    <Header></Header>
    <MainPage></MainPage>
    </>
  );
}

export default App;
