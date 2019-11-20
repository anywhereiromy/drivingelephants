import React from "react";
import "./About.css";
import InstagramEmbed from "react-instagram-embed";

const Contact = () => {
  return (
    <div className={"about-container"}>
      <div className={"text-container"}>
        <h2 className={"aboutHeader"}>A ROCHA INDIA</h2>
        <p className={"text"}>
          For more information visit the A Rocha Website at
          <br />
          <br />
          <a href={"https://www.arocha.in/"} className={"filmLink"}>
            https://www.arocha.in/
          </a>
          <br />
          <br />
          or email at
          <br />
          <br />
          <a href="mailto: india@arocha.org" className={"filmLink"}>
            india@arocha.org
          </a>
          <br />
          <br />
          or call on
          <br />
          <br />
          +91 9886672041
        </p>
        <h2 className={"aboutHeader"}>KIRSTY WELLS - DIRECTOR</h2>
        <p className={"text"}>
          For film-making enquiries you can reach the director, Kirsty Wells, at
          <br />
          <br />
          <a href="mailto: kirstyawells@live.co.uk" className={"filmLink"}>
            kirstyawells@live.co.uk
          </a>
        </p>
        <h2 className={"aboutHeader"}>INSTAGRAM</h2>
        <p className={"text"}>
          <InstagramEmbed
            url="https://www.instagram.com/p/B3ZXhMeFRNm/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </p>
      </div>
    </div>
  );
};

export default Contact;
