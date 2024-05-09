import Home from "./components/Home/home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inputform from "./components/Home/inputform";
import Header from "./components/Home/Header/header";


function App() {
  

  return (
   <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Inputform/>} />
        </Routes>
      </BrowserRouter>

  </>
  )
}

export default App
