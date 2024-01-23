import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  const [showFullContent, setShowFullContent] = useState(true);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowFullContent(window.innerWidth > 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="main-about">
        <div class="about-section">
          <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
              Established on 09-08-2008, the Robotics Club stands as one of the
              oldest clubs of the Institution. <br /> <br />
              {showFullContent ? (
                <>
                  The main objectives of the club are - Organizing a range of
                  activities, including workshops, to guide students and
                  encourage a work spirit. Provides an environment to allow
                  technically inclined, like-minded students to get together
                  and follow their interests. Additionally, a variety of
                  tournaments are held to assist the students in the field of
                  robotics Students are trained to represent AEC in state and
                  national level competitions. The club is also deemed of making
                  a 'makerspace' where students will be allowed to engage in
                  independent work.
                  <br />
                  <br />
                </>
              ) : null}
              {showFullContent ? null : (
                <button onClick={toggleContent} className="ReadMoreButton">
                  Read More
                </button>
              )}
            </p>
            <div class="skills">
              <Link to="/team">
                <button>
                  <span>Team</span>
                </button>
              </Link>
              <Link to="/activity">
                <button>
                  <span>Activity</span>
                </button>
              </Link>
              <Link to="/events">
                <button>
                  <span>Events</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
