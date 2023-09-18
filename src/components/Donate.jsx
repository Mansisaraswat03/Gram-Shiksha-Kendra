import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Donate = () => {

  return (
    <Wrapper>
      <div className="top-btn" >
          <a href="https://www.indiadonates.org/donate-now" target="_blank"><img src="../images/donate1.webp" className="top-btn--icon" width="100" height="100" /></a>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    top: 20rem;
    right: 4rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 4;
      left: 40%;
      top: 13rem;
      opacity:0.5;
    }
  }
`;

export default Donate;