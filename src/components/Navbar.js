import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="container">
            <div className="img-container">
                <img src="../images/self-image.jpg" className="nav--image" />
            </div>
            <div className="detail-container">
                <h1 className="name">Shubham</h1>
            <p className="skill">FrontEnd Developer</p>
            <p className="website">shubham.website</p>
            <div className="button--container">
                <button className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="buttonText">Email</span>
                </button>
                <button className="linkedin">
                    <i class="fab fa-linkedin-in"></i>
                    <span className="buttonText">LinkedIn</span>
                </button>
            </div>
            </div>
             <div className="detail">
                <h4 className="heading">About</h4>
                <p className="text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
             <div className="detail">
                <h4 className="heading">Interests</h4>
                <p className="text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <footer className="footer-logos">
                <img src="../images/Twitter Icon.png" className="social--logo1" />
                <img src="../images/Facebook Icon.png" className="social--logo2" />
                <img src="../images/Instagram Icon.png" className="social--logo3" />
                <img src="../images/GitHub Icon.png" className="social--logo4"/>
            </footer>
        </div>
        
    )
}