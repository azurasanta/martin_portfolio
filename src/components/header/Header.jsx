import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/pic_b.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="conatainer header__container">
        <h5> Hello I'm</h5>
        <h1>Software Developer</h1>

        <h5 className="text-light">Software Developer</h5>

        <CTA />
        <div className="me">
          <img className="me" src={ME} alt="me"></img>
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
