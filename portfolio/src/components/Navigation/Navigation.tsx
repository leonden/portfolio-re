import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const actions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

class Navigation extends React.Component {
  render(): ReactNode {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
