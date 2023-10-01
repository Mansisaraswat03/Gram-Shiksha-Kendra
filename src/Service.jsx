import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Service() {
  const Wrapper = styled.section`
    h1.heading {
        color: #8490ff;
        font-size: 40px;
        text-align: center;
        font-weight: 600;
        font-family: Poppins, sans-serif;
        margin-bottom: 10px;
     }
    
     .service__box {
        border-radius: 10px;
        width: 100%;
        background-color: #191919;
        colour:white;
        padding: 55px;
        transition: .4s ease;
     }
    
     .service__box:hover {
        transform: translateY(5px);
        background-image: linear-gradient(90deg, #ef0963, #add8e6);
        
     }
    
     .service__box:hover .icon {
        color: #fff;
     }
    
     .service__box:hover p.service__text .p__color {
              color: #fff !important;
     }
    
     .icon {
        font-size: 54px;
        font-weight: 400;
        margin-bottom: 23px;
        display: inline-flex;
        color: #f9004d;
     }
    
     p.service__text.p__color {
        color:white;
        margin-bottom: 0;
     }
    
     h1.service__text {
        font-size: 19px;
        color:white;
        font-family: Poppins, sans-serif;
        padding: 10px 0px;
     }
     .row{
        justify-content: space-between;
      }
    
     @media only screen and (max-width: 1024px) {
          .service__box {
            padding: 32px;
          }
          @media only screen and (max-width: 768px) {
          
            .col__3 {
               width: 100%;
               display: flex;
               flex-direction: column;
             }
           }
          }
              
     
     `;

  return (
    <Wrapper>
      <div className="service component__space test" id="Services">
        <div className="heading">
          <h1 className="heading">Our Features</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                    <line x1="2" y1="20" x2="2" y2="20"></line>
                  </svg>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">STUDY MATERIAL</h1>
                  <p className="p service__text p__color">
                    Access to digital versions of textbooks, study guides, and
                    reference materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">PROGRESS TRACKING</h1>
                  <p className="p service__text p__color">
                    Tools to monitor and visualize your learning progress,
                    including dashboards.
                  </p>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">DISCUSSION FORUMS</h1>
                  <p className="p service__text p__color">
                    Online communities where students and instructors can
                    discuss topics, ask questions, and collaborate.
                  </p>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">SUPPORT AND HELP</h1>
                  <p className="p service__text p__color">
                    Offering access to FAQs, support tickets, or live chat for
                    user assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">INTERACTIVE LEARNING</h1>
                  <p className="p service__text p__color">
                    Features such as quizzes, interactive simulations, and
                    exercises for hand-on learning.
                  </p>
                </div>
              </div>
            </div>

            <Link to ="/Employment"><div className="col__3">
              <div className="service__box pointer">
                <div className="icon">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="service__meta">
                  <h1 className="service__text">JOBS/INTERNSHIPS</h1>
                  <p className="p service__text p__color">
                    Detailed listings of available jobs , internships and
                    schoralships.
                  </p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Service;
