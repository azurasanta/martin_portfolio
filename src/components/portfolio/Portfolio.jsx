import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
// import phinancier_logo from "../../assets/phinancier_logo.jpeg";
// import interview_portal_logo from "../../assets/interview_portal_logo.jpeg";
// import learningPath from "../../assets/learningPath.png";

const data = [
  {
    id: 1,
    image: IMG4,
    title: "Midjourney, ChatGPT, DALL·E, Stable Diffusion & more Prompt Marketplace",
    // github: "https://github.com/azurasanta/learning-path-scheduler-frontend",
    demo: "https://promptbase.com/",
  },
  {
    id: 2,
    image: IMG5,
    title: "PET PARENTS HAVE SPOKEN",
    // github: "https://github.com/azurasanta/Phinancier",
    demo: "https://www.fitbark.com/reviews",
  },
  {
    id: 3,
    image: IMG6,
    title: "All Nippon Airways, Casino, Spotify",
    // github: "https://github.com/azurasanta/Interview-Portal",
    demo: "https://petertarka.com/",
  },
  {
    id: 4,
    image: IMG1,
    title: "Vetting",
    // github: "https://github.com/azurasanta/budget-calcy",
    demo: "https://howl.gg/",
  },
  {
    id: 5,
    image: IMG2,
    title: "Veting",
    // github: "https://github.com/azurasanta/CollegeDiary-Backend",
    demo: "https://rps.game/",
  },
  {
    id: 6,
    image: IMG3,
    title: "Rent an RV from a local owner in Europe",
    // github: "https://github.com/azurasanta/contests",
    demo: "https://www.goboony.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} className="btn">
                  Github
                </a> */}
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
