import React from 'react';
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import AboutImg from '../assets/images/about-sec-img.png';
import styled from "styled-components";

// TODO: Replace this placeholder image with one of my own.
const AboutSection = () => {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle subheading="Let me introduce myself"
                                  heading="About me"
                    />
                    <PText>
                        I am from Olympia, Washington: the capital of Washington
                        State and a beautiful place that I will always hold dear.
                        I'm also proud to call Seattle, Washington my home and is
                        where I currently am studying computer science as an undergrad
                        at the University of Washington. I love to program, compete in
                        triathlons, run and bike around Seattle, and Deaf culture.
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button link="/projects"
                                btnText="Works" />
                        <Button link="/about"
                                btnText="Read More"
                                outline />

                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </AboutSectionStyle>
    );
};

export default AboutSection;

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left, .aboutSection__right {
    flex: 1;
  }
  .section__title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left, .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section__title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper, a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;