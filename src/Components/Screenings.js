import React from "react";
import "./Screenings.css";

const Screenings = () => {
  return (
    <div className={"screenings-container"}>
      <div className={"overlay"} />
      <div className={"text-container-screenings"}>
        <h2 className={"aboutHeader"}>ONLINE NOW</h2>
        <p className={"text"}>
          <a
            href="https://ecostreamz.com/films/catalog/detail/190?fbclid=IwAR3abMVTfj4vL48BcUvwy_BmCWHwMdT7Y7_pTnoaWDRzUK1uv_oQJ-yTbaM"
            target="_blank"
            rel="noopener noreferrer"
            className={"filmLink"}
          >
            Watch FULL FILM here
          </a>
        </p>
        <h2 className={"aboutHeader"}>INDIA</h2>
        <p className={"text"}>
          <a
            href="https://www.facebook.com/events/588554398560675/"
            target="_blank"
            rel="noopener noreferrer"
            className={"filmLink"}
          >
            30th November at St Josephs College of Arts and Science, Bangalore
          </a>
        </p>
        <div className="screenings-image-container">
          <img
            src={"/indiaPremiere.png"}
            alt={
              "B4B Presents Premiere of Driving Elephants - Programme following the film screening A. Panel discussion on 'Managing elephants of Silicon City'. B. Felicitation of forest officials of Bannerghatta National Park"
            }
            id={"screeningFlier"}
          />
        </div>
        <br />
        <h2 className={"aboutHeader"}>UK</h2>

        <p className={"text"}>TBA</p>
      </div>
      <div className={"text-container-screenings"}>
        <img
          src={"/poster.jpg"}
          alt={"Driving elephants film poster"}
          id={"filmPoster"}
        />
      </div>
    </div>
  );
};

export default Screenings;
