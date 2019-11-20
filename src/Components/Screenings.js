import React from "react";
import "./Screenings.css";

const Screenings = () => {
  return (
    <div className={"screenings-container"}>
      <div className={"overlay"} />
      <div className={"text-container"}>
        <img
          src={"/poster.jpg"}
          alt={"Driving elephants film poster"}
          id={"filmPoster"}
        />
        <h2 className={"aboutHeader"}>INDIA</h2>
        <p className={"text"}>
          30th November at St Josephs College of Arts and Science, Bangalore
        </p>
        <br />
        <h2 className={"aboutHeader"}>UK</h2>
        <p className={"text"}>TBA</p>
      </div>
    </div>
  );
};

export default Screenings;
