import React from "react";
import profPic from "./assets/images/noramountain.jpeg"

function Home() {
  return (
    <div>

      
      <h1>About Me</h1>
      <img src={profPic} alt="Profile Picture" className="img-fluid"></img>
      <p>
      Nora Curcio is a young professional and full time student looking to advance her skills as a web developer. She is an enthusiast of the outdoors and travel who also enjoys plants and people.
      </p>
      <p>
      Currently attending the University of Denver's full stack web development program, Nora is pursuing a professional career in web development.
      </p>

      <div>
        <footer className="container">
          <ul className="-center">
            <li>Resume:<a href="./assets/Nora_Curcio.pdf">Nora Curcio</a></li>

            <li>LinkedIn:<a href="https://www.linkedin.com/in/nora-curcio-578b21184">@noracurcio</a></li>

            <li>GitHub:<a href="https://github.com/noracurcio">@noracurcio</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Home;
