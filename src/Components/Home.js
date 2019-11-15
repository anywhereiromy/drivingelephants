import React from "react";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className={"home"}>
      <div className={"react-player-container"}>
        <video width="320" height="240" autoplay loop>
          <source src="../../public/titleAnimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ReactPlayer
          url="../../public/titleAnimation.mp4"
          playing
          loop
          fileConfig={{ forceVideo: true }}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default Home;
