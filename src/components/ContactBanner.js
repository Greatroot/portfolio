import React from 'react';
import PText from "./PText";
import Button from "./Button";
import styled from "styled-components";

// TODO: Make it more personalized and maybe add stuff about helping the deaf community.
const ContactBanner = () => {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>
                        Have a project in mind?
                    </PText>
                    <h3 className="contactBanner__heading">I'd be happy to help!</h3>
                    <Button btnText="Contact Now" link="/contact" />
                </div>
            </div>
        </ContactBannerStyles>
    );
};

export default ContactBanner;

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;