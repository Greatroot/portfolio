import React from 'react';
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import styled from "styled-components";
import {AiFillCode} from "react-icons/ai";
import {GiRunningShoe} from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

const ServiceSection = () => {
    return (
        <ServicesSectionStyles>
            <div className="container">
                <SectionTitle heading="Interests"
                              subheading="the pillars of my life"/>
                <div className="services__allItems">
                    <ServicesSectionItem icon={ <AiFillCode /> }
                                         title='Programming'
                                         desc="I love to design, build, and create things that look cool and beautiful
                                         while making a difference in the world. Stylish and functional."
                    />
                    <ServicesSectionItem icon={ <GiRunningShoe /> }
                                         title='Triathlons'
                                         desc="I've been a competitive athlete ever since I could walk. Over the years
                                         I have done many different sports, most notably swimming and biking through
                                         clubs and running JV /varsity throughout middle and highschool. Now that I'm
                                         in college, I've decided to try putting all three together and compete for the
                                         University of Washington Triathlon Club."

                    />
                    <ServicesSectionItem icon={ <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} size="3x"/>}
                                         title='ASL and the Deaf Community'
                                         desc="I grew up with a deaf father and a DeafBlind mother and am thus a proud
                                         CODA (Child of Deaf Adult) and am passionate about the culture I was raised in
                                         and the lanugage I was raised with."

                    />
                </div>
            </div>
        </ServicesSectionStyles>
    );
};

export default ServiceSection;

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    } 
  }
`