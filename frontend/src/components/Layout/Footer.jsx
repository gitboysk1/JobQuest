import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import './Footer.css';

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved || Developed and Managed  By Suraj kumar.❤️</div>
      <div>
        
      
        <Link to={"https://www.youtube.com/@SurajKumar-xm5fs"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"www.linkedin.com/in/suraj-kumar-3a3914217"} target="_blank">
          <FaLinkedin />
        </Link>
     
      </div>
    </footer>
  );
};

export default Footer;