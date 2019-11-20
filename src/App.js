import React from "react";
import { Router } from "@reach/router";
import Trailer from "./Components/Trailer";
import About from "./Components/About";
import Screenings from "./Components/Screenings";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";

const App = props => {
  return (
    <div className={"App"}>
      {/* TODO: Change to animation */}
      <h1 className={"title"}>DRIVING ELEPHANTS</h1>
      <NavBar />
      <Router>
        <Trailer path="/" {...props} />
        <About path="/about" {...props} />
        <Screenings path="/screenings" {...props} />
        <Contact path="/contact" {...props} />
      </Router>
    </div>
  );
};

export default App;
