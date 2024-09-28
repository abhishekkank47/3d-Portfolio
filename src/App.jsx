import {} from "react";
import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Who from "./components/Who";
import Works from "./components/Works";

function App() {
  return (
    <>
    <div className="app-container">
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
