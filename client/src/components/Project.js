import React from "react";

const Project = (props) => {
  return (
    <div className="col-6-md col-12 projects">
      <h3>{props.title}</h3>
      <p>
        <a href={props.hosted}>Hosted page</a>
      </p>
      <p>
        <a href={props.repo}>GitHub Repository</a>
      </p>
      <p className="port-descript">{props.about}</p>
      <img className="portfolio-image" src={props.image} alt={props.image} />
    </div>
  );
};

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
export default Project;
export default ProjNoGit;
