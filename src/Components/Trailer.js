import React from "react";
import ReactPlayer from "react-player";

const Trailer = () => {
  return (
    <div className={"trailer"}>
      <div className={"trailer-container"}>
        <div className={"react-player-container"}>
          <ReactPlayer
            url="https://vimeo.com/365231924"
            playing={true}
            loop={true}
            className={"react-player"}
          />
        </div>
        <img
          className={"elephantsTrailer"}
          src={"/elephantDust.jpg"}
          alt={"An elephant spraying itself with dust from it's trunk"}
        />
        <div className={"text-container"}>
          <p className={"text"}>
            Caught in the cross-fire of a shrinking forest habitat and an ever
            expanding urban population, the elephants of Bannerghatta National
            Park are being pushed towards extinction. With approximately 40% of
            the national park’s northern boundary surrounded by the ever
            expanding city of Bangalore, inviolate forest space is being eaten
            away. Elephants are being marginalised into thin forest strips,
            where they are often tempted into local croplands.
            <br />
            <br />
            Driving Elephants, a short feature documentary, explores the harsh
            realities facing Bannerghatta’s elephants as they leave the
            protected area, resulting in fatal consequences for both people and
            elephants.
            <br />
            <br />
            Over the years a trend has emerged, with groups of male elephants
            dispersing further from the protection of the national park, in
            search of foraging grounds. This poses huge problems for the local
            communities that are being forced to co-exist with these large,
            intelligent and potentially dangerous animals. Crop damage by
            elephants can have devastating economic consequences for poor rural
            families and encounters with wild elephants often result in serious
            injury or death. As a result of the ongoing conflict, elephants are
            increasingly persecuted and can fall victim to retaliatory attacks
            or become subject to management strategies resulting in their
            capture or translocation.
            <br />
            <br />
            The insurmountable job of managing this problem is left to the
            Karnataka Forest Department. Forest watchers are frequently tasked
            with driving escaped elephants back to the National Park, navigating
            the obstacles of an increasingly urbanised environment.
            <br />
            <br />
            This documentary brings to light the challenges frontline staff face
            when working to protect the lives of people and elephants, around
            Bannerghatta. We hope this film will bring awareness to the ever
            precarious existence of the Asian elephant in India, and the people
            whose lives are afflicted with this escalating conflict.
            <br />
            <br />
            Whilst Bannerghatta National Park is unusual in its proximity to a
            major metropolitan city, it will likely become an archetype for
            human-elephant conflict in India. As the country’s population
            increases to grow and urban areas expand to accommodate this, vital
            habitat for these wide-ranging creatures diminishes. Elephants have
            no choice but to venture into the hands of humans.
          </p>
          <br />
          <br />
          <img
            className={"kirsty"}
            src={"/aRochaLogo.png"}
            alt={"A Rocha India Logo"}
          />
          <br />
          <img
            className={"kirsty"}
            src={"/karnatkaLogo.png"}
            alt={"Karnatka Forest Department Logo"}
          />
        </div>
      </div>
    </div>
  );
};

export default Trailer;
