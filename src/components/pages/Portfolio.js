import React from "react";
import Project from "../Project";
import tacos from "./assets/images/tacosplaylistgen.png";
// import weather1 from "./assets/images/wdash_1.png";
import weather2 from "./assets/images/wdash_2.png";
// import burger from "./assets/images/bger.png"
import congo from "./assets/images/congo.png"


function Portfolio() {
  return (
    <div>
  <header>
    <h1>Portfolio</h1>

  </header>
  <br></br>


  <div className="container-fluid ">
    <section className="row">
      <Project
        title="TC Playlist Generator"
        hosted="https://noracurcio.github.io/Music-API-Group-Project/"
        repo="https://github.com/noracurcio/Music-API-Group-Project"
        about="Search and currate custom playlists by song title, artist, album or genre. Export your playlist for reuse. This application is built using Javascript, jQuery, CSS, HTML and ES6 featuring the user of third party API, Deezer."
        className ="portfolio-image"image={tacos}
      />
      <Project
        title="Friendly Forecaster"
        hosted="https://noracurcio.github.io/Weather-Dashboard/"
        repo="https://github.com/noracurcio/Weather-Dashboard"
        about="This application can predict the weather in any global city, both daily and weekly. Local storeage is utilized to save history of cities searched."
        className ="portfolio-image"image={weather2}
      />
      <Project
        title="CONGO"
        hosted="https://vast-fortress-76466.herokuapp.com/"
        repo="https://github.com/noracurcio/bootcampProjectTwo"
        about="This application was created for music lovers, by music lovers. On this forum, users can post a photo, description and review of a musical instrument or product. The post is then liked or disliked to get input form other users."
        className ="portfolio-image"image={congo}

        
      />
      
    </section>
    
  </div>
</div>

)
}

export default Portfolio;
