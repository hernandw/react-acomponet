import React from "react";
import './Testimonio.css'

function Testimonios(props){
	return (
    <div className="container-testimony">
      <img
        className="img-testimony"
        src={require(`../images/testimonio_${props.image}.png`)}
        alt="Foto de emma"
      />
      <div className="container-texto-testimony">
          <p className="title-testomony"><strong>{props.name}</strong> in {props.country}</p>
          <p className="job-testimony">{props.position} at <strong>{props.business}</strong></p>
          <p className="text-testimony">"{props.testimony}"</p>

      </div>
    </div>
  );
}

export default Testimonios;