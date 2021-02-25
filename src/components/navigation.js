import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="row navigation">
    <div className="four columns">
      <Link className="logo" to="/">
        <span className="fa fa-paperclip" style={{ fontSize: "30px" }}></span>{" "}
        <span
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          WordClipper
        </span>
      </Link>
    </div>

    <div className="two columns">
      <div className="fa fa-search nav-icon"></div>{" "}
      <Link to="/explore" className="nav-text">
        Explore
      </Link>
    </div>

    <div className="two columns">
      <div className="fa fa-university nav-icon"></div>{" "}
      <Link to="/train" className="nav-text">
        Train
      </Link>
    </div>
    <div className="two columns">
      <div className="fa fa-archive nav-icon"></div>{" "}
      <Link to="/archive" className="nav-text">
        Archive
      </Link>
    </div>
  </div>
);

export default Navigation;
