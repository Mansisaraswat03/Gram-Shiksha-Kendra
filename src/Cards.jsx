import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card grid-three-column ">
          <img src={props.imgsrc} alt="my pics" className="card_img" />
          <div className="card_info">
            <h3 className="card_title">{props.sname}</h3>
            <p className="card_experience">{props.experience}</p>
            <p className="card_category">{props.salary}</p>
            <p className="card_vacancies">{props.vacancies}</p>
            <p className="card_location">{props.location}</p>
            <p className="card_description">{props.description}</p>
            <a href={props.link} target="_blank">
              <button className="btn">APPLY NOW</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
