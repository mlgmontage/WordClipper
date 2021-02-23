import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="row navigation">
    <div className="four columns">
      <a className="logo" href="#">
        <span className="fa fa-paperclip" style={{ fontSize: "40px" }}></span>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          WordClipper
        </span>
      </a>
    </div>

    <div className="two columns">
      <div className="fa fa-search nav-icon"></div>
      <a href="#" className="nav-text">
        Explore
      </a>
    </div>

    <div className="two columns">
      <div className="fa fa-university nav-icon"></div>
      <Link to="/train" className="nav-text">
        Train
      </Link>
    </div>
    <div className="two columns">
      <div className="fa fa-bar-chart nav-icon"></div>
      <a href="#" className="nav-text">
        Stats
      </a>
    </div>
    <div className="two columns">
      <div className="fa fa-archive nav-icon"></div>
      <a href="./archive.html" className="nav-text">
        Archive
      </a>
    </div>
  </div>
);

export default Navigation;
