import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Saurabh
      </a>

      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#experience">Experience </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#services">Services </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio </a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/saurabhh-svg" target="_blank">
          <BsGithub />{" "}
        </a>
        <a href="https://www.linkedin.com/in/martin-josipovic-388613233/">
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Martin Josipovic All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
