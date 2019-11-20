import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className={"about-container"}>
      <img
        className={"elephants"}
        src={"/elephants.jpg"}
        alt={"Men herding elephants"}
      />
      <div className={"text-container"}>
        <h2 className={"aboutHeader"}>ABOUT THE ELEPHANTS</h2>
        <p className={"text"}>
          The elephants of Bannerghatta National Park are in a state of flux;
          trying to navigate an ever changing environment with an uncertain
          future. Situated at the terminal tip of Mysore Elephant Reserve, which
          holds the largest population of elephants in the country, Bannerghatta
          is home to a fraction of that population with approximately 160
          elephants. However it forms an important habitat for elephants and
          promotes the seasonal movement of animals from southnorth of the
          reserve.
          <br />
          <br />
          Elephants, like humans are a long-lived species and the constant
          change that Bannerghatta experiences due to expanding urbanization has
          left them in a familiarlyunfamiliar land. They are living on the edge,
          forced to seek habitats that have never ventured into before, which
          are dangerous to them and the people they come in contact with. This
          is more so with male elephants that are seen to live predominantly on
          the fringes of the forest in poor quality habitats. Males tend to take
          more risks due to their predominantly individualistic requirements,
          and move out into the enticing agricultural farms that border the
          park. In comparison, female groups who have to look after and protect
          calves within the family do not venture out into human-lands due to
          the threats they pose to young individuals.
          <br />
          <br />
          With these frequently constant excursions into human landscapes, the
          male elephants of Bannerghatta are slowly being lost from the
          population. Once they enter these urban and rural landscapes due to
          the loss of livelihood and the danger they pose to the local
          community, they are either killed or captured into captivity. Their
          removal from the population also means removal of rich genetic
          diversity, contributed through breeding which is essential for the
          long-term survival of elephants in this landscape.
        </p>
        <h2 className={"aboutHeader"}>KIRSTY WELLS - DIRECTOR</h2>
        <img
          className={"kirsty"}
          src={"/kirsty.jpg"}
          alt={"Portrait of Kirsty Wells, the director of Driving Elephants"}
        />
        <p className={"text"}>
          Kirsty is a young documentary film-maker from Buckinghamshire (UK)
          with a keen interest in conservation. Having obtained a degree in
          Zoology from the University of Manchester in 2018, she then sought
          opportunities to combine her interests of documentary film-making and
          wildlife with the hope of aiding conservation.
          <br />
          <br />
          She worked extensively on the subject of wolf reintroduction during
          her degree and{" "}
          <a
            className={"filmLink"}
            href={
              "https://vimeo.com/342718119?fbclid=IwAR3GFALqq91CYDoCMeKySRimbXgQBWw94qKyGZ517_LAQGrUd9g8zsmiSbE"
            }
          >
            produced a short film
          </a>{" "}
          about the impacts of human-wildlife conflict, in the context of
          reintroduced predators as part of her dissertation. With NGO, A Rocha
          India's work being focused primarily on human-elephant interactions,
          this collaboration was an ideal fit.
          <br />
          <br />
          Kirsty independently wrote and directed the film, in her biggest
          film-making endeavour to date.
        </p>
        <h2 className={"aboutHeader"}>
          <a href={"https://www.arocha.in/"} className={"filmLink"}>
            A ROCHA INDIA
          </a>
        </h2>
        <p className={"text"}>
          Understanding the great significance Bannerghatta National Park holds
          as an ecological resource for wildlife and for the city of Bangalore,
          A Rocha India has been working to conserve this unique habitat for the
          past 17 years. Using a three-pronged approach of scientific research,
          community involvement and environment education we attempt to seek
          solutions to the ever growing concern of human-wildlife conflict and
          biodiversity loss in the landscape of Bannerghatta.
          <br />
          <br />
          All of our efforts have been towards creating awareness and working on
          solutions to address the challenges that local communities and
          wildlife experience in an attempt to co-exist with one another. This
          involves working on innovative and practical ideas that look at
          preventing food-crisis and economic loss farmers experience due to
          crop raids by wild animals; and biodiversity loss the national park
          experiences as a result of increasing human-dependency on its natural
          resources. This includes looking at alternative methods of
          supplementing financial loss for farmers, research on elephant
          population and behavior that will help prevent their excursions into
          human lands, building awareness towards policy change and creating
          stewards for conservation amongst children.
          <br />
          <br />
          We work closely with all of the stakeholders that are affected by the
          threats that Bannerghatta experiences, from the local farmer, to the
          Karnataka Forest Department, the urban citizen and children; and in by
          doing so we hope to save the forest that we survive on.
        </p>
        <h2 className={"aboutHeader"}>FOREST DEPARTMENT</h2>
        <p className={"text"}>
          Bannerghatta National Park is a segregated part of the largest
          elephant reserve in the country- the Mysore Elephant Reserve. Although
          it is one of the smallest national parks in the country, it holds
          great ecological importance. Situated in the southern periphery of one
          of India’s fastest growing metropolitans, Bangalore; it provides
          ecological services to over 12 million people who live here.
          <br />
          <br />
          It is also home to a variety of endangered and vulnerable wildlife
          which is in danger of disappearing due to large scale urbanization
          which surrounds the park. With threats such as human-encroachments,
          poaching of protected wildlife, illegal timber collection and draining
          of natural resources; the Karnataka Forest Department (KFD) has been
          tirelessly working towards conserving this wild jungle from the urban
          jungle that threatens it. In addition, due to the close spaces
          wildlife share with humans, the issue of human-wildlife conflict is an
          ever growing concern.
          <br />
          <br />
          With casualties on both sides the KFD has the significant task of
          protecting the people and conserving the forest and wildlife. This it
          does through a variety of on-ground measures by implementing various
          barriers to keep the elephants in the forests, away from humans.
          However this is not enough.
          <br />
          <br />
          The effort of the department needs the support and the public’s call
          for action to make long-term policy level changes to protect a forest
          that benefits us all.
        </p>
      </div>
    </div>
  );
};

export default About;
