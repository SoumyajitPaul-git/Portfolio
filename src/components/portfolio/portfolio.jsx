import React from "react";
import "./portfolio.css";
import IMG5 from "../../assets/ToDoList.png";
import IMG3 from "../../assets/Weather.png";
import IMG4 from "../../assets/Snake.png";
import IMG1 from "../../assets/HeartDisease.jpg";
import IMG2 from "../../assets/Portfolio.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title:"Heart Disease Detector" ,
    github: "https://github.com/SoumyajitPaul-git/Heart-Disese-Detector",
    demo: "https://github.com/SoumyajitPaul-git/Heart-Disese-Detector"
  },
  {
    id: 2,
    image: IMG2,
    title:"Portfolio" ,
    github: "https://github.com/SoumyajitPaul-git/Portfolio",
    demo: "https://soumyajitpaul-git.github.io/Portfolio/"
  },
  {
    id: 3,
    image: IMG3,
    title:"Weather App" ,
    github: "https://github.com/SoumyajitPaul-git/Weather-App",
    demo: "https://soumyajitpaul-git.github.io/Weather-App/"
  },
  {
    id: 4,
    image: IMG4,
    title:"Snake Game" ,
    github: "https://github.com/SoumyajitPaul-git/Snake-Game",
    demo: "https://github.com/SoumyajitPaul-git/Snake-Game"
  },
  {
    id: 5,
    image: IMG5,
    title:"To-Do List" ,
    github: "https://github.com/SoumyajitPaul-git/ToDo-List/",
    demo: "https://soumyajitpaul-git.github.io/ToDo-List/"
  },
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>

          <div className="portfolio__item-cta">
            <a href={github} target="_blank" className="btn">
              Github
            </a>
            <a href={demo} target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
            )
          })
        }



      </div>
    </section>
  );
};

export default Portfolio;
