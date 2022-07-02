import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import React, { Suspense } from "react";
import IntroImg from "../assets/bg-main.png";
import IntroImgMob from "../assets/mob-bg.png";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img desktop" src={IntroImg} alt="IntroImg" />
                <div className="mobile">
                    <img className="into-img mob-img" src={IntroImgMob} alt="IntroImgMob" />
                </div>
                {/* <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Spline className="spline" scene="https://prod.spline.design/1VrKzBiZHT2yRppB/scene.splinecode" />
                </Suspense> */}
            </div>
            <div className="content">
                {/* <p>HI, I'AM A KSENOFONTOV BORIS</p>
                <h1>Frontend Developer.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div> */}
            </div>
        </div>
    );
};

export default HeroImg;