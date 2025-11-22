import React, { useState, useEffect, createContext } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import SinglePage from "./components/SinglePage";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const SpecialityContext = createContext();

function App() {
  const [load, upadateLoad] = useState(true);
  const [activeSpeciality, setActiveSpeciality] = useState("developer");

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SpecialityContext.Provider value={{ activeSpeciality, setActiveSpeciality }}>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Preloader load={load} />
        <Navbar />
        <SinglePage />
      </div>
    </SpecialityContext.Provider>
  );
}

export default App;
