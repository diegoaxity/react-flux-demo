import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>React Flux</h1>
      <p>React, Flux, React Router</p>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
