import Navbar from "./components/Navbar";
import React, { useRef } from "react";

import MainPage from "./components/MainPage";
import "./App.css"
function App() {
  const mainPageRef = useRef(null);
  return (
    <div className="app">
      <Navbar mainPageRef={mainPageRef}></Navbar>
      <MainPage mainPageRef={mainPageRef}></MainPage>
    </div>
  );
}

export default App;
