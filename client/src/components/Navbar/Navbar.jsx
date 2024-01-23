import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>Robotics Club of Assam Engineering College, Guwahati</h1>
            <span>Innovate to Motivate</span>
          </div>
        </div>
      </section>
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            {/* <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li> */}
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/activity">Club Activity</NavLink>
            </li>
            <li>
              <NavLink to="/achievements">Achievements</NavLink>
            </li>
            {/* <li>
              <NavLink to='/resources'>Resources</NavLink>
            </li> */}
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            {/* <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
          <div className="start">
            <div className="button">
              <Link to="/contact">Contact Us</Link>{" "}
            </div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times">
                <RxCross1 />{" "}
              </i>
            ) : (
              <i className="fa fa-bars">
                <GiHamburgerMenu />
              </i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
