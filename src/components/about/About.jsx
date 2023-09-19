import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>9+ Years Software Developer</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Real time problem solved</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Competitive Coding</h5>
              <small>Pupil at Codeforces</small>
              <hr />
              <small>4* at Codechef</small>
            </article>
          </div>
          <p>
          Martin has a background in software development and UI design, with experience in a variety of programming languages and tools. He has developed automation software for Coordinate Measurement Machines (CMM) and robotic manufacturing cells, demonstrating expertise in integrating software and hardware systems.
          </p>
          <p>
          His work also includes the creation of Intelligent Manufacturing & Inspection (IMI) software using the PHP Laravel framework and the implementation of automated testing using PHPUnit and Selenium.
          </p>
          <p>
          Martin is skilled in web technologies, having integrated 3D CAD model viewers and implemented client/server messaging systems using JavaScript and Node.js.
          </p>
          <p>In addition, he has a strong foundation in web development, working on HTML prototypes, UI design, and dynamic web pages using technologies like HTML5, CSS3, AJAX, JSON, and XML. He has experience with XAMPP architecture and the Yii Framework.</p>
          <p>Martin's recent work showcases his proficiency in React and Redux, where he built user interfaces, company websites, analysis features, and report generation modules. He also demonstrated his ability to create real-time in-app notifications and shared components.</p>
          <p>Moreover, Martin has worked on high-traffic media websites, implementing responsive designs with Sass/CSS, utilizing Node.js for server-side rendering, and even venturing into mobile application development using React Native.</p>
          <p>Overall, Martin's career has been marked by a wide range of technical skills, from software development and automation to UI/UX design and web development, with a strong emphasis on utilizing modern web technologies and frameworks like React and Node.js.</p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
