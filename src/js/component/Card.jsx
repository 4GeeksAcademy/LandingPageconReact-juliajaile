import React from "react";
import PropType from "prop-types";

const Card = ({imageUrl,title,description,buttonLabel,buttonUrl}) => {
  
    return(
           <div className="card">
              <img className="card-img-top" src={imageUrl}/>
              <div className="card-body text-center">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
              </div>
              <div className="card-footer text-center bg-white">
                <a href={buttonUrl} className="btn btn-primary">{buttonLabel}</a>
              </div>
           </div> 
    );
};

Card.propTypes = {
  title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
}

export default Card;