import React from 'react';
import "./Events.css";

const Events = () => {
  const eventsData = [
    {
      title: 'Robo Sumo',
      description: 'Robo-sumo is a sport in which two robots attempt to push each other out of a circle.',
      image: 'images/sumobot.png',
    },
    {
      title: 'Robo Race',
      description: 'The Robo Race Challenge is a competition where teams build wireless or wired robots to race against each other on a track.',
      image: 'images/roborace.png',
    },
    {
      title: 'Robo Soccer',
      description: 'Robo Soccer is a variant of soccer, which is played by two robots in a team. Each team will have to score more goals than the opponent team.',
      image: 'images/soccerbot.png',
    },
    {
      title: 'Line Follower',
      description: 'Line Follower Robot (LFR) is a simple autonomously guided robot that follows a line drawn on the ground to either detect a dark line on a white surface or a white line on a dark.',
      image: 'images/robo6.png',
    },
    
  ];

  return (
    <>
   
    <h1 style={{textAlign:"center",margin:"1rem"}}>Events under Robo Club</h1>
    <div className="events-container">
    <div className="raec-about">
    R-AEC is the committee responsible for organizing robotics events under the banner of Udbhavanam. R-AEC organizes various events like Robo-Sumo, Robo-Soccer, Pick & Place, Line Follower, Maze solver etc., every year in a different and exciting way. This year, R-AEC is thrilled to host the following events.
    </div>
      {eventsData.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.image} alt={`Event ${index + 1}`} className="event-image" />
          <div className="event-details">
            <h2 className="event-title">{event.title}</h2>
            {/* <p className="event-date">{event.date}</p> */}
            {/* <p className="event-location">{event.location}</p> */}
            <p className="event-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Events;
