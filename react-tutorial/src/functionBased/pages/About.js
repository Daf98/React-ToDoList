import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <ul>
      <li>
        <NavLink to="/about/singlepage">About the App</NavLink>
      </li>
      <li>
        <NavLink to="/about/anotherpage">About the author</NavLink>
      </li>
    </ul>
  );
};
export default About;
