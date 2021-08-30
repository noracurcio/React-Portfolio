import React from "react";
import profPic from "../assets/images/noramountain.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="title">Nora Curcio</h1>

      <br></br>
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src={profPic}
              alt="headshot"
              className="img-fluid rounded profPic"
            ></img>
          </div>

          <div class="col">
            <p>
              Leveraging a software development skillset and a background in
              sales, Nora is effective at combining creativity and problem
              solving to develop and sell web services and applications.
              Regarded in the workplace as a bright and optimistic addition to
              any team and a valuable problem-solving asset. Passionate about
              creating positive relationships and building technology that
              improves lives.<br></br> Technical Skills HTML5 | CSS3 |
              JavaScript (ES6) | jQuery | React.js | Bootstrap | Node.js |
              Express.js | REST API/AJAX and Servers | MySQL | NoSQL | MongoDB |
              GitHub | Heroku | Atlas | Adobe Photoshop | Adobe Illustrator |
              Microsoft Office Suite
            </p>
            <ul className="">
              <li>
                Resume:
                <a href="https://docs.google.com/document/d/1O3GB_t6-YtmgPmcBOwcXbO360Tf8TKzgh2GV3kHOUTs/edit?usp=sharing">
                  Nora Curcio
                </a>
              </li>

              <li>
                LinkedIn:
                <a href="https://www.linkedin.com/in/nora-curcio/">
                  @noracurcio
                </a>
              </li>

              <li>
                GitHub:<a href="https://github.com/noracurcio">@noracurcio</a>
              </li>

              <li>
                Email:
                <Link to="/Contact"> noracurcio@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
