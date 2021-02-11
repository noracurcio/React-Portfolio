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
              Full Stack Web Developer with a background in customer relations,
              sales, and life-long dedication to learning. Effective at
              combining creativity and problem solving to develop user-friendly
              applications.
            </p>
            <p>
              Trained formally at the University of Denver receiving Full-Stack
              Certificate in an intensive boot camp program. Successfully
              planned, strategized, managed and executed entire applications
              with various technologies, demonstrating excellence in HTML, CSS,
              JavaScript, Express, Node.js and React. Regarded in the workplace
              as a bright and optimistic addition to any team and a valuable
              problem-solving asset. I am passionate about creating positive
              relationships and building technology that improves lives. Looking
              to bring the combination of my experiences, skills and passions to
              life in my next role as a web developer.
            </p>
            <ul className="">
              <li>
                Resume:
                <a href="https://docs.google.com/document/d/1jACkU424qCvCImhNG7XR6USqmNlpZybz26GEr52vV78/edit?usp=sharing">
                  Nora Curcio
                </a>
              </li>

              <li>
                LinkedIn:
                <a href="https://www.linkedin.com/in/nora-curcio-578b21184">
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
