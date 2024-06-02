import React from "react";

const Card = () => {
  const mySuperStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  };
  
    return(
      <div className="container" style={mySuperStyles}>
           <div className="card w-75">
              <img className="card-img-top" src="https://images.pexels.com/photos/2625275/pexels-photo-2625275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
              <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sed a vehicula ipsum. Nunc eget pellentesque mauris. In id nunc metus.</p>
              </div>
              <div className="card-footer text-center bg-white">
                <a href="#" className="btn btn-primary">Find out more!</a>
              </div>
           </div>
      </div>
        
    );
};

export default Card;