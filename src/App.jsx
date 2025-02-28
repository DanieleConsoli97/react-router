import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import Chisiamo from "./Pages/Chisiamo"
import listaPost from "./Pages/ListaPost"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Listapost" element={<listaPost/>}/>
        <Route path="/Chisiamo" element={<Chisiamo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
