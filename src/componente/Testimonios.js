import React from "react";
import './Testimonio.css'

function Testimonios(){
	return (
    <div className="container-testimony">
      <img
        className="img-testimony"
        src={require("../images/testimonio_emma.png")}
        alt="Foto de emma"
      />
      <div className="container-texto-testimony">
          <p className="title-testomony">Emma Bostian in Sweden</p>
          <p className="job-testimony">Software Engineer at Spotif</p>
          <p className="text-testimony">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>

      </div>
    </div>
  );
}

export default Testimonios;