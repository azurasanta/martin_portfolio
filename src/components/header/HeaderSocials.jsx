import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/martin-josipovic-388613233/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>

      <a href="https://github.com/azurasanta" target="_blank">
        <BsGithub />{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
