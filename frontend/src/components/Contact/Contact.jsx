import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css';
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Contact() {
    return (
        <>
            <div>
                <nav>
                    <div className="home_nav">
                        <img className="logo" src="/logo-png.png" alt="logo" />
                        <ul className="list">
                            <li>
                                <Link to="/" onClick={() => setShow(false)}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setShow(false)}>
                                    About
                                </Link>
                            </li>
                            <Link to="/login" onClick={() => setShow(false)}>
                                <button className="Login_btn">Login/Signup</button>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>



            <div className="MainHero">
                <div className="container">
                    <div className="title">
                        <div>
                         youtube   
                        <Link to={"https://www.youtube.com/@SurajKumar-xm5fs"} target="_blank">
                            <FaYoutube />
                            LinkedIn
                            </Link>
                            <Link to={"www.linkedin.com/in/suraj-kumar-3a3914217"} target="_blank">
                            <FaLinkedin />
                            </Link>
                                            
                        </div>
                    </div>
                    <div className="image">
                        <img src="/contact_us.jpg" alt="hero" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Contact
