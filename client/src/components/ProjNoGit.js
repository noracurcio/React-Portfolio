import React from "react";

const ProjNoGit = (props) => {
  return (
    <div className="col-6-md col-12 projects">
      <h3>{props.title}</h3>
      <p>
        <a href={props.hosted}>Hosted page</a>
      </p>
      <p className="port-descript">{props.about}</p>
      <img className="portfolio-image" src={props.image} alt={props.image} />
    </div>
  );
};

export default ProjNoGit;
