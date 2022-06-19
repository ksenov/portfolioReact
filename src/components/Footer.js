import "./FooterStyles.css";

import React from "react";

import { 
    FaHome, 
    FaPhone, 
    FaMailBulk,
    FaFacebook,
    FaTwitter,
    FaLinkedin, } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        <div>  
                            <p>house address</p>
                            <p>Saint-Petersburg</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", 
                        marginRight: "2rem" }} />1-222-222-15</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>sldkjfks laskjdflk slkdfj klsdklfjsl sd</p>
                    <div className="social">
                        <FaPhone size={30} style={{ color: "#fff", 
                        marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", 
                        marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", 
                        marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;