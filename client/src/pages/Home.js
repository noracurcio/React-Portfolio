import React from "react";
import profPic from "../assets/images/noramountain.jpeg"
import resume from "../assets/resume.pdf"

function Home() {
  return (
    <>

    <h1 className="title">Nora Curcio</h1>

    <br></br>
    <div class="container">

      <div class="row">
        <div class="col">
          <img src={profPic} alt="headshot" className="img-fluid rounded profPic"></img>
        </div>

      <div class="col">
        <p>
          Nora Curcio is a young professional and full time student looking to advance her skills as a web developer. She is an enthusiast of the outdoors and travel who also enjoys plants and people.
        </p>
        <p>
          Currently attending the University of Denver's full stack web development program, Nora is pursuing a professional career in web development.
        </p>
        <ul className="">
        <li>Resume:<a href={resume}>Nora Curcio</a></li>

        <li>LinkedIn:<a href="https://www.linkedin.com/in/nora-curcio-578b21184">@noracurcio</a></li>

        <li>GitHub:<a href="https://github.com/noracurcio">@noracurcio</a></li>
      </ul>
      </div>
    </div>

   


    </div>
   
    
    </>
  );
}

export default Home;
