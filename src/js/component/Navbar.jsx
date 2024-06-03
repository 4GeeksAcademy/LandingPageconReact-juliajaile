import React from "react";


const Navbar = () => {
 return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
               <a className="navbar-brand ms-5" href="#">Start Bootstrap</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>

              <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
                 <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                       <a className="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#">About</a>
                     </li>
                     <li className="nav-item active">
                       <a className="nav-link" href="#">Services<span class="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item me-5">
                       <a className="nav-link" href="#">Contact</a>
                     </li>
				         </ul>
			        </div>
	    </nav>
)
};

export default Navbar;