import React from "react";
import logo from "../assets/invoke_logo.png"

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="" width="120" />
    <p className="lead">
      Documentation that writes itself
    </p>
  </div>
);

export default Hero;
