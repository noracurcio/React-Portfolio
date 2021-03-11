import React from "react";
import Project from "../components/Project";
import ProjNoGit from "../components/ProjNoGit";
import tacos from "../assets/images/tacosplaylistgen.png";
// import weather1 from "./assets/images/wdash_1.png";
import weather2 from "../assets/images/wdash_2.png";
// import burger from "./assets/images/bger.png"
import congo from "../assets/images/congo.png";
import shakeitup from "../assets/images/shakeitup.png";
import thecoloconcierge from "../assets/images/thecoloconcierge.png";

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
            className="portfolio-image"
            image={tacos}
          />
          <Project
            title="Shake It Up"
            hosted="https://shake-it-up.herokuapp.com/"
            repo="https://github.com/noracurcio/Shake-It-Up"
            about="A Full-Stack MERN application that allows users to randomly select an item from different categories representing a mason jar full of paper wads. The user can also decide to shake again if they draw an item they do not like. Additional features include creating a custom category, adding new activities, delete and update activities, and login with a secure authentication."
            className="portfolio-image"
            image={shakeitup}
          />
          <Project
            title="CONGO"
            hosted="https://vast-fortress-76466.herokuapp.com/"
            repo="https://github.com/noracurcio/bootcampProjectTwo"
            about="A simple application for posting, ranking and commenting on music items. The user has the opportunity to create a profile and log in, like and comment on existing products or post new products. Created using Handlebars as the templating software and an SQL database.
            "
            className="portfolio-image"
            image={congo}
          />
          <Project
            title="Friendly Forecaster"
            hosted="https://noracurcio.github.io/Weather-Dashboard/"
            repo="https://github.com/noracurcio/Weather-Dashboard"
            about="This application can predict the weather in any global city, both daily and weekly. Local storeage is utilized to save history of cities searched."
            className="portfolio-image"
            image={weather2}
          />
          <ProjNoGit
            title="The Colorado Concierge"
            hosted="https://thecoloradoconcierge.com/"
            about="Business Website Built on Wordpress."
            className="portfolio-image"
            image={thecoloconcierge}
          />
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
