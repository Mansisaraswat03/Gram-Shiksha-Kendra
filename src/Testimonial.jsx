import React from "react";
import styled from "styled-components";

const Testimonial = () =>{
      const Wrapper = styled.section`
       .test{
         display: flex;
         height: 100vh;
         flex-direction:row;
       }
       
       
       .rev-section{
         margin: auto;
         padding: 0 1rem;
         max-width: 1100px;
         text-align: center;
       }
       
       .title{
         font-size: 4.5rem;
         text-transform: uppercase;
         color: rgb(50, 50, 50);
         margin-bottom: .5rem;
         font-weight:600;
         color:#8490ff;
       }
       .note{
         font-size: 2.1rem;
         color: rgb(150, 150, 150);
         font-style: italic;
           color: red;
       
       }
       
       .reviews{
         margin: 2rem auto;
         display: flex;
         flex-wrap: wrap;
       }
       .review{
         margin: 0 1rem;
         min-width: 300px;
         flex: 1;
       }
       
       .head-review{
         margin: 1.75rem auto;
         width: 150px;
         height: 150px;
       }
       img{
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 50%;
         box-shadow: 0 10px 25px rgba(0, 0, 0, .25);
       }
       
       .body-review{
         background-color: rgb(238, 238, 238);
         padding: 2.5rem;
         box-shadow: 2px 2px 10px 3px rgb(225, 225, 225);
       }
       .name-review{
         font-size: 1.5rem;
         color: rgb(50, 50, 50);
         margin-bottom: .25rem;
       }
       .place-review{
         color: red;
         font-style: italic;
       }
       .rating{
         color: rgb(253, 180, 42);
         margin: 1rem 0;
       }
       .desc-review{
         line-height: 1.5rem;
         letter-spacing: 1px;
         color: rgb(150, 150, 150);
       }
       
       @media (max-width: 678px){
         .review{
           margin-top: 1.5rem;
         }
       }
     `;
  return (
    <Wrapper>
    <div className="test">
    <div class="rev-section">

<h2 class="title">Our Guests Love Us</h2>
<p class="note">Learners around the globe . Hear from our viewers.....📚</p>

<div class="reviews">
<div class="review">
   <div class="head-review">
      <img src="https://www.sharda.ac.in/attachments/testimonial_images/thumbnail/Aadhya_Chaturvedi.jpg" width="250px"/>
   </div>
   <div class="body-review">
      <div class="name-review">Aadhya Chaturvedi</div>
      <div class="place-review">Pilibhit</div>
      <div class="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half"></i>
      </div>
      <div class="desc-review">In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made</div>
   </div>
</div>
<div class="review">
   <div class="head-review">
      <img src="https://www.sharda.ac.in/attachments/testimonial_images/thumbnail/Nitin_jangir.jpg" width="250px"/>
   </div>
   <div class="body-review">
      <div class="name-review">Nitin Jangir</div>
      <div class="place-review">Bishanpura</div>
      <div class="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
      </div>
      <div class="desc-review">GramShikshaKendra has always believed in helping and guiding its students and it was no different during the placement season. Regular classes held at our college to help us with our aptitude and technical skills were of great help</div>
   </div>
</div>
<div class="review">
   <div class="head-review">
      <img src="https://www.sharda.ac.in/attachments/testimonial_images/thumbnail/Piyush_Gaba.jpeg" width="250px"/>
   </div>
   <div class="body-review">
      <div class="name-review">Piyush Gaba</div>
      <div class="place-review">Saharanpur</div>
      <div class="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half"></i>
      </div>
      <div class="desc-review">The faculty members worked so hard on our overall development and conducted boot-camps and extra classes for us to enhance our technical and interpersonal skills.</div>
   </div>
</div>

</div>
</div>
</div>
</Wrapper>
  );
    
  }

export default Testimonial;