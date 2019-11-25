import React from "react";
import "./Screenings.css";

const Screenings = () => {
  return (
    <div className={"screenings-container"}>
      <div className={"overlay"} />
      <div className={"text-container-screenings"}>
        <img
          src={"/poster.jpg"}
          alt={"Driving elephants film poster"}
          id={"filmPoster"}
        />
        <h2 className={"aboutHeader"}>INDIA</h2>
        <p className={"text"}>
          <a
            href="https://www.facebook.com/events/588554398560675/"
            className={"filmLink"}
          >
            30th November at St Josephs College of Arts and Science, Bangalore
          </a>
        </p>
        <br />
        <img
          src={"/indiaPremiere.png"}
          alt={
            "B4B Presents Premiere of Driving Elephants - Programme following the film screening A. Panel discussion on 'Managing elephants of Silicon City'. B. Felicitation of forest officials of Bannerghatta National Park"
          }
          id={"screeningFlier"}
        />
        <br />
        <h2 className={"aboutHeader"}>UK</h2>

        <p className={"text"}>TBA</p>
      </div>
    </div>
  );
};

export default Screenings;
