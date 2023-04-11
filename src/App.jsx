import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import {useState,useLayoutEffect} from "react"
import MainPage from "./comtainers/MainPage";
import About from "./comtainers/About";
import Header from "./comtainers/Header";
import Notes from "./comtainers/Notes";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path='/Lab05' element={<MainPage />} />
          <Route path='/Lab05/about' element={<About/>} />
          <Route path='/Lab05/notes' element={<Notes/>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
    </>
  );
}

export default App;
