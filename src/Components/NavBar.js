import React from "react";
import "./NavBar.css";
import { navigate } from "@reach/router";

const NavBar = props => {
  console.log("props", props);
  return (
    <div className={"navBarContainer"}>
      <span>
        <button className={"navbar-link"} onClick={() => navigate("/")}>
          TRAILER
        </button>
      </span>
      <span>
        <button className={"navbar-link"} onClick={() => navigate("/about")}>
          ABOUT
        </button>
      </span>
      <span>
        <button
          className={"navbar-link"}
          onClick={() => navigate("/screenings")}
        >
          SCREENINGS
        </button>
      </span>
    </div>
  );
};

export default NavBar;
