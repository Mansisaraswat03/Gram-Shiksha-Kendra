import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data bg">
          <h1 className="hero-top-data">Gram Shiksha Kendra</h1>
          <h2 className="hero-heading">Empower Rural Communities With Education</h2>
          <h3 className="hero-para">
           {/* ANYTIME ANYWHERE , LEARN ON YOUR SUITABLE TIME 📖 */}
          </h3>
          <h3 className="hero-para">
           Join us today in providing basic education and transforming lives in rural areas around globe .
          </h3>
          <Button className="btn hireme-btn">
            <NavLink to="/Mentorship"> JOIN US </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="..\images\background.jpg" alt="hero image" className="hero-img " />
          </picture>
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

  ${'' /* .bg::before{
    content : "";
    postion: absolute;
    background: url("..\images\background.jpg");
    height:100%;
    width:100%;
    z-index:-1;
    opacity: 0.8;
  } */}

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
    text-transform: uppercase;
    font-size: 4.4rem;
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

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;