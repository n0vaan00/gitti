import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
       <nav className="navbar navbar-expand-md navbar-light bg-light fixed top">
           <a className="navbar-brand" href="#top">SPA Example</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse"
           data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
           aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>

           <div className="collapse navbar-collapse" id="navbarsExampleDefault">
               <ul className="navbar-nav mr-auto">
                   <li className="nav-item active">
                       <Link className="nav-link" to="/">Home</Link>
                   </li>
                   <li className="nav-item active">
                       <Link className="nav-link" to="/about">About</Link>
                   </li>
                   <li className="nav-item active">
                       <Link className="nav-link" to="/contactus">Contact Us</Link>
                   </li>
               </ul>
           </div>
        </nav>
    )
}

