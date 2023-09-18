import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import ReactPlayer from "react-player/youtube";

const About = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h3 className="hero-top-data">ABOUT US </h3>
          {/* <p className="hero-heading">Change is the end result of all true learning.Go confidently in the direction of your dreams! ...</p> */}
          <p className="hero-para">
            Gram Shiksha Kendra is a reputable basic education provider in rural
            areas. Our mission is to bridge the education gap in underserved
            communities by offering quality education to children who lack
            access to proper schooling. With a team of dedicated teachers and a
            well-rounded curriculum, we strive to empower students with the
            knowledge and skills they need to thrive in today's competitive
            world. At Gram Shiksha Kendra, we believe that education is the key
            to unlocking opportunities and transforming lives, and we are
            committed to making a positive impact in the lives of our students.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contactUs"> Contact </NavLink>
          </Button>
        </div>

        {/* for video  */}
        <div className="section-hero-image">
          <div className="video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=da4Y5c-2O_Y"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    font-size: 3.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  video {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }

    .hero-img {
      max-width: 50%;
    }

    .hero-para {
      max-width: 50%;
    }
  }
`;

export default About;
