import React from 'react';
import Card from './Cards';
import styled from "styled-components";
import CardData from './CardData';


const ncard=(val)=>{
  return(
  <Card 
        imgsrc={val.imgsrc}
        sname={val.sname}
        experience={val.experience}
        salary={val.salary}
        vacancies={val.vacancies}
        location={val. location}
        description={val.description}
        link = {val.link}
      />
  );
}

const Employment = () => {

  return (
    <Wrapper>
    <h1 className='heading_style'>AVAILABLE JOBS</h1>
      {CardData.map(ncard)}
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .heading_style{
  padding: 30px 0;
  text-align: center;
  font-family: "Raleway",sans-serif;
  letter-spacing: 2px;
  font-weight: 500;
   color: #868686; 
  background-color: #fff;
  font-size: 3.5rem;
  margin-bottom: 10px;
}
.cards{
  width: 100%;
  height: auto;
}

.card{
  margin: 6%;
  ${'' /* transition: all 0.4s cubic-bezier(0.175,0.855,0,0.1); */}
  background-color: #fff;
  width: 21.25%;
  border-radius: 12px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0,0, 0.1);
  float: left;
}
.card:hover{
  box-shadow: 0px 30px 18px -8px rgba(0, 0,0, 0.1);
  transform: scale(1.05,1.05);
}
.card_img{
  width: 100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.card_info{
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
  background-color: #fff;
}
.card_category, .card_vacancies,.card_location,.card_experience{
  font-family: "Raleway",sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  background-color: #fff;
}

.card_title{
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: "Raleway",sans-serif;
  background-color: #fff;
  text-transform: capitalize;
}
button{
  padding: 5px 8px;
  font-family: "Raleway",sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
  background-color: #fff;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  align-text: center;
}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
   
    .cards,.card{
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .card_img{
      width:80%;
    }
    
    }
  `;

export default Employment;
