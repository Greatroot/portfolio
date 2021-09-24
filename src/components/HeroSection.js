import React from 'react';
import HeroImg from '../assets/images/portfolio1.JPG';
import PText from "./PText";
import Button from "./Button";

const HeroSection = () => {
    return (
        <div className="container">
            <h1 className="hero__heading">
                <span>Hello, this is</span>
                <span>Ben Kosa</span>
            </h1>
            <div className="hero__img">
                <img src={HeroImg} alt="My portfolio picture" />
            </div>
            <PText>
                I am a student at the University of Washington... bla bla bla. Need to fill this out.
            </PText>
            <Button link='/projects' />
        </div>
    );
};

export default HeroSection;