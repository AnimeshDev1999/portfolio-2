import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Logo from "./components/Logo";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [isActive, setIsActive] = useState("Home");
  const activeHandler = (event) => {
    setIsActive(event.target.innerText);
    console.log(isActive);
  };

  return (
    <React.Fragment>
      <Logo></Logo>
      <Navbar info={activeHandler}></Navbar>
      {/* <Hero></Hero> */}
      {/* <About></About> */}
      {/* <Projects></Projects> */}
      {/* <Contact></Contact> */}
      {isActive === "Home" ? (
        <Hero></Hero>
      ) : isActive === "About" ? (
        <About></About>
      ) : isActive === "Work" ? (
        <Projects></Projects>
      ) : (
        <Contact></Contact>
      )}
    </React.Fragment>
  );
}

export default App;
